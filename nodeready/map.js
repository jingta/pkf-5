/*
## Task

Replace the for loop in map.js with an ES5 Array#map() loop while maintaining the original functionality.

-------------------------------------------------------------------------------

## Description

You will find a Node.js program file named map.js in your current working directory. Execute the program with node map.js.

map.js takes an arbitrary number of command-line arguments and calculates an array containing the length (in characters) of each argument.

The resulting array is then encoded as JSON and printed to stdout.

## Example

  $ node map.js one two three four
  [3,3,5,4]

## Conditions

* Your submission will be judged for correct output and the use of `Array#map()`.
* Warning: Any use of `for`, `while` or `do...while` will constitute a failure!

-------------------------------------------------------------------------------

 » To print these instructions again, run: nodeready print
 » To execute your program in a test environment, run: nodeready run program.js
 » To verify your program, run: nodeready verify program.js
*/

// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a list of strings');
}

// Array#slice() returns a new array starting from the
// specified index, so we can trim argv to just the
// additional arguments
var strings = process.argv.slice(2);

var lengths = [];

function calcLength(item){
    return item.length;
}

lengths = strings.map(calcLength);

// populate the lengths array with the length of each string
//for (var i = 0; i < strings.length; i++) {
//  lengths[i] = strings[i].length;
//}

// print out a JSON-encoded version of the array
var json = JSON.stringify(lengths);

console.log(json);