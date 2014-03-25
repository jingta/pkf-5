/*

## Description

You will find a Node.js program file named reduce.js in your current working directory. Execute the program with node reduce.js.

This Node.js program builds upon the Array#map() exercise but this time it takes an arbitrary number of command-line arguments and calculates the cumulative string length of the arguments passed to the program.

The resulting array is then encoded as JSON and printed to stdout.

## Example

  $ node reduce.js one two three four
  15

## Conditions

* Your submission will be judged for correct output and the use of `Array#reduce()`.
* Warning: Any use of `for`, `while` or `do...while` will constitute a failure!

*/

// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a list of strings');
}

// Array#slice() returns a new array starting from the
// specified index, so we can trim argv to just the
// additional arguments
var strings = process.argv.slice(2);

var totalLength = 0;

function itemLength(previousValue, item){
    return previousValue + item.length;
}

// populate the lengths array with the length of each string
totalLength = strings.reduce(itemLength, 0);

//for (var i = 0; i < strings.length; i++) {
//  totalLength += strings[i].length;
//}

console.log(totalLength);