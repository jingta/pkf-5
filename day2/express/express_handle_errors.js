'use strict';

var express = require('express'),
    app = express();

// base middleware
app.use(express.logger());

app.get('/', function hello(req, res){
  res.send('Hello, Express!');
});

app.get('/error', function returnError(req, res, next){
  next(new Error('Sorry for erroring!'));
});

/// Error handling middleware - must come last in routing setup

// Handle 404
app.use(function(req, res) {
  res.send('404: Not Found', 404);
});

// Handle 500
app.use(function(error, req, res, next) {
  res.send('500: Internal Server Error\n' + error, 500);
});

///

app.listen(3000, function onListening() {
  console.log('Listening at http://localhost:3000');
});
