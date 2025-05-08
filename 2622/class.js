class TimeLimitedCache {
  // Initialize the cache as a Map to store key-value pairs
  // Each value will be an object: { value, timeoutId }
  cache = new Map();

  /**
   * Sets a key with a value and a time duration before it expires.
   * @param {number} key - The key to set.
   * @param {number} value - The value to associate with the key.
   * @param {number} duration - Duration in milliseconds before the key expires.
   * @return {boolean} - Returns true if the key was already in the cache and unexpired.
   */
  set(key, value, duration) {
    const alreadyExists = this.cache.get(key); // Check if key exists and is not expired

    if (alreadyExists) {
      // Clear the existing timeout to avoid double expiration
      clearTimeout(alreadyExists.timeoutId);
    }

    // Create a new timeout that will remove the key from the cache after `duration` ms
    const timeoutId = setTimeout(() => {
      this.cache.delete(key); // Delete the key after it expires
    }, duration);

    // Store the value and timeoutId in the cache
    this.cache.set(key, {
      value,
      timeoutId,
    });

    // Return true if the key already existed, otherwise false
    return Boolean(alreadyExists);
  }

  /**
   * Retrieves the value associated with the key.
   * @param {number} key - The key to get the value for.
   * @return {number} - The value if it exists and is not expired, else -1.
   */
  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }

  /**
   * Returns the number of currently active (non-expired) keys in the cache.
   * @return {number}
   */
  count() {
    return this.cache.size;
  }
}

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
