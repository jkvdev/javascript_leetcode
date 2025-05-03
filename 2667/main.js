/**
 * This is a function that returns another function.
 * The returned function will always return the string "Hello World"
 * no matter what arguments are passed to it.
 *
 * @return {Function} - a function that returns "Hello World"
 */
var createHelloWorld = function() {
    
  // The outer function returns this inner function
  return function(...args) {
      // The inner function ignores any arguments and returns "Hello World"
      return "Hello World";
  }
};

// Here we call the outer function, which gives us back the inner function
const f = createHelloWorld();

// Now we call the returned function `f`. It returns "Hello World"
console.log(f()); // Output: "Hello World"

// Alternate usage example from the problem:
//
/**
* const f = createHelloWorld();
* f(); // "Hello World"
*
* This shows that no matter how or where you use `f`, it will always return "Hello World".
*/
