'use strict';

var nconf = require('nconf'),
    express = require('express'),
    app = express();

// Load nconf configs
nconf
    .argv()
    .env()
    .file({ file: 'config.json' });

nconf.defaults({
  'port': 1337
});

app.get('/', function hello(req, res){
  res.send('Hello, Express!');
});

app.listen(nconf.get('port'), function onListening () {
  console.log('Listening at http://localhost:%d', nconf.get('port'));
});
