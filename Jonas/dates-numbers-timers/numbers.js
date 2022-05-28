'use strict';

// floating point internal representation
console.log(23 === 23.0);

// base 2 VS base 10
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

// string >> number
console.log(Number('23'));
console.log(+'23');

// --- parsing

// integers
console.log(Number.parseInt('32px')); // 32
console.log(Number.parseInt('px32')); // NaN

console.log(Number.parseInt('2.5rem')); // 2

// floating
console.log(Number.parseFloat('2.5rem')); // 2.5
console.log(Number.parseFloat('   2.5rem   ')); // 2.5

// chack if value is a NaN
console.log(Number.isNaN(20)); // false, is a number
console.log(Number.isNaN('20')); // false, is not Not A Number
console.log(Number.isNaN(+'20')); // false, is a number
console.log(Number.isNaN(+'20x')); // true, Not A Number
console.log(Number.isNaN(20 / 0)); // false, Infinity value

// chack if value is a number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false, is not a number
console.log(Number.isFinite(+'20')); // true
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(20 / 0)); // false

// chack if value is an integer
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.0)); // true
console.log(Number.isInteger(20 / 0)); // false
