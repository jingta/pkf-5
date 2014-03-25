/*
## Task

You've been supplied with a 'diceroll' implementation. It provides a random integer between 1 and 6. Write a program that accepts a total number of dicerolls to perform as an argument, and uses the diceroll.js as a local module to perform them, printing out each roll as "Rolled a X" to the console.

-------------------------------------------------------------------------------

## Description

You will find a Node.js module file named diceroll.js in your current working directory. Use and modify this file as part of your solution. Your main program should require('./diceroll.js') to use this module.

This exercise will further develop your understanding of the require mechanism in node.

Write a program which accepts a number, total, as an argument and invokes the diceroll module total number of times, printing a line to stdout, each time it is invoked. Each line should start with "Rolled a " followed by the number which was rolled as per the example below. Warning: The provided diceroll implementation appears to be broken and may need to be fixed! Make sure you use the simplest diceroll API possible.

## Example

  $ node program.js 3
  Rolled a 4
  Rolled a 6
  Rolled a 1

  $ node program.js 2
  Rolled a 1
  Rolled a 3

## Conditions

  * The *diceroll.js* file must be required by your submitted program file.
  * An overly complicated diceroll api will constitute a failure.

-------------------------------------------------------------------------------

# Hints

  * The value of `module.exports` after running the file exactly once is cached as the value returned from calling require('mymodule').


 » To print these instructions again, run: nodeready print
 » To execute your program in a test environment, run: nodeready run program.js
 » To verify your program, run: nodeready verify program.js

*/

// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide arg');
}
var input = Number(process.argv[2]);

var diceroll = require('./diceroll.js');

for (var i = 1; i <= input; i++) {
    console.log("Rolled a " + diceroll());
}