'use strict';

// --- give meaning to parts of numbers

// represent diameter of the Solar system
// 287,460,000,000 >> billion, million, thousands, hundreds

const diameterConfusing = 287460000000;
const diameterSimple = 287_460_000_000;

console.log(diameterSimple);

// cents

// const priceInCents = 349_99;
// console.log(priceInCents);

const price = 349_99;
console.log(price); // 34999

const transferFee1 = 15_00;
const transferFee2 = 1_500;

// --- restrictions

const PI = 3.14_15; // allowed

// illegal
// const PI = _3.1415 // error, now allowed
// const PI = 3._1415
// const PI = 3.14__15
// const PI = 3.1415_

console.log(PI);

// converting strings with "_" to number

console.log(Number('23000')); // 23000
console.log(Number('23_000')); // NaN
console.log(parseInt('23_000')); // 23
