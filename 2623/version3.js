/**
 * @param {Function} fn - The function to memoize (i.e., cache its results).
 * @return {Function} - A new function that caches the results of `fn` to avoid recomputation.
 */
function memoize(fn) {
  const cache = {}; // Create a plain object to act as a cache for storing results

  return function (...args) {
    // Convert the arguments into a string key so we can use it as a cache key
    const key = JSON.stringify(args);

    // If key exists, use cached value. Otherwise, compute and store the result.
    return cache[key] ?? (cache[key] = fn(...args));
  };
}

// === Example Usage ===

// A counter to demonstrate how many times the original function is actually called
let callCount = 0;

// The function to be memoized: adds two numbers
const memoizedFn = memoize(function (a, b) {
  callCount += 1; // Increment call count every time the original function runs
  return a + b; // Return the sum of the two inputs
});

// First call: result will be computed and cached
console.log(memoizedFn(2, 3)); // Output: 5

// Second call with same arguments: result will be returned from cache
console.log(memoizedFn(2, 3)); // Output: 5

// Print how many times the original function was called
// Should be 1, because the second call reused the cached result
console.log(callCount); // Output: 1
