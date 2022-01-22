"use strict";

// ----------------------------------------- 1

// // making car object
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

// const xc60 = new Car("Volvo XC60", 120);
// const xc40 = new Car("Volvo XC40", 95);

// console.log(xc40, xc60);

// // adding new method
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going ${this.speed} km/h.`);
};

Car.prototype.brake = function () {
  // slowSpeed = this.speed - 5;
  // return slowSpeed;

  this.speed -= 5;
  console.log(`${this.make} is going ${this.speed} km/h.`);
};

// xc40.accelerate();
// xc40.accelerate();
// xc40.brake();
// xc40.accelerate();

// xc60.accelerate();
// xc60.brake();
// xc60.accelerate();
// xc60.brake();

// ----------------------------------------- ES6 Classes

// -------------------------------- 'Car' constructor function
// class CarCl {
//   constructor(make, speed) {
//     // properties
//     this.make = make;
//     this.speed = speed;
//   }

//   // methods
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} goes ${this.speed} km/h.`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is slowing down to ${this.speed} km/h.`);
//   }

//   // speed input in km/h converted to output in mi/h
//   // this turns a method into a property
//   get speedUS() {
//     return `${this.speed / 1.6} mi/h`;
//     // console.log(`${this.make} is driving ${this.speed /= 1.6} mi/h.`);
//   }

//   // speed input in mi/h converted to output in km/h
//   set speedUS(speed) {
//     this.speed *= 1.6;
//     // console.log(`${this.make} is going ${this.speed} km/h, which is ${this.speed *= 1.6} mi/h.`);
//   }
// }

// const myCar = new CarCl("Volvo XC40 Recharge", 130);

// console.log(myCar); // CarCl { make: 'Volvo XC40 Recharge', speed: 130 }

// myCar.accelerate(); //Volvo XC40 Recharge goes 140 km/h.
// myCar.accelerate(); // Volvo XC40 Recharge goes 150 km/h.
// myCar.brake(); // Volvo XC40 Recharge is slowing down to 145 km/h.
// myCar.accelerate(); //Volvo XC40 Recharge goes 155 km/h.

// console.log(myCar.speedUS);
// myCar.speedUS = 50;
// console.log(myCar);

// ----------------------------------------- constructor functions and Object.create ( + polymorphism)

// create el. car object and experiment with properties
// charge to 90%
// speed 120 km/h, charge 23%

// -------------------------------- 'EV' constructor function

// 'EV' class is child of 'CarCL' class
const EV = function (make, speed, charge) {
  // // DRY principle
  Car.call(this, make, speed);
  this.charge = charge; // additional property

  // this.make = make;
  // this.speed = speed;
  // this.charge = charge;
};

// linking prototypes
EV.prototype = Object.create(Car.prototype);

// adding newmethods to 'EV'
// these methods overwrite methods inherited from 'Car' = polymorphism
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--; // minus 1%
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%.`
  );
};

// making new object
const tesla = new EV("Tesla", 120, 23);
console.log(tesla);

console.log(EV.prototype);

tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.chargeBattery();
