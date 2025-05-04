/**
 * @param {integer} init - The initial value of the counter
 * @return { increment: Function, decrement: Function, reset: Function }
 *
 * This function returns an object with three methods:
 * - `increment()`: increases the counter by 1 and returns the result
 * - `decrement()`: decreases the counter by 1 and returns the result
 * - `reset()`: resets the counter back to its initial value
 */
var createCounter = function (init) {
  // This variable holds the current count, and it's private to the three functions below
  let count = init;

  // Increases the count by 1, then returns the new value
  const increment = () => {
    return ++count; // Pre-increment: count is increased *before* returning
  }

  // Decreases the count by 1, then returns the new value
  const decrement = () => {
    return --count; // Pre-decrement: count is decreased *before* returning
  }

  // Resets the count back to the original initial value
  const reset = () => {
    count = init;
    return count;
  }

  // Return an object containing the three functions,
  // allowing access to the private `count` through controlled operations
  return {
    increment,
    decrement,
    reset,
  };
};

// Create a new counter starting at 5
const counter = createCounter(5);

console.log(counter.increment()); // Output: 6  (5 → 6)
console.log(counter.reset());     // Output: 5  (reset to initial value)
console.log(counter.decrement()); // Output: 4  (5 → 4)

/**
 * Summary:
 * - `createCounter(5)` sets `init = 5`, and `count = 5`
 * - `increment()` changes count to 6 and returns 6
 * - `reset()` resets count to 5
 * - `decrement()` then changes it to 4 and returns 4
 *
 * This pattern uses closure to maintain private state (`count`)
 * and expose only the intended operations.
 */
