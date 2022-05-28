# Numbers, Dates, Intl and Timers

<br>

## Content

1. [Converting and checking numbers](#1-converting-and-checking-numbers)
2. [Math and Rounding](#2-math-and-rounding)
3. [The Remainder Operator](#3-the-remainder-operator)
4. [Working with BigInt](#4-working-with-bigint)
5. [Creating Dates](#5-creating-dates)
6. [Adding dates to Bankist app](#6-adding-dates-to-bankist-app)
7. [Operations with Dates](#7-operations-with-dates)
8. [Internationalizing Dates INTL](#8-internationalizing-dates-intl)
9. [Internationalizing Numbers INTL](#9-internationalizing-numbers-intl)
10. [Timers, setTimeout and setInterval](#10-timers-settimeout-and-setinterval)
11. [Implementing a Countdown timer](#11-implementing-a-countdown-timer)
12. [Resources](#12-resources)

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

<br><br>

---

<br>

## 4. Working with BigInt

<br>

<br><br>

---

<br>

## 5. Creating Dates

<br>

<br><br>

---

<br>

## 6. Adding dates to Bankist app

<br>

<br><br>

---

<br>

## 7. Operations with Dates

<br>

<br><br>

---

<br>

## 8. Internationalizing Dates INTL

<br>

<br><br>

---

<br>

## 9. Internationalizing Numbers INTL

<br>

<br><br>

---

<br>

## 10. Timers, setTimeout and setInterval

<br>

<br><br>

---

<br>

## 11. Implementing a Countdown timer

<br>

<br><br>

---

<br>

### 12. Resources

- [JS Numbers and Dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)
