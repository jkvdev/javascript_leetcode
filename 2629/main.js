/**
 * @param {Function[]} functions - An array of functions to be composed.
 * @return {Function} - A new function that, when called with an argument `x`,
 *                      applies all the functions in the array from right to left.
 */
var compose = function (functions) {
  // Return a new function that takes an input `x`
  return function (x) {
    // Iterate over the functions array in reverse order (right to left)
    for (const fn of functions.reverse()) {
      // Apply each function to the current value of `x` and update `x`
      x = fn(x);
    }
    // Return the final result after all functions have been applied
    return x;
  };
};

// === Example Usage ===

// Define two simple functions:
// (x) => x + 1 → adds 1 to the input
// (x) => 2 * x → multiplies the input by 2

// Compose them: the execution will apply (x) => x + 1 to the result of (x) => 2 * x
// In math terms: f(g(x)) where f = x + 1, g = 2 * x

const fn = compose([
  (x) => x + 1,   // f
  (x) => 2 * x    // g
]);

// Call the composed function with input 4:
// Step 1: 2 * 4 = 8
// Step 2: 8 + 1 = 9
console.log(fn(4)); // Output: 9
