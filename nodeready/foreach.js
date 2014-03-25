// sanity check command-line arguments
if (process.argv.length == 2) {
  return console.log('Please provide a string to split');
}

// this creates an array of words by splitting
// the first command-line argument on ' '
var data = process.argv[2].split(',');

var i = 0;
function logItem(item) {
  // uses console.log() like a printf() with
  // %s string substitution for trailing args
  console.log('[%s] %s', i, item);
  i++;
}
data.forEach(logItem);


