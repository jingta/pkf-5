function Quantity (value, units) {
  this.value = value;
  this.units = units;
}

Quantity.MM = 'mm';
Quantity.M = 'm';
Quantity.IN = 'inches';
Quantity.KG = 'kg';
Quantity.LB = 'lb';

var toInternalUnits = { };
toInternalUnits[Quantity.LB] = 45359237 / 100000000;
toInternalUnits[Quantity.KG] = 1;
toInternalUnits[Quantity.MM] = 0.001;
toInternalUnits[Quantity.M] = 1;
toInternalUnits[Quantity.IN] = 25.4 / 1000;

Quantity.prototype.convertTo = function (units) {
  if (this.units == units)
    return this;
  if (!toInternalUnits[this.units] || !toInternalUnits[units])
    throw new TypeError('Unknown units: ' + this.units + ' to ' + units);
  if (typeof this._internalUnits != 'number')
    this._internalUnits = this.value * toInternalUnits[this.units];
  return new Quantity(this._internalUnits * (1 / toInternalUnits[units]), units);
};

module.exports = Quantity;