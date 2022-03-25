'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//------------------------------------------------ ARRAY METHODS

let array = ['a', 'b', 'c', 'd', 'e'];

// --- slice()
// accessor
// copies a portion of an array to a new array

console.log(array.slice(2)); // (3) ['c', 'd', 'e']
console.log(array.slice(2, 4)); // (2) ['c', 'd']

// copies from the end
console.log(array.slice(-2)); // (2) ['d', 'e']

// last element of the array
console.log(array.slice(-1)); // ['e']

// everything except
console.log(array.slice(1, -2)); // (2) ['b', 'c']

// shallow copy
console.log(array.slice()); // (5) ['a', 'b', 'c', 'd', 'e']
console.log([...array]); // (5) ['a', 'b', 'c', 'd', 'e']

// --- splice()
// mutator
// adds or removes an item from any position in an array, can be simultaneously

// console.log(array.splice(2));
// console.log(array);

// (3) ['c', 'd', 'e'] = what is deleted
// (2) ['a', 'b'] = what is left from the original array

// remove last element
console.log(array.splice(-1));
console.log(array);

// ['e'] = deleted
// (4) ['a', 'b', 'c', 'd'] = what is left from the original array

// starting from position 1, take out 2 elements
console.log(array.splice(1, 2)); // (2) ['b', 'c'] = deleted

// --- reverse()
// mutator
// reverses the order of elements in the array

const arr = ['j', 'i', 'h', 'g', 'f'];

console.log(arr.reverse()); // (5) ['f', 'g', 'h', 'i', 'j']
console.log(arr);

// --- concat()
// accessor
// merges two or more arrays to a new array

const letters = array.concat(arr);

console.log(letters); // (7) ['a', 'd', 'f', 'g', 'h', 'i', 'j']
console.log([...array, ...arr]);

// --- join()
// accessor
// converts all the elements of an array into a new string

console.log(letters.join('-')); // a-d-f-g-h-i-j

// -------- at()

const atArr = [12, 34, 56];

// traditional way to take value out
console.log(atArr[0]); // 12

// ES2022
console.log(atArr.at(0)); // 12

// get last element of array
console.log(atArr[atArr.length - 1]); // 56

console.log(atArr.slice(-1)); // [56], you get copy of array
console.log(atArr.slice(-1)[0]); // 56, [] gets the value out

console.log(atArr.at(-1)); // 56
console.log(atArr.at(-2)); // 34

// works on strings
console.log('mari'.at(2)); // r
console.log('jonas'.at(5)); // undefined
console.log('jonas'.at(3)); // a

// get last character of string
console.log('jonas'.at(-1)); // s
