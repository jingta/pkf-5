
'use strict';
var Product = require('../models/productModel');

module.exports = function (server) {

  /// products controller GET
  server.get('/products', function (req, res) {

    Product.find(function (err, prods) {
      if (err) { console.log(err); }
      var model = { products: prods };
      res.render('products', model);
    });
  });

  /// products controller POST
  server.post('/products', function (req, res) {
    var name = req.body.name && req.body.name.trim();
    var price = parseFloat(req.body.price, 10);

    if (name === '' || isNaN(price)) {
      res.redirect('/products#BadInput');
      return;
    }
    var newProduct = new Product({name: name, price: price});
    newProduct.whatAmI();
    newProduct.save();
    res.redirect('/products');
  });

  /// products controller DELETE
  server.delete('/products', function (req, res) {
    Product.remove({_id: req.body.item_id}, function (err) {
      if (err) { console.log('Remove error: ', err); }
      res.redirect('/products');
    });
  });
  ///

};
