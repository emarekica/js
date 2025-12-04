'use strict';

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////////////////////////////
//
// ----  calculate sum of all accounts
//

// 1. create new array with only movements >> map()
// 2. move all values from different arrays into one parent array >> flat()
// or use flatMap() for both
// 3. filter for deposits >> filter()
// 4. summarize >> reduce()

const bankDepositSum = accounts
  .flatMap(account => account.movements)
  .filter(mov => mov > 0)
  .reduce((acc, el) => acc + el, 0);

console.log(bankDepositSum); // 25180

////////////////////////////////////////////////////////////////////////
//
// ----  calculate how many deposit were of at least 1000$
//

// 2 ways:

// A.

const numDeposit1000 = accounts
  .flatMap(account => account.movements)
  .filter(el => el >= 1000).length; // 5

console.log(numDeposit1000);

// B.
// advanced use case: counting things with reduce()
// reduce will in this way return number of elements

const numDeposit1000b = accounts
  .flatMap(acc => acc.movements)
  // .reduce((count, curr) => (curr >= 1000 ? count + 1 : count), 0);
  .reduce((count, curr) => (curr >= 1000 ? ++count : count), 0);

console.log(numDeposit1000b);

// ++a, a++
let a = 10;

console.log(a++); // 10
console.log(a); // 11
console.log(++a); // 12

let b = 10;

console.log(++b); // 11
console.log(b++); // 11
console.log(b); // 12

////////////////////////////////////////////////////////////////////////
//
// ----  create a new object with reduce() (advanced)
//
// calculate sum of deposits & sum of withdrawals in one go
//

// const sums = accounts ...

// with destructuring
const { deposits, withdrawals } = accounts
  .flatMap(account => account.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);

      // bracket notation with conditional selection
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;

      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );

// console.log(sums); // {deposits: 25180, withdrawals: -7340}

console.log(deposits, withdrawals); // 25180, -7340

////////////////////////////////////////////////////////////////////////
//
// ----  convert a string to title case
// string + array methods
//

// capitalize all the words in a sentence, with exceptions
// this is a nice title >> This Is a Nice Title

// 1. convert all input strings to lower case >> toLowerCase()
// 2. capitalize each word individually >> we need a STRING >> separate each word into an element of the array by an empty string >> split(" ")
// 3. loop over the array, capitalize each word (element) that is not in "exceptions" and store it in a new array >> map()
// 4. exclude exceptions by checking if the current word is included in that array >> includes()
// 5. join all elements back into 1 array >> join(" ")
// 6. capitalize each first letter of the sencence, even if it is an exception >> make a function

const convertTitleCase = function (title) {
  // first letter of the sentence capitalized
  const capitalizeFirstLetter = str => str[0].toUpperCase() + str.slice(1);

  // words that shouldn't be capitalized
  const exceptions = ['a', 'an', 'and', 'but', 'in', 'on', 'or', 'the', 'with'];

  // conversion
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      exceptions.includes(word) ? word : capitalizeFirstLetter(word)
    )
    .join(' ');

  return capitalizeFirstLetter(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title, but not too long'));
console.log(convertTitleCase('another title with an EXAMPLE'));
