// Constructor function to initialize the cache
var TimeLimitedCache = function () {
  // Using a Map to store key-value pairs
  // Each value is an object: { value: any, timeoutId: Timeout ID }
  this.cache = new Map();
};

/**
 * @param {number} key - The key to set in the cache
 * @param {number} value - The value to associate with the key
 * @param {number} duration - Duration (in milliseconds) before the key expires
 * @return {boolean} - Returns true if the key already existed and wasn't expired
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const alreadyExists = this.cache.get(key); // Check if key exists
  if (alreadyExists) {
    // Cancel the previous expiration timeout if key already exists
    clearTimeout(alreadyExists.timeoutId);
  }

  // Set a new timeout to automatically delete the key after `duration`
  const timeoutId = setTimeout(() => {
    this.cache.delete(key); // Key is removed once expired
  }, duration);

  // Update the cache with new value and expiration timer
  this.cache.set(key, {
    value,
    timeoutId,
  });

  // Return true if key existed (unexpired), otherwise false
  return Boolean(alreadyExists);
};

/**
 * @param {number} key - Key to retrieve from cache
 * @return {number} - Returns the stored value, or -1 if key doesn't exist
 */
TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) return this.cache.get(key).value;
  return -1;
};

/**
 * @return {number} - Count of currently non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

// === Full Test Code ===

// Paste the TimeLimitedCache code above here first

const cache = new TimeLimitedCache();

// Set key=1 with value=42 for 1000ms (1 second)
console.log(cache.set(1, 42, 1000)); // false (key didn't previously exist)

// Retrieve the value immediately
console.log(cache.get(1)); // 42

// Should count as 1 active (non-expired) key
console.log(cache.count()); // 1

// Wait 1100ms to allow the key to expire, then test again
setTimeout(() => {
  console.log(cache.get(1)); // -1 (expired)
  console.log(cache.count()); // 0
}, 1100);
