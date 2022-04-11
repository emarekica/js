'use strict';

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//-------------------------------------------------------- ARRAY METHODS

let array = ['a', 'b', 'c', 'd', 'e'];

//-------------------------------------------------------------- slice()
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

//-------------------------------------------------------------- splice()
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

//-------------------------------------------------------------- reverse()
// mutator
// reverses the order of elements in the array

const arr = ['j', 'i', 'h', 'g', 'f'];

console.log(arr.reverse()); // (5) ['f', 'g', 'h', 'i', 'j']
console.log(arr);

//-------------------------------------------------------------- concat()
// accessor
// merges two or more arrays to a new array

const letters = array.concat(arr);

console.log(letters); // (7) ['a', 'd', 'f', 'g', 'h', 'i', 'j']
console.log([...array, ...arr]);

//-------------------------------------------------------------- join()
// accessor
// converts all the elements of an array into a new string

console.log(letters.join('-')); // a-d-f-g-h-i-j

//-------------------------------------------------------------- at()

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

//-------------------------------------------------------------- map()

// converting € > $
// multiply each element of "movements" by conversion rate

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// conversion rate
const eurToUsd = 1.1;

// store it to variable, map() returns new array
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

// solution with forOf()

const movementsUsd = [];

for (const mov of movements) {
  movementsUsd.push(mov * eurToUsd);
}

console.log(movementsUsd);

// description with map()

const movDescr = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movDescr);

//-------------------------------------------------------------- filter()

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// create array of deposits = movements > 0

const deposits = movements.filter(function (mov) {
  return mov > 0 ? true : false;
});

console.log(deposits);

// the same, with for..of loop

const deposit2 = [];

for (const mov of movements) {
  if (mov > 1) {
    deposit2.push(mov);
  }
}

console.log(deposit2);

// create an arrat of withdrawals

const withdrawals = movements.filter(mov => (mov < 0 ? true : false));
console.log(withdrawals);

const withdrawals2 = [];
for (const mov of movements) {
  if (mov < 0) {
    withdrawals2.push(mov);
  }
}
console.log(withdrawals2);

//-------------------------------------------------------------- reduce()

// --- SUM
// boiling down all the elements in an array to one single value

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator >> snowball
// acc purpose: keep track of the current sum

const balance = movements.reduce(function (accumulator, element, i, arr) {
  console.log(`Iteration no. ${i}: ${accumulator}`);

  return accumulator + element;
}, 0);
console.log(balance); //3840

// array function version
const balance2 = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance2);

// for...of loop version

let balance3 = 0;

for (const mov of movements) balance3 += mov;
console.log(balance3);

// --- MAX VALUE

// acc purpose: keep track of the max value
const maxValue = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(maxValue); // 3000

const maxValue2 = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(maxValue2); // 3000

//------------------------------------------------------CHAINING METHODS

// Take all movements  deposits.
// Convert € > $.
// Add everything so you know how much was deposited in $.

// we have calculated everything earlier
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(deposits); // [200, 450, 3000, 70, 1300]

// conversion rate
// const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => (mov > 0 ? true : false))
  .map((mov, i, arr) => {
    console.log(arr);
    mov * eurToUsd;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD); // 5522.000000000001

//-------------------------------------------------------------- find()

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(firstWithdrawal); // -400

// with for..of

const firstWithdrawal2 = [];

for (let mov of movements) {
  if (mov < 0) {
    console.log(firstWithdrawal2.push(mov));
    break;
  }
}

console.log(firstWithdrawal2);

//-------------------------------------------------------------- findIndex()

// returns the INDEX of the first element in the array that satisfies the provided testing function
// find() returns the ELEMENT

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = element => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
