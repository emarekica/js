'use strict';

// --- square root (korijen)

console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// cubic root (korijen iz 3)
console.log(8 ** (1 / 3)); // 2

// --- max/min value
console.log(Math.max(12, 23, 8, 4, 1, 12)); // 23
console.log(Math.max(12, '23', 8, 4, 1, 12)); // 23  >> type coercion
console.log(Math.max(12, '23px', 8, 4, 1, 12)); // NaN  >> no parsing

console.log(Math.min(12, 23, 8, 4, 1, 12)); // 1

// ------- CONSTANTS

// --- PI
// opseg kruga = radijus ** 2 * PI

console.log(Math.PI); // 3.141592653589793
console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// --- random()
// --- trunc()
console.log(Math.random()); // 0.32472068640679796
console.log(Math.trunc(Math.random() * 6)); // 4
console.log(Math.trunc(Math.random() * 6) + 1); // 4

// general formula for random number
const randomInt = (min, max) =>
  Math.trunc(Math.floor() * (max - min) + 1) + min;

// process explanation
// 0...1 >> 0 ... (max - min) >> min...(max - min + min) >> min...max

console.log(randomInt(10, 20));

// ------ ROUNDING

// --- rounding integers

// trunc()
console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.7)); // 23
console.log(Math.trunc('23.7')); // 23

// round()
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.7)); // 24
console.log(Math.round('23.7')); // 24

// ceil()
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.7)); // 24
console.log(Math.ceil('23.7')); // 24

// floor()
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.7)); // 23
console.log(Math.floor('23.7')); // 23

// negative numbers
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24

// --- rounding decimals

// toFixed()
// >> returns string
console.log((2.7).toFixed(0)); // "3"
console.log((2.7).toFixed(1)); // "2.7"
console.log((2.7).toFixed(2)); // "2.70"

// add "+"
console.log(+(2.7).toFixed(0)); // 3
console.log(+(2.7).toFixed(1)); // 2.7
console.log(+(2.7).toFixed(2)); // 2.70
