/**
 * @param {Function[]} functions - An array of functions to be composed.
 * @return {Function} - A new function that, when called with an argument `x`,
 *                      applies all the functions in the array from right to left.
 */
var compose = function (functions) {
  // Define a helper function that applies one function `f` to the current accumulator `acc`.
  // This will be used in reduceRight to pass the result from one function to the next.
  const fn = (acc, f) => f(acc);

  // Return a new function that takes an initial input `x`
  return function (x) {
    // Apply all functions from right to left using reduceRight
    // Example: compose([f, g]) => f(g(x))
    return functions.reduceRight(fn, x);
  };
};

// === Example Usage ===

// Define two functions:
// 1. (x) => x + 1 : adds 1 to a number
// 2. (x) => 2 * x : multiplies a number by 2

// Compose them using the custom `compose` function
const fn = compose([
  (x) => x + 1,   // f
  (x) => 2 * x    // g
]);

// Call the composed function with input 4:
// Step-by-step:
//   1. (x) => 2 * x runs first: 2 * 4 = 8
//   2. Then (x) => x + 1 runs on 8: 8 + 1 = 9
console.log(fn(4)); // Output: 9
