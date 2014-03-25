'use strict';
var mongoose = require('mongoose');

// Define a simple schema for our products.
var productSchema = mongoose.Schema({
  name: String,
  price: Number
});

// Verbose toString method
productSchema.methods.whatAmI = function () {
  if (this.name) {
    console.log("Hello, I'm a", this.name, "and I'm worth €" + this.price);
  } else {
    console.log("I don't have a name :(");
  }
};

// Format the price of the product to show a euro sign, and two decimal places
productSchema.methods.prettyPrice = function () {
  return '€' + this.price.toFixed(2);
};

module.exports = mongoose.model('Product', productSchema);
