'use strict';
var Product = require('../models/productModel');

module.exports = function (server) {

  /**
  * Display a list of the products.
  */
  /// add the root route
  server.get('/', function (req, res) {
    Product.find(function (err, products) {
      if (err) {
        console.log(err);
      }

      res.render('index', {
        products: products
      });
    });
  });
  ///
};