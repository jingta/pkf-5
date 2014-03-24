'use strict';

var express = require('express'),
    dust = require('dustjs-helpers'),
    cons = require('consolidate'),
    app = express();

// Register the dust engine to handle .dust files
// consolidate will look for dust and normalize the renderer signature for Express.
app.engine('dust', cons.dust);
app.set('view engine', 'dust');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'Hello, Dust.js'
  });
});

app.listen(3000, function onListening () {
  console.log('Listening at http://localhost:3000');
});