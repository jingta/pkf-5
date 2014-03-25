'use strict';

var express = require('express'),
    app = express();

/// Register the middleware
app.use(function func1(req, res, next) {
  console.log('func1', req.method, req.url);
  next();
});

app.use(function func2(req, res, next) {
  console.log('func2', req.url);
  next();
});

app.use(function func3(req, res, next) {
  console.log('func3', req.query);
  next();
});

app.get('/', function hello(req, res){
  res.send('Hello, Express!');
});

app.listen(3000, function onListening() {
  console.log('Listening at http://localhost:3000');
});
///