'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log('---- for...of loop ----');

// for..of loop
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}.`);
  } else if (movement < 0) {
    // Math.abs tahes absolute value, removes minus
    console.log(`You withdrew ${Math.abs(movement)}.`);
  }
}

console.log(' -------- ');

// accessing counter variables in for..of loop
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}.`);
  } else if (movement < 0) {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}.`);
  }
}

console.log('---- forEach() ----');

// forEach()
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}.`);
  } else if (movement < 0) {
    console.log(`You withdrew ${Math.abs(movement)}.`);
  }
});

// in each iteration, the current element is passed in the callback function
// iteration 0: function(200)
// iteration 1: function(450)
// iteration 2: function(400)
// iteration 3: function(3000)

// access to the current index
movements.forEach(function (mov, i, array) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}.`);
  } else if (mov < 0) {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}.`);
  }
});

// ------------------ with MAP

console.log('----- forEach + map -----');

const currencies = new Map([
  // [key, value]
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// ------------------ with SET

console.log('----- forEach + set -----');

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`);
});
