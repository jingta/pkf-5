'use strict';

module.exports = function (server) {
  /// set up the route to take the lang parameter 
  server.get('/setlanguage/:lang', function (req, res) {
    res.cookie('language', req.param('lang'));
    res.redirect('/');
  });
  /// 
};
