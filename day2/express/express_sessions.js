'use strict';

var express = require('express'),
    cons = require('consolidate'),
    app = express();

require('dustjs-helpers');
app.engine('dust', cons.dust);
app.set('view engine', 'dust');

app.use(express.cookieParser());
app.use(express.session({ secret: 'adorable seamonster' }));

app.get('/', function(req, res) {

  // increment viewCount if it exists, set it to 1 if it doesn't
  req.session.viewCount = (req.session.viewCount || 0) + 1;

  res.render('sessions', {
    viewCount: req.session.viewCount
  });

});

app.listen(3000, function onListening () {
  console.log('Listening at http://localhost:3000');
});