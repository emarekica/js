'use strict';

// arr of strings

//-------------------------------------------------------------- sort()

// strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort()); // ['Adam', 'Jonas', 'Martha', 'Zach']
console.log(owners); // mutated

// numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// doesn't work
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70]
console.log(movements); // mutated, but not sorted

// CALLBACK
// a = current value
// b = next value

// ASCENDING (a - b)
// return < 0, a, b (keep order ascending)
// return > 0, b, a (switch order)

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b < a) return -1;
// });

movements.sort((a, b) => a - b);

console.log(movements); // [-650, -400, -130, 70, 200, 450, 1300, 3000]

// DESCENDING (b - a)
// return < 0, b, a (keep order descending)
// return > 0, a, b (switch order)

// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b < a) return 1;
// });

movements.sort((a, b) => b - a);

console.log(movements); // [3000, 1300, 450, 200, 70, -130, -400, -650]

// works with strings, too
owners.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});

console.log(owners); // ['Adam', 'Jonas', 'Martha', 'Zach']

owners.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});

console.log(owners); // ['Zach', 'Martha', 'Jonas', 'Adam']
