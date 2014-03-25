/*
## Task

Replace the single for loop in filter.js with Array#filter() and other ES5 Array methods, while maintaining the original functionality.

-------------------------------------------------------------------------------

## Description

You will find a Node.js program file named filter.js in your current working directory. Execute the program with node filter.js.

filter.js takes an arbitrary number of command-line arguments where each argument is an integer. The program then calculates the average and standard deviation of these numbers and creates an array containing only those values that are within the standard deviation from the average (+/-).

The resulting array is then encoded as JSON and printed to stdout.

## Example

  $ node filter.js 2 4 4 4 5 5 7 9
  [4,4,4,5,5,7]

## Conditions

* Your submission will be judged for correct output and the use of `Array#filter()`.
* Warning: Any use of `for`, `while` or `do...while` will constitute a failure!

-------------------------------------------------------------------------------

## Hints

* You may also need to use some of the other ES5 methods already introduced by *nodeready*.
*/

// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a list of numbers');
}

var input = process.argv.slice(2)
var output = [];
var total = 0;
var average;
var stdev;
var i;

//* MINE
function toNumber(item) {
    return Number(item);
}
function add(acc, item) {
    return acc + item;
}
input = input.map(toNumber);
total = input.reduce(add);
//*/
/* TODO
for (i = 0; i < input.length; i++) {
  // convert the argument from a String to a Number type
  input[i] = Number(input[i]);

  // update total for average calculation
  total += input[i];
}
//*/
average = total / input.length;
//console.log("Total: " + total);
//console.log("Avg: " + average);
total = 0; // reuse this variable

//* MINE
function deviation(acc, item) {
    return acc + Math.pow(item - average, 2);
}
stdev = Math.sqrt(input.reduce(deviation, 0) / input.length);
//*/
/* TODO
for (i = 0; i < input.length; i++) {
  total += Math.pow(input[i] - average, 2);
}
stdev = Math.sqrt(total / input.length);
//*/
//console.log("StdDev: " + stdev);

//* MINE
function pushWithinAvg(item) {
    return (Math.abs(item - average) <= stdev);
}
output = input.filter(pushWithinAvg);
//*/
/* TODO
for (i = 0; i < input.length; i++) {
  // collect only values within +/- 20 of the average
  if (Math.abs(input[i] - average) <= stdev) {
    output.push(input[i]);
  }
}
//*/

// print a JSON-encoded string version of the output array
console.log(JSON.stringify(output));
