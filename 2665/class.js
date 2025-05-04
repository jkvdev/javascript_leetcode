/**
 * @param {integer} init - The initial value of the counter
 * @return { increment: Function, decrement: Function, reset: Function }
 *
 * This class-based version mimics the same functionality as the closure version,
 * providing methods to increment, decrement, and reset the counter.
 */
class Counter {
  constructor(init) {
    // `init` stores the original starting value for reset reference
    this.init = init;
    // `count` stores the current value and is updated with operations
    this.count = init;
  }

  // Increase count by 1 and return the new value
  increment() {
    return ++this.count; // Pre-increment: increment first, then return
  }

  // Decrease count by 1 and return the new value
  decrement() {
    return --this.count; // Pre-decrement: decrement first, then return
  }

  // Reset the counter to its initial value and return it
  reset() {
    this.count = this.init;
    return this.count;
  }
}

// Create an instance of the counter starting from 5
const counter = new Counter(5);

console.log(counter.increment()); // 6: count goes from 5 → 6
console.log(counter.reset()); // 5: count reset to initial value
console.log(counter.decrement()); // 4: count goes from 5 → 4

/**
 * Summary:
 * - The class stores state (`count`, `init`) in instance properties.
 * - Methods `increment`, `decrement`, and `reset` modify or restore the `count`.
 * - This behaves identically to the closure version but uses class-based OOP.
 */
