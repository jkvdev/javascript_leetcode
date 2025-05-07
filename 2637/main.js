/**
 * @param {Function} fn - The asynchronous function to wrap. It should return a Promise.
 * @param {number} t - The time limit in milliseconds before rejecting the call.
 * @return {Function} - Returns a new function that enforces the time limit on `fn`.
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    // Return a new Promise that will either resolve with the result of `fn`
    // or reject with "Time Limit Exceeded" if the time limit is exceeded
    return new Promise((resolve, reject) => {
      // Start a timer that will reject the promise after `t` milliseconds
      const id = setTimeout(() => reject("Time Limit Exceeded"), t);

      // Call the original function `fn` with the provided arguments
      // If it resolves first, we resolve this wrapper Promise
      // If it rejects (e.g. throws an error), we reject this Promise
      fn(...args)
        .then((res) => resolve(res))   // Forward the successful result
        .catch((err) => reject(err))   // Forward any error from `fn`
        .finally(() => clearTimeout(id)); // Clear the timeout so it doesn't fire if `fn` finishes first
    });
  };
};

// === Test code ===
// Create a limited version of a function that resolves after `t` milliseconds
// This one simulates a slow async operation
const limited = timeLimit(
  (t) => new Promise((res) => setTimeout(() => res("Done!"), t)),
  100 // Enforce a 100ms time limit
);

// Test runner function to check the output
const runTest = async () => {
  try {
    // Call the limited function with 150ms delay
    // Since this is longer than the 100ms limit, it should throw a timeout error
    const result = await limited(150);
    console.log("Result:", result); // This won't run
  } catch (e) {
    // This will run, because the function takes too long and hits the timeout
    console.log("Error:", e); // Expected output: "Time Limit Exceeded"
  }
};

runTest();
