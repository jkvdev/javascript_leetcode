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
  // Initialize the internal counter with the provided starting value.
  // This value is private and preserved through a closure.
  let count = init;

  // Return an object with three methods that operate on the private count.
  return {
    // Increments the count by 1, then returns the updated value.
    increment: () => ++count, // Pre-increment: count becomes count + 1 *before* being returned

    // Decrements the count by 1, then returns the updated value.
    decrement: () => --count, // Pre-decrement: count becomes count - 1 *before* being returned

    // Resets the count to the original initial value and returns it.
    reset: () => {
      count = init;
      return count;
    }
  };
};

// Create a new counter that starts at 5
const counter = createCounter(5);

// Call increment(): increases the internal count from 5 to 6 and logs 6
console.log(counter.increment()); // Output: 6

// Call reset(): sets the internal count back to 5 and logs 5
console.log(counter.reset());     // Output: 5

// Call decrement(): decreases the internal count from 5 to 4 and logs 4
console.log(counter.decrement()); // Output: 4

/**
 * Summary:
 * - The `createCounter` function uses closure to encapsulate and protect the `count` variable.
 * - Only the returned methods can access or modify `count`, preventing external tampering.
 * - Each method performs a clear operation and returns the updated count:
 *     - `increment()` increases it,
 *     - `decrement()` decreases it,
 *     - `reset()` restores it to the initial value.
 * - This is a classic example of functional encapsulation in JavaScript.
 */
