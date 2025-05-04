/**
 * @param {number[]} arr - The input array of numbers.
 * @param {Function} fn - A callback function that takes (element, index) and returns a boolean.
 * @return {number[]} - A new array containing only the elements for which `fn` returned true.
 */
var filter = function(arr, fn) {
  // Use the built-in Array.filter method, passing in the callback function `fn`.
  // The `fn` should return true for elements to be included in the result.
  return arr.filter(fn);
};

// === Example Usage to test output ===

// Input array
const inputArray = [10, 25, 30, 15, 5];

// Define a filter function: keep elements greater than 20
const filterFn = (val, i) => val > 20;

// Use the custom filter function
const result = filter(inputArray, filterFn);

// Output the result to the console
console.log(result); // Output: [25, 30]
