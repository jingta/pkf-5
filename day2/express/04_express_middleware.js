'use strict';

var express = require('express'),
    app = express();

/// simple logging middleware in Express

var simpleLoggingMiddleware = function (req, res, next) {
  console.log(req.method, req.url);
  next();
};

// Register the middleware
app.use(simpleLoggingMiddleware);

app.get('/', function hello(req, res){
  res.send('Hello, Express!');
});

app.listen(3000, function onListening () {
  console.log('Listening at http://localhost:3000');
});

///