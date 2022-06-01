'use strict';

console.log(5 % 2); // 1  >> 5 = 2*2 + 1
console.log(5 / 2); // 2.5

console.log(8 % 3); // 2  >> 8 = 2*3 + 2

// --- Check if number is even or odd

// number is EVEN if divisible by 2, remainder 0

// even
console.log(6 % 2); // 0
console.log(6 / 2); // 3 (integer)

// odd
console.log(7 % 2); // 1
console.log(7 / 2); // 3.5

// long version
// const isEven = n => {
//   if (n % 2 === 0) {
//     return true;
//   } else {
//   return false;
// }
// };

const isEven = n => n % 2 === 0;

console.log(isEven(7)); // false
console.log(isEven(24)); // true
console.log(isEven(215)); // false
