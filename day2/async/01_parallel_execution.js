var fs = require('fs');
var path = require('path');
var files = ['a.json', 'b.json', 'c.json'];
var complete = 0;
var obj = {};

var done = function(err) {
  if (err) {
    throw err;
  }
  console.log(obj);
};

files.forEach(function(filename) {
  console.log('begin read of', filename);
  fs.readFile(path.join(__dirname, 'support', filename), function(err, json) {
    if (err) {
      return done(err);
    }

    obj[filename] = JSON.parse(json);

    complete++;
    console.log(Math.floor((complete / files.length)*100) + '% complete');
    if (complete >= files.length) {
      done();
    }
  });
});
