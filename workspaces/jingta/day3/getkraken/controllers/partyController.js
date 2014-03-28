'use strict';


var PartyModel = require('../models/partyModel');


module.exports = function (app) {

    var model = new PartyModel();


    app.get('/party', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('partyTemplate', model);
            }
        });
    });

};
