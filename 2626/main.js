/**
 * @param {number[]} nums - The input array of numbers to be reduced.
 * @param {Function} fn - A callback function that takes two arguments: (accumulator, currentValue) and returns the updated accumulator.
 * @param {number} init - The initial value to start the reduction.
 * @return {number} - The final accumulated result after applying the callback function to all elements.
 */
var reduce = function(nums, fn, init) {
  // Start with the initial value assigned to a variable `res`
  let res = init;

  // Loop through each number `n` in the array `nums`
  for (const n of nums) {
    // Apply the callback function to the current result and the current number
    // Then update `res` with the new value returned by the callback
    res = fn(res, n);
  }
  
  // After processing all elements, return the accumulated result
  return res;
};

// === Example Usage to test output ===

// Input array of numbers
const nums = [1, 2, 3, 4];

// Define a reduce function: add all numbers together
const sumFunction = (accumulator, current) => accumulator + current;

// Set the initial accumulator value to 0
const initial = 0;

// Call the custom reduce function with inputs
const result = reduce(nums, sumFunction, initial);

// Print the result to the console
console.log(result); // Output: 10 (because 1 + 2 + 3 + 4 = 10)
