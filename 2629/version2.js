/**
 * @param {Function[]} functions - An array of functions to be composed.
 * @return {Function} - A new function that, when called with an argument `x`,
 *                      applies all the functions in the array from right to left.
 */
var compose = function (functions) {
  // Return a new function that takes a single input `x`
  return function (x) {
    // Use Array.prototype.reduceRight to apply each function from right to left
    // The reduceRight method starts with the last function in the array and applies it to `x`,
    // then continues applying each previous function to the result of the one after it.
    
    // (acc, f) => f(acc) means:
    //   - acc: the accumulated value (starts as `x`)
    //   - f: the current function being applied
    //   - f(acc): applies the function `f` to the current value
    
    return functions.reduceRight(
      (acc, f) => f(acc), // apply the function `f` to the accumulated result `acc`
      x                  // initial value (input passed into the composed function)
    );
  };
};

// === Example Usage ===

// Define two simple functions:
// (x) => x + 1 → adds 1 to its input
// (x) => 2 * x → multiplies its input by 2

const fn = compose([
  (x) => x + 1,   // f
  (x) => 2 * x    // g
]);

// When calling fn(4):
// Step 1: Start with x = 4
// Step 2: Apply (x) => 2 * x → 2 * 4 = 8
// Step 3: Apply (x) => x + 1 → 8 + 1 = 9
// Final result is 9
console.log(fn(4)); // Output: 9
