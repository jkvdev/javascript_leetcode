/**
 * This function takes an initial number `n`
 * and returns a new function (a counter) that, when called,
 * returns the current value of `n` and then increments it.
 *
 * @param {number} n - The starting value for the counter
 * @return {Function} - A function that returns the next number each time it's called
 */
var createCounter = function(n) {
    
  // This inner function has access to the outer `n` due to closure
  return function() {
      // Return the current value of `n`, then increment it
      return n++;
  };
};

// We call createCounter(10), so `n` starts at 10
const counter = createCounter(10);

// Each time we call counter(), it returns the current value and increments it
console.log(counter()); // Output: 10 (then n becomes 11)
console.log(counter()); // Output: 11 (then n becomes 12)
console.log(counter()); // Output: 12 (then n becomes 13)

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 *
 * Explanation:
 * - `createCounter(10)` creates a private `n = 10` inside its scope.
 * - The returned function "remembers" `n` between calls because of closure.
 * - `n++` is post-increment: it returns `n` first, then increments it.
 */
