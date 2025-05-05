/**
 * @param {number[]} nums - The input array of numbers to be reduced.
 * @param {Function} fn - A callback function that takes two arguments: 
 *                        (accumulator, currentValue) and returns the updated accumulator.
 * @param {number} init - The initial value to start the reduction.
 * @return {number} - The final accumulated result after applying the callback function to all elements.
 */
var reduce = function(nums, fn, init) {
  // Initialize the result with the provided initial value
  let res = init;

  // Use a `for...in` loop to iterate over the indexes of the array
  for (const i in nums) {
    // Apply the callback to the current accumulated result and the current array value
    // The index `i` is a string, so nums[i] works fine, but i is not a number unless explicitly converted
    res = fn(res, nums[i]);
  }

  // Return the final accumulated result
  return res;
};

// === Example Usage to test output ===

// Define an input array of numbers
const nums = [1, 2, 3, 4];

// Create a reducer function that adds each number to the accumulator
const sumFunction = (accumulator, current) => accumulator + current;

// Set the initial accumulator value to 0
const initial = 0;

// Use the custom reduce function to process the array
const result = reduce(nums, sumFunction, initial);

// Log the result to the console
console.log(result); // Output: 10 (1 + 2 + 3 + 4)
