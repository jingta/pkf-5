'use strict';

var express = require('express'),
    app = express();

///
app.get('/', function hello(req, res){
  res.send('Hello, Express!');
});

app.all('*', function notFound(req, res){
  res.send(404);
});

app.listen(3000, function onListening() {
  console.log('Listening at http://localhost:3000');
});
