# WORKING WITH ARRAYS

<br><br>

## Content:

1. [Simple array methods](#1-simple-array-methods)
2. [The new at Method](#2-the-new-at-method)
3. [Looping Arrays, forEach](#3-looping-arrays-foreach)
4. [forEach with Maps and Sets](#4-foreach-with-maps-and-sets)
5. [Creating DOM elements](#5-creating-dom-elements)
6. [map, filter, reduce](#6-map-filter-reduce)
7. [The map method](#7-the-map-method)
8. [Computing usernames](#8-computing-usernames)
9. [The filter method](#9-the-filter-method)
10. [The reduce method](#10-the-reduce-method)
11. [Implementing Login](#11-implementing-login)
12. [Implementing Transfers](#12-implementing-transfers)
13. [The findIndex method](#13-the-findindex-method)
14. [some and every](#14-some-and-every)
15. [flat and flatMap](#15-flat-and-flatmap)
16. [Sorting arrays](#16-sorting-arrays)
17. [More ways of creating and filling arrays](#17-more-ways-of-creating-and-filling-arrays)
18. [SUMMARY](#18-summary)

[Resources](#19-resources)

<br><br>

---

## 1. Simple array methods

<br>

What we know from before:

- `push()`

- `unshift()`

- `pop()`

- `shift()`

- `indexOf`

- `includes`

<br><br>

New ones:

- `slice()`

- `splice()`

- `reverse()`

- `concat()`

- `join()`

### Why arrays have methods

<br>

Methods are functions we can call on objects. They are attached to objects.

If there are array methods, it means **arrays are also objects. They get access to built-in methods.**

<br><br>

`slice()`

<br>

Copies a portion of an array to a new array.

You can extract part of the original array, without changing it.

Accessor method.
<br><br>

**parameters**

1: start with the index number of the first element we want

2: end with the index number following the last element we want (this parameter is not included in the output)
<br>

```js
let array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.slice(2)); // (3) ['c', 'd', 'e']
console.log(array.slice(2, 4)); // (2) ['c', 'd']
```

<br><br>

Length of a new array will be `parameter2 - parameter1` .
<br><br>

**Negative parameter copies from the end.**

This took last two parameters.
<br>

```js
console.log(array.slice(-2)); // (2) ['d', 'e']
```

<br>

Last element of any array: `array.slice(-1);`
<br><br>

Negative last parameter extracts everything **except that**.
<br>

    console.log(array.slice(1, -2)); // (2) ['b', 'c']

<br><br>

**Create shallow copy**

A matter of preference if you use `slice()` or spread operator.

`Slice()` is necessary if you want to **chain methods**.
<br>

```js
console.log(array.slice()); // (5) ['a', 'b', 'c', 'd', 'e']

console.log([...array]); // (5) ['a', 'b', 'c', 'd', 'e']
```

<br><br>

`splice()`
<br>

**Mutator method** = mutates original array.

Can add or remove an item from any position in an array or add and remove simultaneously.

**For deleting one or more elements from the array.**
<br><br>

**parameters**

1: the index number to start at

2: the number of items to remove

3: items to add (optional).
<br>

```js
let array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.splice(2)); // (3) ['c', 'd', 'e'] = what we extracted (gone)

console.log(array); // (2) ['a', 'b'] = what is left from the original array
```

<br><br>

**common use case**

Remove last element.
<br>

```js
console.log(array.splice(-1)); // ['e'] = removed element
console.log(array); // (4) ['a', 'b', 'c', 'd'] = what is left from the original array

// starting from position 1, take out 2 elements

console.log(array.splice(1, 2)); // (2) ['b', 'c'] = deleted
```

<br><br>

`reverse()`
<br>

**Mutator method.**

Reverses the order of the elements in an array: last element will be first, and the first element will be last.
<br><br>

```js
const arr = ['j', 'i', 'h', 'g', 'f'];
console.log(arr.reverse());
// (5) ['f', 'g', 'h', 'i', 'j']
```

<br><br>

`concat()`
<br>

Accessor method.

Merges two or more arrays to a new array. Can take multiple arguments, effectively allowing you to concatenate many arrays.
<br><br>

**parameters**
<br>

1: array on which the method is called

2: array we pass into the method
<br><br>

```js
const array = let array = ['a', 'b', 'c', 'd', 'e'];
const arr = ['f', 'g', 'h', 'i', 'j'];

const letters = array.concat(arr);

console.log(letters); // (7) ['a', 'd', 'f', 'g', 'h', 'i', 'j']
```

<br><br>
Another way of doing this.
Gives the same result, no mutation of arrays.
<br>

    console.log([...array, ...arr]); // (7) ['a', 'd', 'f', 'g', 'h', 'i', 'j']

<br><br>

`join()`
<br>

Accessor method.

Converts all the elements of an array into a new string.
<br>

If no argument is given, the output of `join()` will be a comma-separated string with no extra whitespace.

In order to include whitespace or another separator, you can add a string of your separator as a parameter to the `join()` method. This parameter will contain the separator you would like between each array element.
<br><br>

```js
join(', ');
join(' - ');

console.log(letters.join('-')); // a-d-f-g-h-i-j
```

<br><br>

---

**Resources**

<br>

- [Accessor methods](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-accessor-methods)

- [Mutator methods](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-mutator-methods)

- [Iteration methods](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods)

<br><br>

---

## 2. at method

<br>

`at()`

<br>

The `at()` method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
<br>

- ES2022 method

- can replace bracket notation
  <br><br>

```js
const atArr = [12, 34, 56];

// traditional way to take value out
console.log(arr[0]); // 12

// ES2022
console.log(arr.at(0)); // 12
```

<br><br>

**Why is it useful instead of bracket notation**
<br>

**To get the last element of the array**. We don't know the length of the array.
There are different ways.
<br><br>

**a:**

    console.log(atArr[atArr.length - 1]); // 56

<br>

**b:**

    console.log(atArr.slice(-1)); // [56], you get copy of array
    console.log(atArr.slice(-1)[0]); // 56, [] gets the value out

<br>

**c:**

    console.log(atArr.at(-1)); // 56
    console.log(atArr.at(-2)); // 34

<br><br>

**When to use** `at()`

<br>

- getting the last element of the array

- counting from the end of an array

- method chaining
  <br><br>

**When too use bracket notation**
<br>

- quickly getting value out of array
  <br><br>

`at()` **also works on strings.**
<br>

```js
console.log('mari'.at(2)); // r
console.log('jonas'.at(5)); // undefined
console.log('jonas'.at(3)); // a

// get last character of string
console.log('jonas'.at(-1)); // s
```

<br><br>

---

## 3. Looping Arrays, forEach

<br>

Executes a provided function once for each array element.
<br>

Loop over the array using `forEach` .

It is different from `for..of` loop.

**Which one you use, depends on your coding style.**
<br><br>

- [for..of loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  <br>

- [forEach() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  <br><br>

_Loop over the array and print for each movement in the bank account, wether the user deposited or withdrew the money._

- _positive values = deposits_
- _negative values = withdrawals_

<br><br>

`for..of` loop
<br><br>

```js
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}.`);
  } else if (movement < 0) {
    // Math.abs tahes absolute value, removes minus
    console.log(`You withdrew ${Math.abs(movement)}.`);
  }
}
```

<br><br>

`forEach()`
<br><br>

- higher order function

- requires callback
  <br><br>

- `forEach` calls the callback function in each iteration of looping over the array

- in each iteration, it passes the current element of the array as an argument
  <br><br>

```js
// forEach()
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}.`);
  } else if (movement < 0) {
    console.log(`You withdrew ${Math.abs(movement)}.`);
  }
});
```

<br><br>

**In each iteration, the current element is passed in the callback function.**
<br>

    // iteration 0: function(200)
    // iteration 1: function(450)
    // iteration 2: function(400)
    // iteration 3: function(3000)

<br><br>

Callback is used to tell the higher-order function `forEach()` what to do.

**The callback function contains instructions.**

<br><br>

### When you need access to counter variable

<br>

- **in `for..of` loop**
  <br>

`.entries()` is a method which returns array of arrays `[ [currentIndex], [value] ]` .
<br><br>

```js
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}.`);
  } else if (movement < 0) {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}.`);
  }
}

In Console:

Movement 1: You deposited 200.
Movement 2: You deposited 450.
Movement 3: You withdrew 400.
```

<br><br>

- **with `forEach()`**
  <br><br>

`forEach()` passes in:

1. current element

2. the `i` (index)

3. the entire array we are looping

<br><br>

We can **specify them in parameter list.**

Just one, two or all can be used.

<br><br>

Names don't matter, **the order matters and it has to be the one above**. That is the order the arguments are passed into the callback. It is reversed from the order in `for..of` loop, which receives `i`, `mov`.
<br><br>

```js
movements.forEach(function (mov, i, array) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}.`);
  } else if (mov < 0) {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}.`);
  }
});
```

<br><br>

### When to use which

<br>

You can't break out of `forEach()` method. `continue` nor `break` statements don't work in the `forEach` loop.

**It will always loop over the entire array.**
<br><br>

If you need to break out of the loop, use `for..of` loop.

## <br><br>

## 4. forEach with Maps and Sets

<br>

### Maps

<br><br>

```js
const currencies = new Map([

  // [key, value]
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`#{key}: ${value}`);
});

// In the Console:

USD: United States dollar
EUR: Euro
GBP: Pound sterling
```

<br><br>

`forEach()` will call the function with **3 arguments**:

1. current value in the current iteration

2. key

3. entire map

<br><br>

### Sets

<br><br>

```js
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique); // Set(3) {'USD', 'GBP', 'EUR'}

currenciesUnique.forEach(function (value, key, set) {
  console.log(`${key}: ${value}`);
});

// In the Console

USD: USD;
GBP: GBP;
EUR: EUR;
```

<br><br>

**Key is the same as the value.**

Set doesn't have keys nor indexes.

`key` parameter is redundant, it is the same as the first for Sets, but it is kept for the sake of not causing confusion.
Basically, it is this `function(value, value, set)`.

But, since there can't be duplicate arguments, this is valid:
<br>

    forEach(function(value, _ , set){})

<br><br>

---

## 5. Creating DOM elements

<br><br>

---

## 6. map, filter, reduce

<br>

**Data transformation**
<br>

<br><br>

---

## 7. The map method

<br><br>

---

## 8. Computing usernames

<br><br>

---

## 9. The filter method

<br><br>

---

## 10. The reduce method

<br><br>

---

## 11. Implementing Login

<br><br>

---

## 12. Implementing Transfers

<br><br>

---

## 13. The findIndex method

<br><br>

---

## 14. some and every

<br><br>

---

## 15. flat and flatMap

<br><br>

---

## 16. Sorting Arrays

<br><br>

---

## 17. More ways of creating and filling arrays

<br><br>

---

## 18. SUMMARY

<br>

**Which array method to use**

<br><br>

---

## 19. Resources
