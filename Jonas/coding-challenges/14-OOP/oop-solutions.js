// Jonas's solutions

// 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h.`);
};

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();

// ----------------------------------------- 3

// PARENT
// making car object
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// adding new methods
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h.`);
};

// CHILD
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// linking prototypes
// for the prototype of EV to inherit from prototype of Car
// Object.create() cretes a NEW OBJECT which for a protype has Car.prototype
EV.prototype = Object.create(Car.prototype);

// adding methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`
  );
};

// making new object
const tesla = new EV("Tesla", 120, 23);

tesla.chargeBattery(90);
console.log(tesla);

tesla.brake(); // has access to this method through prototype chain from Car

tesla.accelerate();
