1. [Uninitialized variables](#1-uninitialized-variables)
2. [Finding a Remainder](#2-finding-a-remainder)
3. [Compound Assignment](#3-compound-assignment)
4. [Escape Sequences in Strings](#4-escape-sequences-in-strings)
5. [String Immutability](#5-string-immutability)
6. [Bracket Notation](#6-bracket-notation)
7. [Access Array Data with Indexes](#7-access-array-data-with-indexes)
8. [Modify Array Data With Indexes](#8-modify-array-data-with-indexes)
9. [Access Multi-Dimensional Arrays With Indexes](#9-access-multi-dimensional-arrays-with-indexes)
10. [Array Manipulation](#10-array-manipulation)
11. [Increment and decrement](#11-increment-and-decrement)
12. [Remainder](#12-remainder)
13. [Literal quotes](#13-literal-quotes)
14. [Return](#14-return)
15. [Global scope](#15-global-scope)
16. [Local scope](#16-local-scope)
17. [Recursion](#17-recursion)
18. [](#18-)
19. [](#19-)

<br><br>

- Math.random()
- Math.floor()
- min-max
- [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
- [radix](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-the-parseint-function-with-a-radix/301182)
- ternary operator, multiple ternary operators

---

## 1. Understanding Uninitialized Variables

When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of undefined.

Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined.

```js
var a = 5;
var b = 10;
var c = "I am a";

a = a + 1;
b = b + 5;
c = c + " String!";
```

<br>
<br>

### Variable Case Sensitivity

**Best Practice**

Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.

Examples:

```
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

<br>
<br>

---

## 2. Finding a Remainder

The remainder operator `%` gives the remainder of the division of two numbers.
<br>

**Example**

```
5 % 2 = 1 because
Math.floor(5 / 2) = 2 (Quotient)
2 * 2 = 4
5 - 4 = 1 (Remainder)
```

<br>
<br>

**Usage**
In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.

```
17 % 2 = 1 (17 is Odd)
48 % 2 = 0 (48 is Even)
```

<br>
<br>

**Note**: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

<br>
<br>

---

## 3. Compound Assignment

<br>

### Augmented Addition

```
let myVar = 1;

myVar = myVar + 5;
myVar += 5;
console.log(myVar);
```

<br>

### Augmented Subtraction

<br>

```
myVar = myVar - 5;
myVar -= 5;
```

<br>

### Augmented Multiplication

<br>

```
myVar = myVar * 5;
myVar *= 5;
```

<br>

### Augmented Division

```
myVar = myVar / 5;
myVar /= 5;
```

<br>
<br>

---

## 4. Escape Sequences in Strings

Quotes are not the only characters that can be escaped inside a string. There are two reasons to use escaping characters:

1. To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
2. To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

| Code | Output          |
| ---- | --------------- |
| \'   | single quote    |
| \"   | double quote    |
| \\   | backslash       |
| \n   | newline         |
| \r   | carriage return |
| \t   | tab             |
| \b   | word boundary   |
| \f   | form feed       |

_Note that the backslash itself must be escaped in order to display as a backslash._

<br>
<br>

---

## 5. String Immutability

String values are immutable, which means that they cannot be altered once created.
<br

> For example, the following code:

```
let myStr = "Bob";
myStr[0] = "J";
```

<br>

cannot change the value of myStr to `Job`, because the contents of `myStr` cannot be altered.
Note that this does not mean that `myStr` cannot be changed, just that the individual characters of a string literal cannot be changed.

**The only way to change myStr would be to assign it with a new string.**

```
let myStr = "Bob";
myStr = "Job";.
```

<br>
<br>

---

## 6. Bracket notation

<br>

### Find the First Character in a String

Get a character at a specific index within a string.
The counting starts at 0. This is referred to as **Zero-based indexing**.
<br>

For example, the character at `index 0` in the word `Charles` is `C`. So if const `firstName = "Charles"`, you can get the value of the first letter of the string by using `firstName[0]`.

```
const firstName = "Charles";
const firstLetter = firstName[0];
firstLetter would have a value of the string C.
```

<br>
<br>

### Find the Nth Character in a String

You can also use bracket notation to get the character at other positions within a string.
The first character is actually the zeroth character.

```
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
secondLetterOfFirstName would have a value of the string d.
```

<br>
<br>

### Find the Last Character in a String

In order to get the last letter of a string, you can subtract one from the string's length.

For example, if `const firstName = "Ada"`, you can get the value of the last letter of the string by using `firstName[firstName.length - 1]`.

```
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
lastLetter would have a value of the string a.
```

<br>
<br>

### Find the Nth-to-Last Character in a String

You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the `const firstName = "Augusta"` string by `using firstName[firstName.length - 3]`. `thirdToLastLetter `would have a value of the string `s`.

```
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

<br>
<br>

---

## 7. Access Array Data with Indexes

Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array. Like strings, arrays use zero-based indexing, so the first element in an array has an index of 0.
<br>

```
const array = [50, 60, 70];
array[0];
const data = array[1];
array[0] is now 50, and data has the value 60.
```

<br>

**Note**: There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.
<br>
<br>

---

## 8. Modify Array Data With Indexes

Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.
<br>

```
const ourArray = [50, 40, 30];
ourArray[0] = 15;
```

<br>
`ourArray `now has the value `[15, 40, 30]`.

**Note**: There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

<br>
<br>

---

## 9. Access Multi-Dimensional Arrays With Indexes

One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

```js
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

arr[3];
arr[3][0];
arr[3][0][1];
```

<br>
`arr[3]` is `[[10, 11, 12], 13, 14]`, `arr[3][0]` is `[10, 11, 12]`, and `arr[3][0][1]` is `11`.

<br>

**Note**: There shouldn't be any spaces between the array name and the square brackets, like `array [0][0]` and even this `array [0] [0]` is not allowed. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

<br><br>

### Shopping list

<br><br>

Create a shopping list in the variable `myList`. The list should be a multi-dimensional array containing several sub-arrays.
<br><br>

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.
<br>

    ["Chocolate Bar", 15]

<br>

There should be at least 5 sub-arrays in the list.
<br><br>

```js
const myList = [
  ["Dark chocolate", 2],
  ["Bananas", 10],
  ["Kefir", 1],
  ["Bread", 1],
  ["Caffee", 1],
];
```

<br><br>

---

## 10. Array Manipulation

<br>

### push()

Append data to the end of an array.
`.push()` takes one or more parameters.
<br>

```
const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
```

<br>

`arr1 `now has the value `[1, 2, 3, 4]` and `arr2` has the value `["Stimpson", "J", "cat", ["happy", "joy"]]`.

<br>
<br>

### pop()

It is used to pop a value off of the end of an array.
We can store this popped off value by assigning it to a variable. In other words, `.pop()` removes the last element from an array and returns that element.
Any type of entry can be popped off of an array - numbers, strings, even nested arrays.
<br>

```
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
```

<br>

The first `console.log` will display the value `6`, and the second will display the value `[1, 4]`.

<br>
<br>

### shift()

It works just like `.pop()`, except it removes the first element instead of the last.

```
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
```

<br>

`removedFromOurArray` would have a value of the string `Stimpson`, and ourArray would have `["J", ["cat"]]`.

<br>
<br>

### unshift()

`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()`adds the element at the beginning of the array.

```
const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

<br>

After the `shift`, `ourArray` would have the value `["J", "cat"]`. After the `unshift`, `ourArray` would have the value `["Happy", "J", "cat"]`.
<br>
<br>

---

## 11. Increment and decrement

<br>

### Increment

<br>

You can easily increment or add one to a variable with the `++` operator.
<br><br>

`i++;`
<br>

is the equivalent of

`i = i + 1;`
<br>

Note: The entire line becomes `i++;`, eliminating the need for the equal sign.

<br><br>

### Decrement

<br>

You can easily decrement or decrease a variable by one with the `--` operator.
<br><br>

`i--;`

<br>

is the equivalent of

`i = i - 1;`
<br><br>

Note: The entire line becomes `i--;`, eliminating the need for the equal sign.
<br><br>

---

## 12. Remainder

<br>

The remainder operator `%` gives the remainder of the division of two numbers.
<br><br>

    5 % 2 = 1 because
    Math.floor(5 / 2) = 2 (Quotient)
    2 * 2 = 4
    5 - 4 = 1 (Remainder)

<br><br>

**Usage**
<br><br>

In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
<br>

    17 % 2 = 1 (17 is Odd)
    48 % 2 = 0 (48 is Even)

<br><br>

Note: The remainder operator is sometimes **incorrectly referred to as the modulus operator**. It is very similar to modulus, but **does not work properly with negative numbers**.

<br><br>

---

## 13. Literal quotes

<br>

**Escaping Literal Quotes in Strings**

<br>

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: `or` inside of your string?
<br>

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a _backslash_ (`\`) in front of the quote.

    const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

<br><br>

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

    Alan said, "Peter is learning JavaScript".

<br><br>

Use backslashes to assign a string to the `myStr` variable so that if you were to print it to the console, you would see:

    I am a "double quoted" string inside "double quotes".

```
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

console.log(myStr);
```

<br><br>

---

## 14. Return

<br>

We can pass values into a function with _arguments_. You can use a `return` statement to send a value back out of a function.
<br><br>

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

`answer` has the value `8`.

`plusThree` takes an argument for `num` and returns a value equal to `num + 3`.

<br><br>

Create a function `timesFive` that accepts one argument, multiplies it by 5, and returns the new value.
<br>

1: `const timesFive = (a => a * 5);`

2:

    const timesFive = function(a) {
      return a * 5;
    }

<br><br>

### Understanding Undefined Value returned from a Function

<br>

A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.
<br><br>

```js
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` is a function without a `return` statement. The function will change the global sum variable but the returned value of the function is `undefined`.
<br><br>

Create a function `addFive` without any arguments. This function adds 5 to the `sum` variable, but its returned value is `undefined`.
<br>

```js
let sum = 0;

function addThree() {
  sum += 3;
}

function addFive() {
  sum += 5;
}

addThree();
addFive();
```

<br><br>

### Assignment with a Returned Value

<br>

If you'll recall from our discussion of Storing Values with the Assignment Operator, **everything to the right of the equal sign is resolved before the value is assigned**. This means we can take the return value of a function and assign it to a variable.

Assume we have pre-defined a function `sum` which adds two numbers together, then:
<br>

    ourSum = sum(5, 12);

<br><br>

will call the `sum` function, which returns a value of `17` and assigns it to the `ourSum` variable.
<br><br>

Call the `processArg` function with an argument of `7` and assign its return value to the variable `processed`.
<br>

```js
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```

<br><br>

---

## 15. Global scope

<br>

**Global Scope and Functions**
<br>

In JavaScript, scope refers to the **visibility of variables**. Variables which are defined outside of a function block have _Global_ scope. This means, they can be seen everywhere in your JavaScript code.

Variables which are declared without the `let` or `const` keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with `let` or `const`.

Using `let` or `const`, declare a global variable named `myGlobal` outside of any function. Initialize it with a value of `10`.

Inside function `fun1`, assign `5` to `oopsGlobal` **without** using the `let` or `const` keywords.

<br><br>

```js
let myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
```

<br><br>

---

## 16. Local scope

<br>

**Local Scope and Functions**
<br>

Variables which are declared within a function, as well as the function parameters, have _local_ scope. That means they are only visible within that function.

Here is a function `myTest` with a local variable called loc.
<br>

```js
function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);
```

<br><br>

The `myTest()` function call will display the string foo in the console. The `console.log(loc)` line (outside of the `myTest` function) will throw an error, as `loc` is not defined outside of the function.
<br><br>

The editor has two `console.logs` to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside `myLocalScope` and run the tests.
<br>

**Note**: The console will still display `ReferenceError: myVar is not defined`, but this will not cause the tests to fail.

<br><br>

```js
function myLocalScope() {
  // Only change code below this line
  let myVar = "local";
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);
```

<br><br>

---

## 17. Recursion

<br>

### Replace Loops using Recursion

<br>

Recursion is the concept that a function can be expressed in terms of itself. To help understand this, start by thinking about the following task: multiply the first `n` elements of an array to create the product of those elements. Using a `for` loop, you could do this:
<br>

```js
function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
```

<br><br>

However, notice that `multiply(arr, n) == multiply(arr, n - 1) \* arr[n - 1]`. That means you can rewrite `multiply` in terms of itself and never need to use a loop.
<br>

```js
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
```

<br><br>

The recursive version of `multiply` breaks down like this. In the base case, where `n <= 0`, it returns 1. For larger values of `n`, it calls itself, but with `n - 1`. That function call is evaluated in the same way, calling `multiply` again until `n <= 0`. At this point, all the functions can return and the original `multiply` returns the answer.

**Note**: Recursive functions must have a base case when they return without calling the function again (in this example, when `n <= 0`), otherwise they can never finish executing.
<br><br>

Write a recursive function, `sum(arr, n)`, that returns the sum of the first `n` elements of an array `arr`.
<br>

```js
function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}
```

<br><br>

### Use Recursion to Create a Countdown

<br>

You learned how to use recursion to replace a `for` loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with `1` through the number passed to the function.
<br>

There will be a _base case_. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers `1` through `n`. This function will need to accept an argument, `n`, representing the final number. Then it will need to call itself with progressively smaller values of `n` until it reaches `1`. You could write the function as follows:
<br>

```js
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

<br><br>

The value `[1, 2, 3, 4, 5]` will be displayed in the console.

At first, this seems counterintuitive since the value of `n` _decreases_, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where `n` is pushed into the array, `countup(n - 1)` has already been evaluated and returned `[1, 2, ..., n - 1]`.

We have defined a function called `countdown` with one parameter (`n`). The function should use recursion to return an array containing the integers `n` through `1` based on the `n` parameter. If the function is called with a number less than `1`, the function should return an empty array. For example, calling this function with `n = 5` should return the array `[5, 4, 3, 2, 1]`. Your function must use recursion by calling itself and must not use loops of any kind.
<br>

**Solution 1**:
<br>

```js
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
```

**Solution 2**:
<br>

```js
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.splice(0, 0, n);
    return arr;
  }
}
```

**Solution 3 & 3a**:
<br>

```js
function countdown1(n) {
  return n < 1 ? [] : [n].concat(countdown1(n - 1));
}

function countdown2(n) {
  return n < 1 ? [] : [n, ...countdown2(n - 1)];
}
```

<br><br>

---

### Resources

<br>

[freeCodeCamp Basic JS Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
