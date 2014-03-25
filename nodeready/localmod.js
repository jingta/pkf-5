/*
## Task

    Write a local module that multiples a given number by Math.PI. Then write a program that loads this module with require() and prints the resulting value to stdout. The number to multiply will be passed as the first argument to the program.

-------------------------------------------------------------------------------

## Description

    This exercise will introduce you to using require() to load your own local modules into your program, splitting your application's logic into discrete pieces of functionality.

Creating a local module is simple. Firstly, create a new JavaScript file – say, foo.js. Then set module.exports to point to a function in your file:

    module.exports = function (a, b) {
      return a + b;
    };

You're now able to use require() in another file to retrieve the value of module.exports from foo.js:

    // To require a local module, pass `require` the path to the module
    // usually starting with ./ or ../
    // Note the .js extension is optional
    
    var foo = require('./foo.js');
var result = foo(2, 5);
    
console.log(result); // 7

To pass this example, you will need to create a local module that multiples a single number by Math.PI. Your program must use this module to multiply its first command-line argument, and print this value to stdout.

## Example

  $ node program.js 2
  6.283185307179586

## Conditions

  * Your program *must* require a local module.
  * Your program *must* use that module to multiply the input number.
  * Your program should not need to use any other modules.

## Hints

  * Don't forget to convert `process.argv[2]` into a `Number`.
  * Make sure you research how Node resolves local dependencies if you're having trouble requiring your local module.


    » To print these instructions again, run: nodeready print
	  » To execute your program in a test environment, run: nodeready run program.js
		» To verify your program, run: nodeready verify program.js
*/

// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide arg');
}
var input = Number(process.argv[2]);

var timesPi = require('./timespi.js');

console.log(timesPi(input));
