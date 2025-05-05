/**
 * @param {number[]} nums - The input array of numbers to be reduced.
 * @param {Function} fn - A callback function that takes (accumulator, currentValue) and returns the updated accumulator.
 * @param {number} init - The initial value to start the reduction.
 * @return {number} - The final accumulated result after applying the callback function to all elements.
 */
var reduce = function(nums, fn, init) {
  // Use JavaScript's built-in Array.prototype.reduce method to reduce the array.
  // Pass the callback function `fn` and the initial value `init` as arguments.
  return nums.reduce(fn, init);
};

// === Example Usage to test output ===

// Input array of numbers
const nums = [1, 2, 3, 4];

// Define a reduce function: sum all the elements
const sumFunction = (accumulator, current) => accumulator + current;

// Initial value for the accumulator
const initial = 0;

// Use the custom reduce function
const result = reduce(nums, sumFunction, initial);

// Output the result to the console
console.log(result); // Output: 10 (1 + 2 + 3 + 4)
