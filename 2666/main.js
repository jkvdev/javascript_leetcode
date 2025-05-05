/**
 * @param {Function} fn - The function that should be executed only once.
 * @return {Function} - A new function that, when called, executes `fn` only once and ignores subsequent calls.
 */
var once = function (fn) {
  let called = false;  // Track if the function has been called before

  // Return a new function
  return function (...args) {
    if (called) return undefined;  // If the function has been called, do nothing and return `undefined`

    called = true;  // Mark the function as called
    return fn(...args);  // Call the original function `fn` with the provided arguments
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
