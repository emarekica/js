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
11. [](#11-)
12. [](#12-)
13. [](#13-)

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

## Access Array Data with Indexes

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

## Modify Array Data With Indexes

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

## Access Multi-Dimensional Arrays With Indexes

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

<br>
<br>

---

## Array Manipulation

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

##
