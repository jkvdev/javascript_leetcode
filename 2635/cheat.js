// STRATEGY DESIGN PATTERN

/**
 * @param {number[]} arr - The input array of numbers.
 * @param {Function} fn - A callback function to apply to each element in the array.
 * @return {number[]} - A new array where each element is the result of applying `fn` to the corresponding element of `arr`.
 */
var map = function(arr, fn) {
  // JavaScript's built-in .map() method creates a new array
  // by applying the `fn` function to each element of `arr`.
  return arr.map(fn);
};

// === Example Test Case ===
const inputArray = [10, 20, 30];

// Define a transformation function: add index to value
const transformFn = (val, i) => val + i;

// Use the custom map function
const result = map(inputArray, transformFn);

// Print the result to the console
console.log(result); // Output: [10, 21, 32]
