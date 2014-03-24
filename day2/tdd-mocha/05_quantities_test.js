/*global require:false, describe:false, it:false*/
'use strict';

var assert = require('chai').assert,
    Quantity = require('../04_quantities');

/// Test Quantity object
describe('Quantity', function () {

  it('should hold value and units', function () {
    var quantity = new Quantity(101.101, Quantity.KG);
    assert.equal(quantity.value, 101.101, 'correct value');
    assert.equal(quantity.units, Quantity.KG, 'correct units');
  });

  describe('conversions', function () {

    function testConversion (srcQuantity, dstValue, dstUnits) {
      var quantity = srcQuantity.convertTo(dstUnits);
      assert.equal(quantity.units, dstUnits, 'converted has ' + dstUnits + ' units');
      assert(Math.abs(quantity.value - dstValue) < 0.001, 'converted to ' + dstUnits + ' correctly');
    }

    it('should convert from kilograms to pounds', function () {
      testConversion(new Quantity(101, Quantity.KG), 222.667, Quantity.LB);
    });
    it('should convert from pounds to kilograms', function () {
      testConversion(new Quantity(222.667, Quantity.LB), 101, Quantity.KG);
    });

  });

});
///