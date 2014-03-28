'use strict';


var SeriousModel = require('../models/serious');


module.exports = function (app) {

    var model = new SeriousModel();


    app.get('/serious', function (req, res) {
        
        res.format({
            json: function () {
                res.json(model);
            },
            html: function () {
                res.render('serious', model);
            }
        });
    });

};
