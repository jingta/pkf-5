'use strict';

module.exports = function (app) {

    app.get('/setlanguage/:lang', function (req, res) {
        res.cookie('language', req.param('lang'));
        res.redirect('/');
    });

};
