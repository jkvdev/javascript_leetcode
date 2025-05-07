/**
 * @param {Function} fn - The asynchronous function to wrap. It should return a Promise.
 * @param {number} t - The time limit in milliseconds before rejecting the call.
 * @return {Function} - Returns a new function that enforces the time limit on `fn`.
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    // Create and return a new Promise
    return new Promise(async (resolve, reject) => {
      // Start a timer that will automatically reject after t milliseconds
      const id = setTimeout(() => reject("Time Limit Exceeded"), t);

      try {
        // Await the original function `fn` with the given arguments
        // If it resolves before the timeout, store the result in `res`
        const res = await fn(...args);

        // Resolve this wrapper Promise with the result
        resolve(res);
      } catch (err) {
        // If the original function throws/rejects, reject this wrapper Promise with that error
        reject(err);
      } finally {
        // Always clear the timeout regardless of success/failure
        // This prevents the reject from firing later after a successful resolve
        clearTimeout(id);
      }
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
