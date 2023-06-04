const Shape = require('./shape');

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2); // Overwritten area method in Circle class
  }
}

module.exports = Circle;