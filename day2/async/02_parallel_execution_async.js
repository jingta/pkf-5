var fs = require('fs');
var async = require('async');
var path = require('path');
var files = ['a.json', 'b.json', 'c.json'];

var obj = {};

async.each(files, function(filename, callback) {
  console.log('begin read of', filename);
  fs.readFile(path.join(__dirname, 'support', filename), function(err, json) {
    if (err) {
      return callback(err);
    }
    obj[filename] = JSON.parse(json);

    console.log(Math.floor((Object.keys(obj).length / files.length)*100) + '% complete');

    callback();
  });

}, function done(err) {
  if (err) {
    throw err;
  }
  console.log(obj);
});
