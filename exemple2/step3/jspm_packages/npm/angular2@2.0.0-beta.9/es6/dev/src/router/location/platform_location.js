/* */ 
"format cjs";
/**
 * This class should not be used directly by an application developer. Instead, use
 * {@link Location}.
 *
 * `PlatformLocation` encapsulates all calls to DOM apis, which allows the Router to be platform
 * agnostic.
 * This means that we can have different implementation of `PlatformLocation` for the different
 * platforms
 * that angular supports. For example, the default `PlatformLocation` is {@link
 * BrowserPlatformLocation},
 * however when you run your app in a WebWorker you use {@link WebWorkerPlatformLocation}.
 *
 * The `PlatformLocation` class is used directly by all implementations of {@link LocationStrategy}
 * when
 * they need to interact with the DOM apis like pushState, popState, etc...
 *
 * {@link LocationStrategy} in turn is used by the {@link Location} service which is used directly
 * by
 * the {@link Router} in order to navigate between routes. Since all interactions between {@link
 * Router} /
 * {@link Location} / {@link LocationStrategy} and DOM apis flow through the `PlatformLocation`
 * class
 * they are all platform independent.
 */
export class PlatformLocation {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fbG9jYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvcm91dGVyL2xvY2F0aW9uL3BsYXRmb3JtX2xvY2F0aW9uLnRzIl0sIm5hbWVzIjpbIlBsYXRmb3JtTG9jYXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCRztBQUNIO0FBZ0JBQSxDQUFDQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGNsYXNzIHNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSBieSBhbiBhcHBsaWNhdGlvbiBkZXZlbG9wZXIuIEluc3RlYWQsIHVzZVxuICoge0BsaW5rIExvY2F0aW9ufS5cbiAqXG4gKiBgUGxhdGZvcm1Mb2NhdGlvbmAgZW5jYXBzdWxhdGVzIGFsbCBjYWxscyB0byBET00gYXBpcywgd2hpY2ggYWxsb3dzIHRoZSBSb3V0ZXIgdG8gYmUgcGxhdGZvcm1cbiAqIGFnbm9zdGljLlxuICogVGhpcyBtZWFucyB0aGF0IHdlIGNhbiBoYXZlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbiBvZiBgUGxhdGZvcm1Mb2NhdGlvbmAgZm9yIHRoZSBkaWZmZXJlbnRcbiAqIHBsYXRmb3Jtc1xuICogdGhhdCBhbmd1bGFyIHN1cHBvcnRzLiBGb3IgZXhhbXBsZSwgdGhlIGRlZmF1bHQgYFBsYXRmb3JtTG9jYXRpb25gIGlzIHtAbGlua1xuICogQnJvd3NlclBsYXRmb3JtTG9jYXRpb259LFxuICogaG93ZXZlciB3aGVuIHlvdSBydW4geW91ciBhcHAgaW4gYSBXZWJXb3JrZXIgeW91IHVzZSB7QGxpbmsgV2ViV29ya2VyUGxhdGZvcm1Mb2NhdGlvbn0uXG4gKlxuICogVGhlIGBQbGF0Zm9ybUxvY2F0aW9uYCBjbGFzcyBpcyB1c2VkIGRpcmVjdGx5IGJ5IGFsbCBpbXBsZW1lbnRhdGlvbnMgb2Yge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9XG4gKiB3aGVuXG4gKiB0aGV5IG5lZWQgdG8gaW50ZXJhY3Qgd2l0aCB0aGUgRE9NIGFwaXMgbGlrZSBwdXNoU3RhdGUsIHBvcFN0YXRlLCBldGMuLi5cbiAqXG4gKiB7QGxpbmsgTG9jYXRpb25TdHJhdGVneX0gaW4gdHVybiBpcyB1c2VkIGJ5IHRoZSB7QGxpbmsgTG9jYXRpb259IHNlcnZpY2Ugd2hpY2ggaXMgdXNlZCBkaXJlY3RseVxuICogYnlcbiAqIHRoZSB7QGxpbmsgUm91dGVyfSBpbiBvcmRlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHJvdXRlcy4gU2luY2UgYWxsIGludGVyYWN0aW9ucyBiZXR3ZWVuIHtAbGlua1xuICogUm91dGVyfSAvXG4gKiB7QGxpbmsgTG9jYXRpb259IC8ge0BsaW5rIExvY2F0aW9uU3RyYXRlZ3l9IGFuZCBET00gYXBpcyBmbG93IHRocm91Z2ggdGhlIGBQbGF0Zm9ybUxvY2F0aW9uYFxuICogY2xhc3NcbiAqIHRoZXkgYXJlIGFsbCBwbGF0Zm9ybSBpbmRlcGVuZGVudC5cbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBsYXRmb3JtTG9jYXRpb24ge1xuICBhYnN0cmFjdCBnZXRCYXNlSHJlZkZyb21ET00oKTogc3RyaW5nO1xuICBhYnN0cmFjdCBvblBvcFN0YXRlKGZuOiBVcmxDaGFuZ2VMaXN0ZW5lcik6IHZvaWQ7XG4gIGFic3RyYWN0IG9uSGFzaENoYW5nZShmbjogVXJsQ2hhbmdlTGlzdGVuZXIpOiB2b2lkO1xuXG4gIHBhdGhuYW1lOiBzdHJpbmc7XG4gIHNlYXJjaDogc3RyaW5nO1xuICBoYXNoOiBzdHJpbmc7XG5cbiAgYWJzdHJhY3QgcmVwbGFjZVN0YXRlKHN0YXRlOiBhbnksIHRpdGxlOiBzdHJpbmcsIHVybDogc3RyaW5nKTogdm9pZDtcblxuICBhYnN0cmFjdCBwdXNoU3RhdGUoc3RhdGU6IGFueSwgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmcpOiB2b2lkO1xuXG4gIGFic3RyYWN0IGZvcndhcmQoKTogdm9pZDtcblxuICBhYnN0cmFjdCBiYWNrKCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQSBzZXJpYWxpemFibGUgdmVyc2lvbiBvZiB0aGUgZXZlbnQgZnJvbSBvblBvcFN0YXRlIG9yIG9uSGFzaENoYW5nZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFVybENoYW5nZUV2ZW50IHsgdHlwZTogc3RyaW5nOyB9XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsQ2hhbmdlTGlzdGVuZXIgeyAoZTogVXJsQ2hhbmdlRXZlbnQpOiBhbnk7IH1cbiJdfQ==