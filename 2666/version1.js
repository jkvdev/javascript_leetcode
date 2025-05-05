/**
 * @param {Function} fn - The function that should be executed only once.
 * @return {Function} - A new function that, when called, executes `fn` only once and ignores subsequent calls.
 */
var once = function (fn) {
  let called = false;  // Variable to track whether the function has been called already

  // Return a new function that will handle the logic for calling `fn` only once
  return function (...args) {
    // If the function hasn't been called yet
    if (!called) {
      called = true;  // Mark the function as called (now, subsequent calls will do nothing)
      // Apply the function `fn` with the provided arguments `args` and the correct context (`this` refers to the context in which the function was originally called)
      return fn.apply(this, args);  // Call `fn` and pass the arguments to it
    }
    // If the function has been called before, do nothing and return `undefined` implicitly
  };
};

// === Example Usage ===

// Example function that sums three numbers
let fn = (a, b, c) => a + b + c;

// Create a new function that can only be called once using `once()`
let onceFn = once(fn);

// First call to `onceFn` will execute `fn` and return the sum
console.log(onceFn(1, 2, 3));  // Output: 6 (1 + 2 + 3)

// Second call to `onceFn` will return `undefined` since `fn` can only be executed once
console.log(onceFn(2, 3, 6));  // Output: undefined (no effect, `fn` is not called again)
