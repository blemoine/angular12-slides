/* */ 
'use strict';function normalizeValidator(validator) {
    if (validator.validate !== undefined) {
        return function (c) { return validator.validate(c); };
    }
    else {
        return validator;
    }
}
exports.normalizeValidator = normalizeValidator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplX3ZhbGlkYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL3NyYy9jb21tb24vZm9ybXMvZGlyZWN0aXZlcy9ub3JtYWxpemVfdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbIm5vcm1hbGl6ZVZhbGlkYXRvciJdLCJtYXBwaW5ncyI6IkFBT0EsNEJBQW1DLFNBQWlDO0lBQ2xFQSxFQUFFQSxDQUFDQSxDQUFhQSxTQUFVQSxDQUFDQSxRQUFRQSxLQUFLQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtRQUNsREEsTUFBTUEsQ0FBQ0EsVUFBQ0EsQ0FBVUEsSUFBS0EsT0FBWUEsU0FBVUEsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsRUFBbENBLENBQWtDQSxDQUFDQTtJQUM1REEsQ0FBQ0E7SUFBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDTkEsTUFBTUEsQ0FBV0EsU0FBU0EsQ0FBQ0E7SUFDN0JBLENBQUNBO0FBQ0hBLENBQUNBO0FBTmUsMEJBQWtCLHFCQU1qQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWYWxpZGF0b3J9IGZyb20gJy4vdmFsaWRhdG9ycyc7XG5pbXBvcnQge0NvbnRyb2x9IGZyb20gXCIuLi9tb2RlbFwiO1xuXG5leHBvcnQgdHlwZSBjdHJsRnVuYyA9ICgoYzogQ29udHJvbCkgPT4ge1xuICBba2V5OiBzdHJpbmddOiBhbnlcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVmFsaWRhdG9yKHZhbGlkYXRvcjogKGN0cmxGdW5jIHwgVmFsaWRhdG9yKSk6IGN0cmxGdW5jIHtcbiAgaWYgKCg8VmFsaWRhdG9yPnZhbGlkYXRvcikudmFsaWRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAoYzogQ29udHJvbCkgPT4gKDxWYWxpZGF0b3I+dmFsaWRhdG9yKS52YWxpZGF0ZShjKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGN0cmxGdW5jPnZhbGlkYXRvcjtcbiAgfVxufVxuIl19