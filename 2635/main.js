// STRATEGY DESIGN PATTERN

/**
 * @param {number[]} arr - The input array of numbers.
 * @param {Function} fn - A callback function that takes (element, index) as arguments.
 * @return {number[]} - A new array containing the results of applying `fn` to each element.
 */
var map = function (arr, fn) {
  // Initialize an empty array to store the results
  const res = [];

  // Loop over each index in the array using a for-in loop
  for (const i in arr) {
    // Convert the index string `i` to a number using Number(i),
    // then apply the function `fn` to the element and its index,
    // and push the result into the `res` array
    res.push(fn(arr[i], Number(i)));
  }

  // Return the new array after all elements have been processed
  return res;
};

// === Example Test Case ===
const inputArray = [10, 20, 30];

// Define a transformation function: add index to value
const transformFn = (val, i) => val + i;

// Use the custom map function
const result = map(inputArray, transformFn);

// Print the result to the console
console.log(result); // Output: [10, 21, 32]
