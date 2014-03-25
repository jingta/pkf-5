var pi = Math.PI;


function Circle(radius) {
    return {
      diameter: function() {
        return 2 * radius;
      },
      circumference: function() {
        return pi * diameter();
      },
      area: function() {
        return pi * Math.pow(radius, 2);
      },
      toString: function () {
            return "Circle  " + radius;
        }
    };
}

module.exports = function(radius) {
    var that = Circle(radius);
    that.test = function (testradius) {
        return testradius === radius;
    };
    return that;
}
