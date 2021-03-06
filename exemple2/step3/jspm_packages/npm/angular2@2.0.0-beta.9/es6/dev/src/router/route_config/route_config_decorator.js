/* */ 
"format cjs";
import { RouteConfig as RouteConfigAnnotation } from './route_config_impl';
import { makeDecorator } from 'angular2/src/core/util/decorators';
export { Route, Redirect, AuxRoute, AsyncRoute } from './route_config_impl';
// Copied from RouteConfig in route_config_impl.
/**
 * The `RouteConfig` decorator defines routes for a given component.
 *
 * It takes an array of {@link RouteDefinition}s.
 */
export var RouteConfig = makeDecorator(RouteConfigAnnotation);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVfY29uZmlnX2RlY29yYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVfY29uZmlnL3JvdXRlX2NvbmZpZ19kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxXQUFXLElBQUkscUJBQXFCLEVBQWtCLE1BQU0scUJBQXFCO09BQ2xGLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUNBQW1DO0FBRS9ELFNBQVEsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxRQUF3QixxQkFBcUIsQ0FBQztBQUUzRixnREFBZ0Q7QUFDaEQ7Ozs7R0FJRztBQUNILFdBQVcsV0FBVyxHQUNsQixhQUFhLENBQUMscUJBQXFCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Um91dGVDb25maWcgYXMgUm91dGVDb25maWdBbm5vdGF0aW9uLCBSb3V0ZURlZmluaXRpb259IGZyb20gJy4vcm91dGVfY29uZmlnX2ltcGwnO1xuaW1wb3J0IHttYWtlRGVjb3JhdG9yfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS91dGlsL2RlY29yYXRvcnMnO1xuXG5leHBvcnQge1JvdXRlLCBSZWRpcmVjdCwgQXV4Um91dGUsIEFzeW5jUm91dGUsIFJvdXRlRGVmaW5pdGlvbn0gZnJvbSAnLi9yb3V0ZV9jb25maWdfaW1wbCc7XG5cbi8vIENvcGllZCBmcm9tIFJvdXRlQ29uZmlnIGluIHJvdXRlX2NvbmZpZ19pbXBsLlxuLyoqXG4gKiBUaGUgYFJvdXRlQ29uZmlnYCBkZWNvcmF0b3IgZGVmaW5lcyByb3V0ZXMgZm9yIGEgZ2l2ZW4gY29tcG9uZW50LlxuICpcbiAqIEl0IHRha2VzIGFuIGFycmF5IG9mIHtAbGluayBSb3V0ZURlZmluaXRpb259cy5cbiAqL1xuZXhwb3J0IHZhciBSb3V0ZUNvbmZpZzogKGNvbmZpZ3M6IFJvdXRlRGVmaW5pdGlvbltdKSA9PiBDbGFzc0RlY29yYXRvciA9XG4gICAgbWFrZURlY29yYXRvcihSb3V0ZUNvbmZpZ0Fubm90YXRpb24pO1xuIl19