# Numbers, Dates, Intl and Timers

<br>

## Content

1. [Converting and checking numbers](#1-converting-and-checking-numbers)
2. [Math and Rounding](#2-math-and-rounding)
3. [The Remainder Operator](#3-the-remainder-operator)
4. [Numeric separators](#4-numeric-separators)
5. [Working with BigInt](#5-working-with-bigint)
6. [Creating Dates](#6-creating-dates)
7. [Adding dates to Bankist app](#7-adding-dates-to-bankist-app)
8. [Operations with Dates](#8-operations-with-dates)
9. [Internationalizing Dates INTL](#9-internationalizing-dates-intl)
10. [Internationalizing Numbers INTL](#10-internationalizing-numbers-intl)
11. [Timers, setTimeout and setInterval](#11-timers-settimeout-and-setinterval)
12. [Implementing a Countdown timer](#12-implementing-a-countdown-timer)
13. [Resources](#13-resources)

<br><br>

---

<br>

## 1. Converting and checking numbers

<br>

- `Number` and `+` string >> number

- `parseFloat` reads number value from a string

- `isNan` checks if value is a NaN

- `isFinite` checks if a value is a number, not a string

- `isInteger` checks if value is an integer

<br><br>

In JS, **all numbers are internally represented as floating point numbers** (decimalni brojevi), **no matter if written as integers or decimals**.
<br>

    console.log(23 === 23.0); // true

<br><br>

**BINARY FORMAT**
<br>

Numbers are represented in 63 / base 2 format. Certain numbers are difficult to represent in base 2 (0 & 1), and easy in base 10 (0-9).
Precise scientific or financial calculations in JS are not possible because of this.
<br>

    console.log(0.1 + 0.2); // 0.30000000000000004
    console.log(0.1 + 0.2 === 0.3); // false

<br><br>

### **CONVERTING STRING TO NUMBER**

<br>

    console.log(Number('23')); // 23
    console.log(+'23'); // 23

<br><br>

When JS sees `+` operator, it automatically does type coercion >> converts operands to numbers.

`Number()` can be replaces with `+`.

<br><br>

### **Parsing a number from a string**

<br>

**Every function is also an object.**
`Number()` is both a function and an object. It has methods for parsing.
<br>

If we pass a string, JS will try to figure out a number inside of that string, but the string needs to start with a number.

<br><br>

- `parseFloat()`
  <br>

**Use to read number value out of a string.**
<br><br>

```js
// integers
console.log(Number.parseInt("32px", 10)); // 32
console.log(Number.parseInt("px32", 10)); // NaN

// floating
console.log(Number.parseFloat("2.5rem")); // 2.5
console.log(Number.parseFloat(" 2.5rem ")); // 2.5
```

<br><br>

2nd argument = **radix** = numeral system base

Pass it in to avoid bugs.
<br><br>

`parseInt` and `parseFloat` are **global functions**. Could be called alone (old school), but it is encouraged to call them on `Number` object.
<br>

    console.log(parseFloat('2.5rem'));
    console.log(Number.parseFloat('2.5rem'));

<br><br>

`number` object provides a **namespace**.

Namespacing is the act of wrapping a set of entities, variables, functions, objects under a single umbrella term.

<br><br>

- `isNaN()`
  <br>

**Use to check if value is a NaN.** Don't use it to check if a value is a number or not.Rarely used in practice.
<br><br>

```js
console.log(Number.isNaN(20)); // false, is a number
console.log(Number.isNaN("20")); // false, is not Not A Number
console.log(Number.isNaN(+"20")); // false, is a number
console.log(Number.isNaN(+"20x")); // true, Not A Number
console.log(Number.isNaN(20 / 0)); // false, Infinity value
```

<br><br>

- `isFinite()`
  <br>

**Use to check if a value is a real number, not a string.**
<br><br>

```js
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite("20")); // false, is not a number
console.log(Number.isFinite(+"20")); // true
console.log(Number.isFinite(+"20x")); // false
console.log(Number.isFinite(20 / 0)); // false
```

<br><br>

- `isInteger()`
  <br>

**Checks if a value is an integer.**
<br><br>

```js
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(20.0)); // true
console.log(Number.isInteger(20 / 0)); // false
```

<br><br>

---

<br>

## 2. Math and rounding

<br>

There are methods on `Math` objects.

<br><br>

`Math.sqrt()`
<br>

Returns the square root of a number. Part of Math() namespace.
<br>

```js
// korijen iz 2
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

// cubic root (korijen iz 3)
console.log(8 ** (1 / 3)); // 2
```

<br><br>

`Math.max()`
<br>

**Returns the largest of the zero or more numbers given** as input parameters, or `NaN` if any parameter isn't a number and can't be converted into one.
<br>

**Does type coercion.**
Doesn't do parsing.
<br><br>

```js
console.log(Math.max(12, 23, 8, 4, 1, 12)); // 23
console.log(Math.max(12, "23", 8, 4, 1, 12)); // 23 >> coercion
console.log(Math.max(12, "23px", 8, 4, 1, 12)); // NaN  >> no parsing
```

<br><br>

`Math.min()`
<br>

**Returns the lowest-valued number** passed into it, or `NaN` if any parameter isn't a number and can't be converted into one.
<br>

    console.log(Math.min(12, 23, 8, 4, 1, 12)); // 1

<br><br>

### **CONSTANTS**

<br>

There are constants on the `Math` object/in the `Math` namespace.
<br><br>

`Math.PI`
<br>

_example_: calculate circumference (opseg) of a circle with radius (r) 10px

formula: **opseg = radijus ² \* PI**
<br><br>

    console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

<br><br>

`Math.random()`
<br>

Returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1).
<br><br>

`Math.trunc()`
<br>

Removes decimals. `+1` to get values between `1-6`.
<br><br>

```js
// random num 0...1
console.log(Math.random()); // 0.32472068640679796

console.log(Math.trunc(Math.random() * 6) + 1); // 4
```

<br><br>

**general formula for random number between two integers**
<br><br>

```js
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// process explanation
// 0...1 >> 0 ... (max - min) >> min...(max - min + min) >> min...max
```

<br><br>

### **ROUNDING**

<br>

**Rounding integers**
<br>

`Math.trunc()`
<br>

Removes decimal part.
<br><br>

```js
console.log(Math.trunc(23.3)); // 23
console.log(Math.trunc(23.7)); // 23
console.log(Math.trunc("23.7")); // 23 >> does coercion
```

<br><br>

`Math.round()`
<br>

Returns the value of a number rounded to the nearest integer.
<br><br>

```js
console.log(Math.round(23.3)); // 23
console.log(Math.round(23.7)); // 24
console.log(Math.round("23.7")); // 23
```

<br><br>

`Math.ceil()`
<br>

Rounds a number up to the next largest integer.
<br><br>

```js
console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.7)); // 24
console.log(Math.ceil("23.7")); // 24
```

<br><br>

`Math.floor()`
<br>

Returns the largest integer less than or equal to a given number.
<br><br>

```js
console.log(Math.floor(23.3)); // 23
console.log(Math.floor(23.7)); // 23
console.log(Math.floor("23.7")); // 23
```

<br><br>

**All three methods do type coercion.**

<br><br>

**`Math.floor()` vs `Math.trunc()`**
<br><br>

Do the same when dealing with **positive numbers**.
<br><br>

```js
console.log(Math.floor(23.3)); // 23
console.log(Math.trunc(23.3)); // 23
```

<br><br>

With **negative numbers**
<br><br>

```js
console.log(Math.trunc(-23.3)); // -23
console.log(Math.floor(-23.3)); // -24
```

<br><br>

**Rounding decimals**
<br><br>

`toFixed(digits)` formats a number using fixed-point notation.

The number of `digits` to appear after the decimal point.

**it returns a string >> add** `+`
<br><br>

```js
// returns string
console.log((2.7).toFixed(0)); // 3
console.log((2.7).toFixed(1)); // 2.7
console.log((2.7).toFixed(2)); // 2.70

// returns a number
console.log(+(2.7).toFixed(0)); // 3
console.log(+(2.7).toFixed(1)); // 2.7
console.log(+(2.7).toFixed(2)); // 2.70
```

<br><br>

Numbers are in parenthesis because **behind the scenes JS does boxing**:
<br>

1. transforms it to `Number` object

2. calls the `toFixed()` method on that object

3. when operation is done, converts it back to primitive

<br><br>

**BANKIST**
<br><br>

**1. Round the requested loan amount.**
<br>

Apply rounding to loan functionality.
<br>

```js
btnLoan.addEventListener('click', function (e) {
    ...

    const amount = Math.floor(inputLoanAmount.value);
```

<br><br>

**2. Make numbers look nicer.**
<br>

Use `toFixed()` to make all numbers have a same look (two decimals at the end).
<br>

Change in:

- `displayMovements`
  <br>

```js
const displayMovements = function (movements, sort = false) {
    ...

    <div class="movements__value">${mov.toFixed(2)}€</div>
```

<br><br>

- `displayBalance`
  <br>

```js
const calcDisplayBalance = function (acc) {
  ...

  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};
```

<br><br>

- `displaySummary`
  <br>

```js
const calcDisplaySummary = function (acc) {
    ...

    labelSumIn.textContent = `${incomes.toFixed(2)}€`;

    labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
```

<br><br>

---

<br>

## 3. The Remainder Operator

<br>

`%`

Returns remainder of a division. It always takes the sign of the dividend.
<br>

**syntax**: `x % y`
<br>

_dividend = djeljenik_
_divisor = djelitelj_
_sign = predznak_
<br><br>

**examples**:
<br>

```js
// Remainder with positive dividend

13 % 5; //  3
1 % -2; //  1
1 % 2; //  1
2 % 3; //  2
(5.5 % 2) - // 1.5
  // Remainder with negative dividend

  (13 % 5) - // -3
  (1 % 2) - // -1
  (4 % 2); // -0

// Remainder with NaN

NaN % 2; // NaN

// Remainder with Infinity

Infinity % 2; // NaN
Infinity % 0; // NaN
Infinity % Infinity; // NaN
```

<br><br>

To obtain a **modulo in JavaScript**, in place of `a % n`, use `((a % n ) + n ) % n`.

<br><br>

### **Check if a number is even or odd**

<br>

Number is EVEN if divisible by 2, remainder 0.
<br><br>

```js
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

const isEven = (n) => n % 2 === 0;

console.log(isEven(7)); // false
console.log(isEven(24)); // true
console.log(isEven(215)); // false
```

<br><br>

When remainder is zero, it means the first number is completely divisible by the second one.

Whenever you need to do something every n-th time, use remainder `%`.
<br>

- every 2nd time >> `x % 2 === 0`

- every 3rd time >> `x % 3 === 0`
  <br>

`x % n === 0`

<br><br>

---

<br>

## 4. Numeric separators

<br>

`_`

<br>

Format numbers to be easier to read and understand. Separators that we place anywhere in large numbers.

<br>

**example**: represent a diameter of Solar system
<br>

    // 287,460,000,000
    const diameterConfusing = 287460000000;
    const diameterSimple = 287_460_000_000;

<br><br>

The JS Engine ignores underscores.
<br>

    // in Console
    287460000000

<br><br>

### **Use `_` to give meaning to certain parts of numbers**

<br>

    // const priceInCents = 349_99;
    // console.log(priceInCents);

    const price = 349_99;
    console.log(price); // 34999

<br><br>

same number, different meaning
<br>

    const transferFee1 = 15_00;
    const transferFee2 = 1_500;

<br><br>

### **Restrictions**

<br>

    const PI = 3.14_15; // allowed

    // illegal
    // const PI = _3.1415 // error, now allowed
    // const PI = 3._1415
    // const PI = 3.14__15
    // const PI = 3.1415_

    console.log(PI);

<br><br>

### **Converting string containing `_` to a number**

<br>

    console.log(Number('23000')); // 23000

    console.log(Number('23_000')); // NaN
    console.log(parseInt('23_000')); // 23

<br><br>

`_` works only if you use it in the code.

If you need to store a number in a string (API) or if you get a number as a string from an API, don't use `_` because JS won't parse that number correctly from the string.

<br><br>

---

## 5. Working with BigInt

<br>

Special type of integers introduced in ES2020.

A primitive wrapper object used to represent and manipulate primitive `bigint` values — which are too large to be represented by the `number` primitive.

It is not used as much in practice.
<br><br>

Numbers are internally represented by 64 bits = there are exactly 64 `0` and `1` representing any given number.

But only 53 are used to store digits themselves. The rest are used to store position of the decimal point and the sign.

That means there is a limit of how big a number can be.

It can be calculated.
<br><br>

    console.log(2 ** 53 - 1); // 4503599627370495
    console.log(Number.MAX_SAFE_INTEGER); // 4503599627370495

<br><br>

It is stored in the namespace as `MAX_SAFE_INTEGER`.

Any integer larger than this can't be represented accurately.
<br>

    // unsafe / incorrectly represented numbers
    console.log(2 ** 53 + 1); // 9007199254740992
    console.log(2 ** 53 + 2); // 9007199254740994

<br><br>

`BigInt` is a new primitive introduced to store numbers as large as we want.

`n` transforms regular into bigInt number.

Sometimes `BigInt()` constructor function is used (without `new`).
<br><br>

```js
console.log(230693456343049568904345667976896788567);
// 2.3069345634304955e+38

console.log(230693456343049568904345667976896788567n);
// 230693456343049568904345667976896788567n = BigInt number accurately displayed

console.log(BigInt(23069345634));
// 23069345634n = BigInt
```

<br><br>

### **Operations**

<br>

All usual operators work the same.
<br><br>

```js
console.log(10000n + 10000n); // 20000n

console.log(2344567050695609704596049567n * 100000000000n);
// 234456705069560970459604956700000000000n
```

`BigInt` can't be mixed with regular numbers.
<br>

    const hugeNum = 345665938592039345786938475063n;
    const regularNum = 49;

    console.log(hugeNum + regularNum); // Error: Cannot mix BigInt and other types

<br><br>

You have to convert `regularNum` to `BigInt` with constructor function.
<br><br>

**Math operations don't work.**
<br>

    console.log(Math.sqrt(16n)); // error

<br><br>

**2 exceptions**:
<br>

1. **logical operators** `===`, `==`
   <br><br>

```js
console.log(20n > 15); // true

console.log(20n === 20); // false; === does no type coercion
console.log(20n == 20); // true
console.log(20n == "20"); // true

console.log(typeof 20n); // bigint
console.log(typeof 20); // number
```

2. **string concatenation**
   <br><br>

```js
console.log(hugeNum + " is really BIG!");
// 345665938592039345786938475063 is really BIG
```

<br><br>

**Divisions**
<br>

    console.log(10n / 3n); // 3n, cuts decimal part
    console.log(10 / 3); // 3.3333333333333335

<br><br>

---

<br>

## 6. Creating Dates

<br>

### 1. **Create a date**

<br>

- 4 ways

- all use `new Date()` constructor function

- can accept different parameters
  <br><br>

a. **get current date/time with** `Date()`
<br><br>

```js
const now = new Date();

console.log(now);
// Fri Jun 03 2022 10:11:09 GMT+0200 (Central European Summer Time)
```

<br><br>

b. **parse date from a string (unreliable if you write it yourself)**
<br><br>

```js
console.log(new Date("Jun 03 2022 10:11:43"));
// Fri Jun 03 2022 10:11:43 GMT+0200 (Central European Summer Time)

console.log(new Date("December 24 2015"));
// Thu Dec 24 2015 00:00:00 GMT+0100 (Central European Standard Time)
```

<br><br>

c. **year, month, day, hour and seconds can be passed into the constructor**
<br>

Month in JS is zero-based.
<br>

```js
console.log(new Date(2040, 12, 5, 12, 7, 49));
// Sat Jan 05 2041 12:07:49 GMT+0100 (Central European Standard Time)
```

<br><br>

**JS automatically corrects the day.**
If you write Nov 31, it will correct it to Nov 30 because Nov has 30 days.
<br>

```js
console.log(new Date(2040, 10, 31));
// Sat Dec 01 2040 00:00:00 GMT+0100 (Central European Standard Time)
```

<br><br>

**UNIX TIME**

**January 1st, 1970 at 00:00:00 UTC** is referred to as the Unix epoch.
<br>

Early versions of unix measured system time in 1/60 s intervals. This meant that a 32-bit unsigned integer could only represent a span of time less than 829 days. For this reason, the time represented by the number 0 (called the epoch) had to be set in the very recent past. As this was in the early 1970s, the epoch was set to 1971-1-1.
<br>

Later, the system time was changed to increment every second, which increased the span of time that could be represented by a 32-bit unsigned integer to around 136 years. As it was no longer so important to squeeze every second out of the counter, the epoch was rounded down to the nearest decade, thus becoming 1970-1-1. One must assume that this was considered a bit neater than 1971-1-1.
<br>

Note that a 32-bit signed integer using 1970-1-1 as its epoch can represent dates up to 2038-1-19, on which date it will wrap around to 1901-12-13.

<br><br>

d) **Passing into constructor function milliseconds passed since the beginning of the Unix time (Jan 1, 1970)**.
<br><br>

```js
console.log(new Date(0));
// Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

// 3 days later
console.log(new Date(3 * 24 * 60 * 60 * 1000));
// Sun Jan 04 1970 01:00:00 GMT+0100 (Central European Standard Time)
```

<br><br>

**timestamp in Console = milliseconds that passed since 1-1-1970**
<br><br>

    3 * 24 * 60 * 60 * 1000
    259200000 // timestamp of the day 3

<br><br>

Get the timestamp for a date with `getTime()` method.

<br><br>

**Dates are special type of object >> have methods**.

Use methods to get or set components of the date.

<br><br>

### 2. **Working with dates**

<br><br>

```js
const future = new Date(2037, 10, 19, 15, 23);

console.log(future);
// Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)

// methods
console.log(future.getFullYear()); // 2037
console.log(future.getMonth()); // 10; zero based
console.log(future.getDate()); // 19
console.log(future.getDay()); // 4; day of the week; 0 = Sunday, 4 = Thursday
console.log(future.getHours()); // 15
console.log(future.getMinutes()); // 23
console.log(future.getSeconds()); // 0
```

<br><br>

String that follows ISO standard:
<br>

    console.log(future.toISOString()); // 2037-11-19T14:23:00.000Z

<br><br>

`toISOString()` is useful to convert date object into string and store it.

<br><br>

**Getting timestamp**
<br><br>

```js
console.log(future.getTime()); // 2142253380000

// new date based on the timestamp

console.log(new Date(2142253380000));
// Thu Nov 19 2037 15:23:00 GMT+0100 (Central European Standard Time)
```

<br><br>

Method for getting timestamp for right now:
<br>

    console.log(Date.now()); // 1654257065809

<br><br>

`set` versions of methods:
<br><br>

```js
future.setFullYear(2040);
console.log(future);
// Mon Nov 19 2040 15:23:00 GMT+0100 (Central European Standard Time)

future.setMonth(0);
console.log(future);
// Mon Jan 19 2040 15:23:00 GMT+0100 (Central European Standard Time)

future.setDate(15);
console.log(future);
// Sun Jan 15 2040 15:23:00 GMT+0100 (Central European Standard Time)

future.setHours(13);
console.log(future);
// Sun Jan 15 2040 13:23:00 GMT+0100 (Central European Standard Time)

future.setMinutes(15);
console.log(future);
// Sun Jan 15 2040 13:15:00 GMT+0100 (Central European Standard Time)
```

<br><br>

---

<br>

## 7. Adding dates to Bankist app

<br>

- date in current balance

- date in all the movements

<br><br>

**Fake always logged in**
<br>

```js
currentAccount = account1;
updateUI(currentAccount);
containerApp.style.opacity = 100; // makes UI visible
```

<br><br>

**Create Current balance Date**
<br>

HTML: `class="date"`

JS: `const labelDate = document.querySelector('.date');`
<br><br>

```js
const now = new Date(); // = right now
labelDate.textContent = now;

// displays: As of Fri Jun 03 2022 16:16:36 GMT+0200 (Central European Summer Time)

// day/month/year format

const day = now.getDate();
const month = now.getMonth() + 1; // because it is zero-based
const year = now.getFullYear();
const hour = now.getHours();
const min = now.getMinutes();

labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;
```

<br><br>

**This creates static time.**

For tracking actual time, we need a **timer**.

<br><br>

**"padding" the number with zero**
<br>

**syntax**: `padStart(length, what you are padding with)`
<br><br>

```js
const day = `${now.getDate()}`.padStart(2, "0");
const month = `${now.getMonth() + 1}`.padStart(2, 0);
```

<br><br>

**Use dates on the** `Movements`
<br><br>

in `displayMovements()`:
<br>

- pass in the whole account, not just movements + change everywhere where it is used

- add another HTML content to the `forEach()` loop in the function
  <br><br>

```js
movs.forEach(function (mov, i) {
    // check if deposit or withdrawal
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // creating one row of movements
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>

        // date
        <div class="movements__date">${displayDate}</div>

        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;
```

<br><br>

The date comes from `account.movementDates`.

<br><br>

Common technique for looping over two arrays at the same time:

- call `forEach()` on one of them (`movements`)

- use current index `i` to reach the data of some other array (`movementsDates`)

It is at the same position because we are using the same index.
<br><br>

```js
movs.forEach(function (mov, i) {
  const type = mov > 0 ? "deposit" : "withdrawal";

  // loop over another array
  const date = new Date(acc.movementsDates[i]);

  const day = `${date.getDate()}`.padStart(2, "0");
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  const hour = `${now.getHours()}`.padStart(2, 0);
  const min = `${now.getHours()}`.padStart(2, 0);

  const displayDate = `${day}/${month}/${year}`;

  const html = `
    <div class="movements__row">
      ...
      <div class="movements__date">${displayDate}</div>
      ...
    </div>
  `;
});
```

<br><br>

**Add a date when requesting a loan/making a new transfer**
<br>

Whenever there is a new loan request or a new transfer, push a new value into the `movements` array (amount) and into the `movementsDates` (date).

JS will convert a new date into nicely formatted string.
<br><br>

```js
btnTransfer.addEventListener('click', function (e) {
  ...

  if (...) {
    ...

    // ADD TRANSFER DATE
     currentAccount.movementsDates.push(new Date()toISOString());
     receiver.movementsDates.push(new Date()toISOString());
    ...
  }
});
```

<br><br>

Add the same thing to the `btnLoan`.
<br><br>

```js

btnLoan.addEventListener('click', function (e) {
  ...

  if (...) {
    ...

    // add loan date
    currentAccount.movementsDates.push(new Date().toISOString());

    ...
  }
  ...
});
```

<br><br>

---

<br>

## 8. Operations with Dates

<br>

Whenever we convert date to a number, result is **timestamp in milliseconds**.

Then, we can do calculations with milliseconds.
<br>

Convert milliseconds to days, hours etc.
<br>

    // milliseconds >> days

    number / (1000 * 60 * 60 * 24)

<br><br>

For precise calculations and edge-cases use [Moment.js](https://momentjs.com/).

<br><br>

`Math.abs` takes the absolute value.
<br><br>

Function that calculates how many days have passed between two dates:
<br>

```js
const calcDaysPast = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPast(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1); // 864000000 milliseconds > 10 days
```

<br><br>

`Math.round()` when you have hour:minute and don't want it.
<br>

```js
const days2 = calcDaysPastWithHourMinute(
  new Date(2037, 3, 4, 10, 4),
  new Date(2037, 3, 14, 4, 15)
);
console.log(days2); // 864000000 milliseconds > 10 days
```

<br><br>

**BANKIST**
<br>

If a movement happens today, instead of current date, display _today_.

If it happened yesterday, display _yesterday_.

If it happened x days ago, display _x days ago_.
<br><br>

```js
const formatMovementDate = function (date) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 25));

  // calculating days passed
  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
};
```

<br><br>

---

<br>

## 9. Internationalizing Dates INTL

<br>

JS has new **internationalization API**.

Allows easy date and number formatting according to different languages.
<br>

The `Intl` object is the namespace for the ECMAScript Internationalization API, which provides language sensitive string comparison, number formatting, and date and time formatting. The `Intl` object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.
<br>

We can make API support different languages around the world.

Currencies and dates are differently represented in Europe, US and Asia.

<br><br>

`DateTimeFormat()`
<br>

Most straight-forward way to format date/time.
<br><br>

**syntax**:
<br>

    new Intl.DateTimeFormat()
    new Intl.DateTimeFormat(locales)
    new Intl.DateTimeFormat(locales, options)

<br><br>

Accepts `locale` string ("language, country").

It will create a **formater** for the chosen language in the chosen country.
<br><br>

    const now = new Date();"
    labelDate.textContent = new Intl.DateTimeFormat("en-US");

<br><br>

Call `format(date you want to format)` on formater.
<br><br>

    labelDate.textContent = new Intl.DateTimeFormat("en-US").format(now);

<br><br>

[ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm)

<br><br>

**Customize date/time formatting**
<br>

Display also **time** by providing `options` object to the function.
<br><br>

```js
const options = {
  hour: "numeric",
  minute: "numeric",
  day: "numeric",
  month: "long", // "numeric", 2-digit
  year: "numeric",
  weekday: "short", // "short", "narrow"
};

labelDate.textContent = new Intl.DateTimeFormat("en-GB", options).format(now);
```

<br><br>

**Get `locale` from user's browser**
<br>

```js
const locale = navigator.language;

labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);
```

<br><br>

**BANKIST**
<br>

**Set current date to browser's locale.**

Each account has `locale` manually defined, so access that with `currentAccount.locale`.
<br><br>

```js
btnLogin.addEventListener("click", function (e) {
    ...

    const now = new Date(); // = right now


    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric", // "long", 2-digit
      year: "numeric",
      // weekday: "short", // "short", "narrow"
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
```

<br><br>

**Set locale to dates in Movements**
<br><br>

```js
const formatMovementDate = function (date, locale) {
    ...

    if (daysPassed === 0) return "Today";
    if (daysPassed === 1) return "Yesterday";
    if (daysPassed <= 7) return `${daysPassed} days ago`;
    else {

    return new Intl.DateTimeFormat(locale).format(date);
```

<br><br>

---

<br>

## 10. Internationalizing Numbers INTL

<br>

3 different options for a style:
<br>

- `unit`

- `percent`

- `currency`
  <br><br>

```js
const num = 43534985.23;

const options2 = {
  style: "unit", // percent, currency
  unit: "celsius",
};

console.log("US: ", new Intl.NumberFormat("en-US", options2).format(num));
// US:  43,534,985.23 °C

console.log("DE: ", new Intl.NumberFormat("de-DE", options2).format(num));
// DE:  43.534.985,23 °C

console.log("CRO: ", new Intl.NumberFormat("hr-HR", options2).format(num));
// CRO:  43.534.985,23 °C

console.log("Syria: ", new Intl.NumberFormat("ar-SY", options2).format(num));
// Syria:  ٤٣٬٥٣٤٬٩٨٥٫٢٣

// from the browser
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);
// en-GB 43,534,985.23
```

<br><br>

    style: "unit"
    unit: "miles-per-hour" / "kilometers-per-hour"

    style: "percent"
    unit: /     >> ignored, loggs "%"

    style: "currency"
    unit: /     >> ignored
    currency: "EUR"

<br><br>

**turn on/off Grouping**
<br><br>

```js
const options2 = {
  style: "unit", // percent, currency
  unit: "celsius",
  useGrouping: true,
};

// In console:
// US:  43,534,985.23°C
// intl.js:60 DE:  43.534.985,23 °C
// intl.js:61 CRO:  43.534.985,23 °C

const options2 = {
  style: "unit", // percent, currency
  unit: "celsius",
  useGrouping: false,
};

// In console:
// US:  43534985.23°C
// intl.js:60 DE:  43534985,23 °C
// intl.js:61 CRO:  43534985,23 °C
```

<br><br>

**BANKIST**
<br><br>

`displayMovements()`
<br><br>

```js
const displayMovements = function (acc, sort = false) {
    ...

    movs.forEach(function (mov, i) {
    ...

    const formattedMovement = new Intl.NumberFormat(acc.locale, {
      style: "currency",
      currency: acc.currency,
    }).format(mov);

    const html =
        ...
        <div class="movements__value">${formattedMovement}</div>
    }
}
```

<br><br>

**Change currency in the current balance and in statistics**
<br>

Create a new function outside which will take care of formatting currencies.
<br><br>

```js
// formats currencies
const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};
```

<br><br>

Use it in:
<br><br>

- `calcDisplayBalance()`

- `calcDisplayMovements()`

- `calcDisplaySummary()`
  <br><br>

as:
<br>

```js
formatCurrency(acc.balance, acc.locale, acc.currency);
```

<br><br>

---

<br>

## 11. Timers, setTimeout and setInterval

<br>

Two types of timers in JS:
<br>

1. `setTimeout()` >> runs just once

2. `setInterval()` >> runs forever until you stop it

<br><br>

### 1. `setTimeout()`

<br><br>

Use it to execute code at some point in the future.

Receives a callback.

Second argument is amount of **milliseconds that will pass until this function is called**.

    1 sec = 1000 millisec

<br><br>

**syntax**:
<br>

    setTimeout(code)
    setTimeout(code, delay)

    setTimeout(functionRef)
    setTimeout(functionRef, delay)
    setTimeout(functionRef, delay, param1)

<br><br>

**example**: ordering pizza
<br>

We have scheduled the function call for 3 seconds (3000 milliseconds) later.
<br><br>

```js
setTimeout(() => console.log("Here is your pizza."), 3000);
console.log("Waiting...");

// in Console:
// Waiting...
// "Here is your pizza."
```

<br><br>

**The execution of the code doesn't stop when it reaches** `setTimeout()`. It registers the callback that is ought to be executed later (in 3 secs) and goes on. It is called **asynchronous javascript**.

<br><br>

**How to pass in arguments into the callback function when it is not us who is calling it, but the setTimeout() function is calling it?**
<br>

All the arguments passed in after the delay will be arguments to the callback function.
<br><br>

```js
setTimeout(
  (ingr1, ingr2) =>
    console.log(`Here is your pizza with ${ingr1} and ${ingr2}.`),
  3000,
  "olives",
  "garlic"
);
console.log("Waiting...");

// In Console:
// Waiting...
// Here is your pizza with olives and garlic.
```

<br><br>

**Cancel the timer until the delay has passed**
<br><br>

`clearTimeout()` deletes the `setTimeout()` timer.
<br><br>

```js
const ingredients = ["olives", "garlic"];

const pizzaTimer = setTimeout(
  (ingr1, ingr2) =>
    console.log(`Here is your pizza with ${ingr1} and ${ingr2}.`),
  3000,
  ...ingredients
);
console.log("Waiting...");

if (ingredients.includes("garlic")) clearTimeout(pizzaTimer);
```

<br><br>

**BANKIST**
<br><br>

Simulate aproval of the loan, use `setTimeout()`.
<br>

`btnLoan.eventListener()`
<br><br>

```js
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      // add positive movement to the current user
      currentAccount.movements.push(amount);

      // add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }

  inputLoanAmount.value = "";
});
```

<br><br>

### 2. `setInterval()`

<br><br>

Used to run a function over and over again (every 5 sec, every 10 min).
<br>

**syntax**:
<br><br>

    setInterval(code)
    setInterval(code, delay)
    setInterval(func)
    setInterval(func, delay)
    setInterval(func, delay, arg0, arg1, /* ... ,*/ argN)

<br><br>

Executed every second.
<br>

```js
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
```

<br><br>

---

<br>

## 12. Implementing a Countdown timer

<br>

Make a timer that logs out user after a set period of time.
<br><br>

`btnLogin.addEventListener()`
<br><br>

Create a function outside of the event listener, it will start logout timer.
<br><br>

```js
const logOutTimer = function () {
  // Set time to 5 min
  let time = 120;

  // Call timer every second
  setInterval(function () {
    // convert to min:sec
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each callback call, print remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // Remove 1 sec from each function all
    // time = time - 1;
    time--;

    // When time = 0 sec, stop timer
    if (time === 0) {
      clearInterval(timer);
    }
    labelWelcome.textContent = "Log in to get started";
    containerApp.style.opacity = 0;

    // stop timer from being -num
  }, 1000);
};
```

<br><br>

Use it in login function `btnLogin.addEventListener()` and delete if it already exists.
<br>

Have it as a **global variable** so it is accessible when users are logged out and can be cleared if needed.
<br>

    let timer;

<br><br>

Return timer value from the `logOutTimer()`.
<br><br>

```js
const logOutTimer = function () {
    ...

    const timer = setInterval(tick, 1000);
    return timer;
};
```

Use it in login function `btnLogin.addEventListener()` and delete if it already exists.
<br><br>

```js
btnLogin.addEventListener('click', function (e) {
    ...

    // TIMER
    // if there already is a timer from other user, clear it
    if (timer) clearInterval(timer);

    // set new timer for the new user
    timer = logOutTimer();
```

<br><br>

Reset timer whenever user does transfer or requests a loan.
<br><br>

```js
btnTransfer.addEventListener('click', function (e) {
    ...

    // Reset timer
    clearInterval(timer);
    timer = logOutTimer();
}
```

<br><br>

---

<br>

### 13. Resources

- [JS Numbers and Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)

- [MDN modulo %](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)

- [MDN bigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

- [Moment.js](https://momentjs.com/)

- [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl)

- [Intl.DateTimeFormat() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)

- [ISO Language Code Table](http://www.lingoes.net/en/translator/langcode.htm)

- [setTimeout() timer](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

- [setInterval() timer](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
