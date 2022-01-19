"use strict";

// ----------------------------------------- 1

// // making car object
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// const xc60 = new Car("Volvo XC60", 120);
// const xc40 = new Car("Volvo XC40", 95);

// console.log(xc40, xc60);

// // adding new method
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going ${this.speed} km/h.`);
// };

// Car.prototype.slowDown = function () {
//   // slowSpeed = this.speed - 5;
//   // return slowSpeed;

//   this.speed -= 5;
//   console.log(`${this.make} is going ${this.speed} km/h.`);
// };

// xc40.accelerate();
// xc40.accelerate();
// xc40.slowDown();
// xc40.accelerate();

// xc60.accelerate();
// xc60.slowDown();
// xc60.accelerate();
// xc60.slowDown();

// ----------------------------------------- ES6 Class

// make a CarCl that has `make` and `speed` property
// `speed` is current speed in km/h

// implement accelerate() method that increases speed by 10, log new speed to console
// implement brake() that decreases speed by 5, log new speed to console

// getter `speedUS` returns speed in mi/h ( divide by 1.6)
// setter `speedUS` sets current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

// experiment with accelerate() and brake(), with getter and setter

// data: Volvo XC40 Recharge, going at 130 km/h

class CarCl {
  constructor(make, speed) {

    // properties
    this.make = make;
    this.speed = speed;
  }



  // methods
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} goes ${this.speed} km/h.`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is slowing down to ${this.speed} km/h.`);
  }

  // speed input in km/h converted to output in mi/h
  // this turns a method into a property
  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
    // console.log(`${this.make} is driving ${this.speed /= 1.6} mi/h.`);
  }

  // speed input in mi/h converted to output in km/h
  set speedUS(speed){
    this.speed *= 1.6;
    // console.log(`${this.make} is going ${this.speed} km/h, which is ${this.speed *= 1.6} mi/h.`);
  }
}

const myCar = new CarCl("Volvo XC40 Recharge", 130);

console.log(myCar);  // CarCl { make: 'Volvo XC40 Recharge', speed: 130 }

myCar.accelerate(); //Volvo XC40 Recharge goes 140 km/h.
myCar.accelerate(); // Volvo XC40 Recharge goes 150 km/h.
myCar.brake(); // Volvo XC40 Recharge is slowing down to 145 km/h.
myCar.accelerate(); //Volvo XC40 Recharge goes 155 km/h.

console.log(myCar.speedUS);
myCar.speedUS = 50;
console.log(myCar);

