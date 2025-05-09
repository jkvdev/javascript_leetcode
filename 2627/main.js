/**
 * Creates a debounced version of the given function `fn`.
 * The debounced function will delay calling `fn` until after
 * `t` milliseconds have passed since the last time it was called.
 *
 * @param {Function} fn - The function to debounce.
 * @param {number} t - Delay time in milliseconds.
 * @return {Function} - A debounced version of `fn`.
 */
var debounce = function (fn, t) {
  let id; // Store the timeout ID so we can cancel it later

  return function (...args) {
    clearTimeout(id); // Cancel any previously scheduled call
    id = setTimeout(() => {
      // Schedule a new call to `fn` after `t` ms
      fn.apply(this, args); // Call `fn` with the original `this` context and arguments
    }, t);
  };
};

// Create a debounced version of console.log with a delay of 100ms
const log = debounce(console.log, 100);

// Call the debounced function multiple times in quick succession
log('Hello 1'); // Will be canceled
setTimeout(() => log('Hello 2'), 50);  // Will cancel previous one
setTimeout(() => log('Hello 3'), 90);  // Will cancel previous one
setTimeout(() => log('Hello FINAL'), 150); // Will be the one that runs

// Expected output:
// Only "Hello FINAL" will appear in the console, after ~100ms from the last call
