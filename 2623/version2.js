/**
 * @param {Function} fn - The function whose results should be memoized (cached).
 * @return {Function} - A new function that caches the results of `fn` for given inputs.
 */
function memoize(fn) {
  const cache = new Map(); // Create a Map to store previously computed results

  return (...args) => {
    const key = JSON.stringify(args); // Generate a cache key
    return cache.has(key)
      ? cache.get(key) // Return cached result if available
      : cache.set(key, fn(...args)).get(key); // Compute, store, and return result
  };
}

// === Example Usage ===

let callCount = 0;

const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});

console.log(memoizedFn(2, 3)); // 5 (computed)
console.log(memoizedFn(2, 3)); // 5 (cached)
console.log(callCount);        // 1
