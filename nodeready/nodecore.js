// /*
// ## Task

// Use fs.readFileSync() to read a text file and calculate the length of each line. Print the line lengths to stdout as a JSON-encoded array. The path to the text file will be passed as the first argument to the program.

// -------------------------------------------------------------------------------

// ## Description

// This exercise will introduce the Node.js standard library, generally referred to as "Node-core". In using Node-core we will also learn about Node's module system and the require() function.

// To pass this exercise, you will need to write a program that accepts a single command-line argument referring to a text file. The program should read the contents of the file and calculate the number of characters on each line.

// The resulting array is then encoded as JSON and printed to stdout.

// ## Example

//   $ cat /path/to/file.txt
//   apples
//   watermelons
//   bananas

//   $ node program.js /path/to/file.txt
//   [6,11,7]

// ## Conditions

// * You *must* use the `fs.readFileSync()` method.

// -------------------------------------------------------------------------------

// # Hints

// * You will need to use the **fs** module from Node-core to read from the filesystem. To obtain a reference to the **fs** module, use `var fs = require('fs')`. This call will load the **fs** module and return it so it can be assigned to the `fs` variable for later use.
// * `fs.readFileSync()` is a *synchronous* method that *returns* the contents of the file or throws an error if there is an I/O error.
// * Be sure to specify the `'utf8'` encoding when you read the file so you obtain a string. You can then use `string.split('\n')` to convert the string to an array of strings where each element is a line in the file.
// * To find out more about `fs.readFileSync()` method, consult the Node-core API docs located at <http://nodejs.org/api/>.

// */

// // sanity check command-line arguments
// if (process.argv.length == 2) {
//   return console.log('Please provide a path');
// }
var input = process.argv[2]

var fs = require('fs');
var contents = fs.readFileSync(input, {encoding:'utf8'});

// get array of lines
var items = contents.split('\n');

// collect length of each item
var lengths = items.map(function(item) { return item.length; });

console.log(JSON.stringify(lengths));