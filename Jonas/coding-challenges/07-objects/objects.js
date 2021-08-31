"use strict";

// data 1

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};


const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  } 
};
 
console.log(mark.calcBMI(), john.calcBMI());

const higherBMI = mark.BMI > john.BMI
  ? `Mark's BMI (${mark.calcBMI()}) is higher than John's BMI (${john.calcBMI()})!` 
  : `John's BMI (${john.calcBMI()}) is higher than Mark's BMI (${mark.calcBMI()})!`

console.log(higherBMI);





// data 2

const mark2 = {
  fullName: "Mark Miller",
  mass: 95,
  height: 1.88,

  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  }
};


const john2 = {
  fullName: "John Smith",
  mass: 85,
  height: 1.76,

  calcBMI: function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  } 
}; 

console.log(mark2.calcBMI(), john2.calcBMI());

const higherBMI2 = mark2.BMI > john2.BMI
  ? `Mark's BMI (${mark2.calcBMI()}) is higher than John's BMI (${john2.calcBMI()})!` 
  : `John's BMI (${john2.calcBMI()}) is higher than Mark's BMI (${mark2.calcBMI()})!`

console.log(higherBMI2);

