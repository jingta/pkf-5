'use strict';
var Product = require('../models/productModel');

module.exports = function (server) {

  /// Handle POST
  server.post('/cart', function (req, res) {
    req.session.cart = req.session.cart || {};
    var cart = req.session.cart;
    var id = req.param('item_id');

    Product.findById(id, function (err, prod) {
      if (err) {
        console.log('Error adding product to cart: ', err);
        return res.redirect('/cart');
      }

      // Add or increase the product quantity in the shopping cart.
      if (cart[id]) {
        cart[id].qty++;
      } else {
        cart[id] = {
          name: prod.name,
          price: prod.price,
          prettyPrice: prod.prettyPrice(),
          qty: 1
        };
      }
      // Display the cart for the user
      res.redirect('/cart');
    });
  });

  /// Handle GET
  server.get('/cart', function (req, res) {
    var cart = req.session.cart,
      displayCart = {items: [], total: 0},
      total = 0;

    if (!cart) {
      res.render('emptyCart', { message: 'Your cart is empty!'});
      return;
    }

    // Ready the products for display
    for (var item in cart) {
      displayCart.items.push(cart[item]);
      total += (cart[item].qty * cart[item].price);
    }
    req.session.total = displayCart.total = total.toFixed(2);
    var model = { cart: displayCart };
    res.render('cart', model);
  });
  ///
};
