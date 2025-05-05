/**
 * @param {Function} fn - The function whose results should be memoized (cached).
 * @return {Function} - A new function that caches the results of `fn` for given inputs.
 */
function memoize(fn) {
  const cache = new Map(); // Create a Map to store previously computed results

  return function (...args) {
    // Convert the arguments into a JSON string to use as a unique key for caching.
    // Example: memoizedFn(2, 3) → key = "[2,3]"
    const key = JSON.stringify(args);

    // Check if the cache already has a result for these arguments
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    
    return cache.get(key); // If so, return the cached result without recomputing
  };
}

// === Example Usage ===

// A counter to demonstrate how many times the original function is actually called
let callCount = 0;

// The function to be memoized: adds two numbers
const memoizedFn = memoize(function (a, b) {
  callCount += 1; // Increment call count every time the original function runs
  return a + b;    // Return the sum of the two inputs
});

// First call: result will be computed and cached
console.log(memoizedFn(2, 3)); // Output: 5

// Second call with same arguments: result will be returned from cache
console.log(memoizedFn(2, 3)); // Output: 5

// Print how many times the original function was called
// Should be 1, because the second call reused the cached result
console.log(callCount); // Output: 1
