1. [Uninitialized variables](#1-uninitialized-variables)
2. [Finding a Remainder](#2-finding-a-remainder)
3. [Compound Assignment](#3-compound-assignment)
4. [](#4-)
5. [](#5-)
6. [](#6-)
7. [](#7-)
8. [](#8-)
9. [](#9-)
10. [](#10-)
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

## 4. 