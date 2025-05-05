/**
 * @param {number[]} nums - The input array of numbers to be reduced.
 * @param {Function} fn - A callback function that takes two arguments: (accumulator, currentValue) and returns the updated accumulator.
 * @param {number} init - The initial value to start the reduction.
 * @return {number} - The final accumulated result after applying the callback function to all elements.
 */
var reduce = function(nums, fn, init) {
  // Initialize `res` with the provided initial value
  let res = init;

  // Use forEach to iterate through each number `n` in the array
  nums.forEach((n) => {
    // Apply the reducer function to update the result
    res = fn(res, n);
  });

  // Return the accumulated result after processing all elements
  return res;
};

// === Example Usage to test output ===

// Input array of numbers to reduce
const nums = [1, 2, 3, 4];

// Define the reducer function: add all elements
const sumFunction = (accumulator, current) => accumulator + current;

// Define the initial value for the accumulator
const initial = 0;

// Call the custom reduce function
const result = reduce(nums, sumFunction, initial);

// Output the result to the console
console.log(result); // Output: 10 (1 + 2 + 3 + 4)
