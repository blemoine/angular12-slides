/* */ 
"format cjs";
import { RegExpWrapper, StringWrapper, isPresent } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
import { StringMapWrapper } from 'angular2/src/facade/collection';
import { TouchMap, normalizeString } from '../../utils';
import { RootUrl, convertUrlParamsToArray } from '../../url_parser';
import { GeneratedUrl, MatchedUrl } from './route_path';
/**
 * Identified by a `...` URL segment. This indicates that the
 * Route will continue to be matched by child `Router`s.
 */
class ContinuationPathSegment {
    constructor() {
        this.name = '';
        this.specificity = '';
        this.hash = '...';
    }
    generate(params) { return ''; }
    match(path) { return true; }
}
/**
 * Identified by a string not starting with a `:` or `*`.
 * Only matches the URL segments that equal the segment path
 */
class StaticPathSegment {
    constructor(path) {
        this.path = path;
        this.name = '';
        this.specificity = '2';
        this.hash = path;
    }
    match(path) { return path == this.path; }
    generate(params) { return this.path; }
}
/**
 * Identified by a string starting with `:`. Indicates a segment
 * that can contain a value that will be extracted and provided to
 * a matching `Instruction`.
 */
class DynamicPathSegment {
    constructor(name) {
        this.name = name;
        this.specificity = '1';
        this.hash = ':';
    }
    match(path) { return path.length > 0; }
    generate(params) {
        if (!StringMapWrapper.contains(params.map, this.name)) {
            throw new BaseException(`Route generator for '${this.name}' was not included in parameters passed.`);
        }
        return normalizeString(params.get(this.name));
    }
}
DynamicPathSegment.paramMatcher = /^:([^\/]+)$/g;
/**
 * Identified by a string starting with `*` Indicates that all the following
 * segments match this route and that the value of these segments should
 * be provided to a matching `Instruction`.
 */
class StarPathSegment {
    constructor(name) {
        this.name = name;
        this.specificity = '0';
        this.hash = '*';
    }
    match(path) { return true; }
    generate(params) { return normalizeString(params.get(this.name)); }
}
StarPathSegment.wildcardMatcher = /^\*([^\/]+)$/g;
/**
 * Parses a URL string using a given matcher DSL, and generates URLs from param maps
 */
export class ParamRoutePath {
    /**
     * Takes a string representing the matcher DSL
     */
    constructor(routePath) {
        this.routePath = routePath;
        this.terminal = true;
        this._assertValidPath(routePath);
        this._parsePathString(routePath);
        this.specificity = this._calculateSpecificity();
        this.hash = this._calculateHash();
        var lastSegment = this._segments[this._segments.length - 1];
        this.terminal = !(lastSegment instanceof ContinuationPathSegment);
    }
    matchUrl(url) {
        var nextUrlSegment = url;
        var currentUrlSegment;
        var positionalParams = {};
        var captured = [];
        for (var i = 0; i < this._segments.length; i += 1) {
            var pathSegment = this._segments[i];
            currentUrlSegment = nextUrlSegment;
            if (pathSegment instanceof ContinuationPathSegment) {
                break;
            }
            if (isPresent(currentUrlSegment)) {
                // the star segment consumes all of the remaining URL, including matrix params
                if (pathSegment instanceof StarPathSegment) {
                    positionalParams[pathSegment.name] = currentUrlSegment.toString();
                    captured.push(currentUrlSegment.toString());
                    nextUrlSegment = null;
                    break;
                }
                captured.push(currentUrlSegment.path);
                if (pathSegment instanceof DynamicPathSegment) {
                    positionalParams[pathSegment.name] = currentUrlSegment.path;
                }
                else if (!pathSegment.match(currentUrlSegment.path)) {
                    return null;
                }
                nextUrlSegment = currentUrlSegment.child;
            }
            else if (!pathSegment.match('')) {
                return null;
            }
        }
        if (this.terminal && isPresent(nextUrlSegment)) {
            return null;
        }
        var urlPath = captured.join('/');
        var auxiliary = [];
        var urlParams = [];
        var allParams = positionalParams;
        if (isPresent(currentUrlSegment)) {
            // If this is the root component, read query params. Otherwise, read matrix params.
            var paramsSegment = url instanceof RootUrl ? url : currentUrlSegment;
            if (isPresent(paramsSegment.params)) {
                allParams = StringMapWrapper.merge(paramsSegment.params, positionalParams);
                urlParams = convertUrlParamsToArray(paramsSegment.params);
            }
            else {
                allParams = positionalParams;
            }
            auxiliary = currentUrlSegment.auxiliary;
        }
        return new MatchedUrl(urlPath, urlParams, allParams, auxiliary, nextUrlSegment);
    }
    generateUrl(params) {
        var paramTokens = new TouchMap(params);
        var path = [];
        for (var i = 0; i < this._segments.length; i++) {
            let segment = this._segments[i];
            if (!(segment instanceof ContinuationPathSegment)) {
                path.push(segment.generate(paramTokens));
            }
        }
        var urlPath = path.join('/');
        var nonPositionalParams = paramTokens.getUnused();
        var urlParams = nonPositionalParams;
        return new GeneratedUrl(urlPath, urlParams);
    }
    toString() { return this.routePath; }
    _parsePathString(routePath) {
        // normalize route as not starting with a "/". Recognition will
        // also normalize.
        if (routePath.startsWith("/")) {
            routePath = routePath.substring(1);
        }
        var segmentStrings = routePath.split('/');
        this._segments = [];
        var limit = segmentStrings.length - 1;
        for (var i = 0; i <= limit; i++) {
            var segment = segmentStrings[i], match;
            if (isPresent(match = RegExpWrapper.firstMatch(DynamicPathSegment.paramMatcher, segment))) {
                this._segments.push(new DynamicPathSegment(match[1]));
            }
            else if (isPresent(match = RegExpWrapper.firstMatch(StarPathSegment.wildcardMatcher, segment))) {
                this._segments.push(new StarPathSegment(match[1]));
            }
            else if (segment == '...') {
                if (i < limit) {
                    throw new BaseException(`Unexpected "..." before the end of the path for "${routePath}".`);
                }
                this._segments.push(new ContinuationPathSegment());
            }
            else {
                this._segments.push(new StaticPathSegment(segment));
            }
        }
    }
    _calculateSpecificity() {
        // The "specificity" of a path is used to determine which route is used when multiple routes
        // match
        // a URL. Static segments (like "/foo") are the most specific, followed by dynamic segments
        // (like
        // "/:id"). Star segments add no specificity. Segments at the start of the path are more
        // specific
        // than proceeding ones.
        //
        // The code below uses place values to combine the different types of segments into a single
        // string that we can sort later. Each static segment is marked as a specificity of "2," each
        // dynamic segment is worth "1" specificity, and stars are worth "0" specificity.
        var i, length = this._segments.length, specificity;
        if (length == 0) {
            // a single slash (or "empty segment" is as specific as a static segment
            specificity += '2';
        }
        else {
            specificity = '';
            for (i = 0; i < length; i++) {
                specificity += this._segments[i].specificity;
            }
        }
        return specificity;
    }
    _calculateHash() {
        // this function is used to determine whether a route config path like `/foo/:id` collides with
        // `/foo/:name`
        var i, length = this._segments.length;
        var hashParts = [];
        for (i = 0; i < length; i++) {
            hashParts.push(this._segments[i].hash);
        }
        return hashParts.join('/');
    }
    _assertValidPath(path) {
        if (StringWrapper.contains(path, '#')) {
            throw new BaseException(`Path "${path}" should not include "#". Use "HashLocationStrategy" instead.`);
        }
        var illegalCharacter = RegExpWrapper.firstMatch(ParamRoutePath.RESERVED_CHARS, path);
        if (isPresent(illegalCharacter)) {
            throw new BaseException(`Path "${path}" contains "${illegalCharacter[0]}" which is not allowed in a route config.`);
        }
    }
}
ParamRoutePath.RESERVED_CHARS = RegExpWrapper.create('//|\\(|\\)|;|\\?|=');
