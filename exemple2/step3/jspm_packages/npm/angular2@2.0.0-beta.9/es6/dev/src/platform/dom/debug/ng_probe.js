/* */ 
"format cjs";
import { CONST_EXPR, assertionsEnabled } from 'angular2/src/facade/lang';
import { Provider } from 'angular2/src/core/di';
import { DOM } from 'angular2/src/platform/dom/dom_adapter';
import { getDebugNode } from 'angular2/src/core/debug/debug_node';
import { DomRootRenderer } from 'angular2/src/platform/dom/dom_renderer';
import { RootRenderer, NgZone, ApplicationRef } from 'angular2/core';
import { DebugDomRootRenderer } from 'angular2/src/core/debug/debug_renderer';
const CORE_TOKENS = CONST_EXPR({ 'ApplicationRef': ApplicationRef, 'NgZone': NgZone });
const INSPECT_GLOBAL_NAME = 'ng.probe';
const CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
/**
 * Returns a {@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 */
export function inspectNativeElement(element) {
    return getDebugNode(element);
}
function _createConditionalRootRenderer(rootRenderer) {
    if (assertionsEnabled()) {
        return _createRootRenderer(rootRenderer);
    }
    return rootRenderer;
}
function _createRootRenderer(rootRenderer) {
    DOM.setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    DOM.setGlobalVar(CORE_TOKENS_GLOBAL_NAME, CORE_TOKENS);
    return new DebugDomRootRenderer(rootRenderer);
}
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
export const ELEMENT_PROBE_PROVIDERS = CONST_EXPR([
    new Provider(RootRenderer, { useFactory: _createConditionalRootRenderer, deps: [DomRootRenderer] })
]);
export const ELEMENT_PROBE_PROVIDERS_PROD_MODE = CONST_EXPR([new Provider(RootRenderer, { useFactory: _createRootRenderer, deps: [DomRootRenderer] })]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfcHJvYmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RlYnVnL25nX3Byb2JlLnRzIl0sIm5hbWVzIjpbImluc3BlY3ROYXRpdmVFbGVtZW50IiwiX2NyZWF0ZUNvbmRpdGlvbmFsUm9vdFJlbmRlcmVyIiwiX2NyZWF0ZVJvb3RSZW5kZXJlciJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQVksTUFBTSwwQkFBMEI7T0FDMUUsRUFBc0IsUUFBUSxFQUFDLE1BQU0sc0JBQXNCO09BQzNELEVBQUMsR0FBRyxFQUFDLE1BQU0sdUNBQXVDO09BQ2xELEVBQVksWUFBWSxFQUFDLE1BQU0sb0NBQW9DO09BQ25FLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0NBQXdDO09BQy9ELEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUMsTUFBTSxlQUFlO09BQzNELEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0M7QUFFM0UsTUFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEVBQUMsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO0FBRXJGLE1BQU0sbUJBQW1CLEdBQUcsVUFBVSxDQUFDO0FBQ3ZDLE1BQU0sdUJBQXVCLEdBQUcsZUFBZSxDQUFDO0FBRWhEOzs7O0dBSUc7QUFDSCxxQ0FBcUMsT0FBTztJQUMxQ0EsTUFBTUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsQ0FBQ0E7QUFDL0JBLENBQUNBO0FBRUQsd0NBQXdDLFlBQVk7SUFDbERDLEVBQUVBLENBQUNBLENBQUNBLGlCQUFpQkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDeEJBLE1BQU1BLENBQUNBLG1CQUFtQkEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7SUFDM0NBLENBQUNBO0lBQ0RBLE1BQU1BLENBQUNBLFlBQVlBLENBQUNBO0FBQ3RCQSxDQUFDQTtBQUVELDZCQUE2QixZQUFZO0lBQ3ZDQyxHQUFHQSxDQUFDQSxZQUFZQSxDQUFDQSxtQkFBbUJBLEVBQUVBLG9CQUFvQkEsQ0FBQ0EsQ0FBQ0E7SUFDNURBLEdBQUdBLENBQUNBLFlBQVlBLENBQUNBLHVCQUF1QkEsRUFBRUEsV0FBV0EsQ0FBQ0EsQ0FBQ0E7SUFDdkRBLE1BQU1BLENBQUNBLElBQUlBLG9CQUFvQkEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsQ0FBQ0E7QUFDaERBLENBQUNBO0FBRUQ7O0dBRUc7QUFDSCxhQUFhLHVCQUF1QixHQUFVLFVBQVUsQ0FBQztJQUN2RCxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQ1osRUFBQyxVQUFVLEVBQUUsOEJBQThCLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQztDQUNwRixDQUFDLENBQUM7QUFFSCxhQUFhLGlDQUFpQyxHQUFVLFVBQVUsQ0FDOUQsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxZQUFZLEVBQUUsRUFBQyxVQUFVLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q09OU1RfRVhQUiwgYXNzZXJ0aW9uc0VuYWJsZWQsIGlzUHJlc2VudH0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7SW5qZWN0YWJsZSwgcHJvdmlkZSwgUHJvdmlkZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpJztcbmltcG9ydCB7RE9NfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcbmltcG9ydCB7RGVidWdOb2RlLCBnZXREZWJ1Z05vZGV9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RlYnVnL2RlYnVnX25vZGUnO1xuaW1wb3J0IHtEb21Sb290UmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX3JlbmRlcmVyJztcbmltcG9ydCB7Um9vdFJlbmRlcmVyLCBOZ1pvbmUsIEFwcGxpY2F0aW9uUmVmfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RGVidWdEb21Sb290UmVuZGVyZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RlYnVnL2RlYnVnX3JlbmRlcmVyJztcblxuY29uc3QgQ09SRV9UT0tFTlMgPSBDT05TVF9FWFBSKHsnQXBwbGljYXRpb25SZWYnOiBBcHBsaWNhdGlvblJlZiwgJ05nWm9uZSc6IE5nWm9uZX0pO1xuXG5jb25zdCBJTlNQRUNUX0dMT0JBTF9OQU1FID0gJ25nLnByb2JlJztcbmNvbnN0IENPUkVfVE9LRU5TX0dMT0JBTF9OQU1FID0gJ25nLmNvcmVUb2tlbnMnO1xuXG4vKipcbiAqIFJldHVybnMgYSB7QGxpbmsgRGVidWdFbGVtZW50fSBmb3IgdGhlIGdpdmVuIG5hdGl2ZSBET00gZWxlbWVudCwgb3JcbiAqIG51bGwgaWYgdGhlIGdpdmVuIG5hdGl2ZSBlbGVtZW50IGRvZXMgbm90IGhhdmUgYW4gQW5ndWxhciB2aWV3IGFzc29jaWF0ZWRcbiAqIHdpdGggaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnNwZWN0TmF0aXZlRWxlbWVudChlbGVtZW50KTogRGVidWdOb2RlIHtcbiAgcmV0dXJuIGdldERlYnVnTm9kZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNvbmRpdGlvbmFsUm9vdFJlbmRlcmVyKHJvb3RSZW5kZXJlcikge1xuICBpZiAoYXNzZXJ0aW9uc0VuYWJsZWQoKSkge1xuICAgIHJldHVybiBfY3JlYXRlUm9vdFJlbmRlcmVyKHJvb3RSZW5kZXJlcik7XG4gIH1cbiAgcmV0dXJuIHJvb3RSZW5kZXJlcjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZVJvb3RSZW5kZXJlcihyb290UmVuZGVyZXIpIHtcbiAgRE9NLnNldEdsb2JhbFZhcihJTlNQRUNUX0dMT0JBTF9OQU1FLCBpbnNwZWN0TmF0aXZlRWxlbWVudCk7XG4gIERPTS5zZXRHbG9iYWxWYXIoQ09SRV9UT0tFTlNfR0xPQkFMX05BTUUsIENPUkVfVE9LRU5TKTtcbiAgcmV0dXJuIG5ldyBEZWJ1Z0RvbVJvb3RSZW5kZXJlcihyb290UmVuZGVyZXIpO1xufVxuXG4vKipcbiAqIFByb3ZpZGVycyB3aGljaCBzdXBwb3J0IGRlYnVnZ2luZyBBbmd1bGFyIGFwcGxpY2F0aW9ucyAoZS5nLiB2aWEgYG5nLnByb2JlYCkuXG4gKi9cbmV4cG9ydCBjb25zdCBFTEVNRU5UX1BST0JFX1BST1ZJREVSUzogYW55W10gPSBDT05TVF9FWFBSKFtcbiAgbmV3IFByb3ZpZGVyKFJvb3RSZW5kZXJlcixcbiAgICAgICAgICAgICAgIHt1c2VGYWN0b3J5OiBfY3JlYXRlQ29uZGl0aW9uYWxSb290UmVuZGVyZXIsIGRlcHM6IFtEb21Sb290UmVuZGVyZXJdfSlcbl0pO1xuXG5leHBvcnQgY29uc3QgRUxFTUVOVF9QUk9CRV9QUk9WSURFUlNfUFJPRF9NT0RFOiBhbnlbXSA9IENPTlNUX0VYUFIoXG4gICAgW25ldyBQcm92aWRlcihSb290UmVuZGVyZXIsIHt1c2VGYWN0b3J5OiBfY3JlYXRlUm9vdFJlbmRlcmVyLCBkZXBzOiBbRG9tUm9vdFJlbmRlcmVyXX0pXSk7XG4iXX0=