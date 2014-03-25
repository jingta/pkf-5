//* Your submission will be judged for correct output and the use of `Object.keys()`.
//* Warning: Any use of `for`, `while` or `do...while` will constitute a failure!
//node objectkeys.js '{"key1":"value1","key2":"value2"}'
//key1=value1
//key2=value2

// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a JSON-encoded object');
}

// de-serialize the JSON object passed as
// the first command-line argument
var obj = JSON.parse(process.argv[2]);

// log a line for each key/value pair of the object
function logItem(key) {
  console.log("%s=%s", key, obj[key]);
}

keys = Object.keys(obj);
keys.forEach(logItem);




