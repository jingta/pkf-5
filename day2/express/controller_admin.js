'use strict';

var requireAuth = require('./require-auth');

module.exports = function adminController(server) {

  server.use('/admin', requireAuth);

  server.get('/admin', function (req, res) {
    res.send('Hello, Admin!');
  });

};
