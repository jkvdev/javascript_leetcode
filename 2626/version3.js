/**
 * @param {number[]} nums - The input array of numbers to be reduced.
 * @param {Function} fn - A callback function that takes two arguments: (accumulator, currentValue)
 *                        and returns the updated accumulator after each step.
 * @param {number} init - The initial value to start the reduction.
 * @return {number} - The final accumulated result after applying the callback function to all elements.
 */
var reduce = function(nums, fn, init) {
  // Start by assigning the initial value to a variable `res`, which will accumulate results.
  let res = init;

  // Loop through the array from index 0 to the end
  for (let i = 0; i < nums.length; i++) {
    // Apply the callback function using the current accumulator and the current array element.
    // Update the accumulator `res` with the return value of the callback.
    res = fn(res, nums[i]);
  }

  // After all elements have been processed, return the final accumulated result.
  return res;
};

// === Example Usage to test output ===

// Example input array
const nums = [1, 2, 3, 4];

// Define a reducing function that sums the values
const sumFunction = (accumulator, current) => accumulator + current;

// Initial accumulator value
const initial = 0;

// Call the custom reduce function
const result = reduce(nums, sumFunction, initial);

// Print the final result to the console
console.log(result); // Output: 10 (since 1 + 2 + 3 + 4 = 10)
