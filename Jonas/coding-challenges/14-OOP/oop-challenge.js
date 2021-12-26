"use struct";

// ----------------------------------------- 1

// making car object
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

const xc60 = new Car("Volvo XC60", 120);
const xc40 = new Car("Volvo XC40", 95);

console.log(xc40, xc60);

// adding new method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h.`);
};

Car.prototype.slowDown = function () {
  // slowSpeed = this.speed - 5;
  // return slowSpeed;

  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h.`);
};

xc40.accelerate();
xc40.accelerate();
xc40.slowDown();
xc40.accelerate();

xc60.accelerate();
xc60.slowDown();
xc60.accelerate();
xc60.slowDown();

// ----------------------------------------- 2
