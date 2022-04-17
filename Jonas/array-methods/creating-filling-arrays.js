'use strict';

// array creation

// manually
console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// programatically

////////////////////////////////////////////////////////////////
//
//------------------------------------------------------- fill()
//

// ------------------------------------------------ empty arrays

// creates new array with 7 empty elements (length)
const x = new Array(7);

console.log(x); // (7) [empty × 7]

// 1: fill(value)
// x.fill(1);

// console.log(x); // (7) [1, 1, 1, 1, 1, 1, 1]

// 2: fill(value, start);
// x.fill(1, 3);

// console.log(x); // (7) [empty × 3, 1, 1, 1, 1] starts at i = 3

// 3: fill(value, start, end)
x.fill(1, 3, 5);

console.log(x);
// (7) [empty × 3, 1, 1, empty × 2]
// start 1=3, end 1=5, final index not included

// ------------------------------------------------ filled arrays

const arr = [1, 2, 3, 4, 5, 6, 7];

// value, start, end
arr.fill(24, 2, 6);

console.log(arr); // (7) [1, 2, 24, 24, 24, 24, 7]

////////////////////////////////////////////////////////////////
//
//------------------------------------------------- Array.from()
// on the constructor
//

const y = Array.from({ length: 7 }, () => 1);

console.log(y); // (7) [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (el, i) => i + 1);

console.log(z); // (7) [1, 2, 3, 4, 5, 6, 7]
