/**
 * @param {number} millis - The number of milliseconds to wait before resolving.
 * @return {Promise} - A Promise that resolves after the given delay.
 */
async function sleep(millis) {
  // Return a Promise that waits `millis` milliseconds before calling resolve()
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), millis);
  });
}

// === Example Usage ===

// Record the current timestamp in milliseconds
let t = Date.now();

// Call the sleep function with a 100ms delay.
// When the promise resolves, log the time difference.
sleep(100).then(() => {
  console.log(`Elapsed time: ${Date.now() - t}ms`); // Should print close to 100ms
});
