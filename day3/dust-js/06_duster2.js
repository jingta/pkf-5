'use strict';

if (process.argv.length < 4)
  return console.log(
      'Usage: node 06_duster2.js <mainTemplate.dust>[, <template2.dust>[, ...]] <data.json>');

var dust = require('dustjs-linkedin'),
    fs = require('fs'),
    path = require('path'),
    // load JSON data from last arg
    data = require(path.resolve(process.argv.pop())),
    // Dust template names are the other args
    tmplNames = process.argv.slice(2),
    mainId; // main template ID, the first one in the list

mainId = tmplNames.map(function (t) {
  // register each template with filename (minus extension) as ID
  var id = t.replace(/\..+$/, '');
  var contents = fs.readFileSync(t, 'utf8');
  var compiled = dust.compile(contents, id);
  dust.loadSource(compiled);
  return id;
})[0]

dust.render(mainId, data, function (err, out) {
  if (err) throw err;
  console.log(out);
});
