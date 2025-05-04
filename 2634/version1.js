/**
 * @param {number[]} arr - The input array of numbers.
 * @param {Function} fn - A callback function that takes (element, index) and returns a boolean.
 * @return {number[]} - A new array containing only the elements for which `fn` returns true.
 */
var filter = function(arr, fn) {
  // Initialize an empty array to store the filtered results
  const res = [];

  // Loop over each index in the input array using a standard `for` loop
  for (let i = 0; i < arr.length; i++) {
    
    // Apply the callback function `fn` to the current element and its index.
    // The function returns a boolean value indicating whether the element should be kept.
    if (fn(arr[i], i)) {
      // If the callback function returns true, add the element to the result array
      res.push(arr[i]);
    }
  }

  // Return the array of elements that passed the filter condition
  return res;
};

// === Example Usage to test output ===

// Input array of numbers
const inputArray = [10, 25, 30, 15, 5];

// Define a filter function: keep elements greater than 20
const filterFn = (val, i) => val > 20;

// Use the custom `filter` function to apply the condition
const result = filter(inputArray, filterFn);

// Output the result to the console
console.log(result); // Output: [25, 30]
