# ES6

<br>

1. [Destructuring](#1-destructuring)
2. [Template literal](#2-template-literal)
3. [Object literal](#3-object-literal)
4. [Import](#4-import)
5. [Export](#5-export)
6. [Module script](#6-module-script)
7. [Class syntax](#7-class-syntax)
8. [Promises](#8-promises)
9. [getters and setters](#9-getters-and-setters)

<br><br>

---

<br>

## 1. Dectructuring

<br>

### Swapping values

<br>

Use destructuring assignment to swap the values of `a` and `b` so that `a` receives the value stored in `b`, and `b` receives the value stored in `a`.
<br><br>

```js
let a = 6,
  b = 8;

[a, b] = [b, a];
```

<br><br>

Use destructuring assignment with the `rest` parameter to perform an effective `Array.prototype.slice()` so that `arr` is a sub-array of the original array `source` with the first two elements omitted.
<br><br>

```js
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [a, b, ...arr] = list;

  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```

<br><br>

Use destructuring assignment within the argument to the function `half` to send only `max` and `min` inside the function.

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;
```

<br><br>

---

<br>

## 2. Template literal

<br>

Use template literal syntax with backticks to create an array of list element (`li`) strings. Each list element's text should be one of the array elements from the `failure` property on the `result` object and have a class attribute with the value `text-warning`. The `makeList` function should return the array of list item strings.

Use an iterator method (any kind of loop) to get the desired output (shown below).
<br><br>

    [
      '<li class="text-warning">no-var</li>',
      '<li class="text-warning">var-on-top</li>',
      '<li class="text-warning">linebreak</li>'
    ]

<br><br>

**Solution 1**
<br><br>

```js
"use strict";

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(
    (element) => `<li class="text-warning">${element}</li>`
  );
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

<br><br>

**Solution 2**
<br><br>

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

<br><br>

---

<br>

## 3. Object litral

<br>

**Write Concise Object Literal Declarations Using Object Property Shorthand**
<br>

ES6 adds some nice support for easily defining object literals.

Consider the following code:
<br><br>

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});
```

<br><br>

`getMousePosition` is a simple function that returns an object containing two properties. ES6 provides the syntactic sugar to eliminate the redundancy of having to write `x: x`. You can simply write `x` once, and it will be converted to `x: x` (or something equivalent) under the hood. Here is the same function from above rewritten to use this new syntax:
<br><br>

    const getMousePosition = (x, y) => ({ x, y });

<br><br>

Use object property shorthand with object literals to create and return an object with name, age and gender properties.
<br><br>

```js
const createPerson = (name, age, gender) => ({ name, age, gender });
```

<br><br>

---

<br>

## 4. Import

<br>

### Reuse JavaScript Code Using import

<br>

`import` allows you to choose which parts of a file or module to load. In the previous lesson, the examples exported add from the `math_functions.js` file. Here's how you can import it to use in another file:
<br>

    import { add } from './math_functions.js';

<br><br>

Here, `import` will find add in `math_functions.js`, import just that function for you to use, and ignore the rest. The `./` tells the import to look for the `math_functions.js` file in the same folder as the current file. The relative file path (`./`) and file extension (`.js`) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:
<br>

    import { add, subtract } from './math_functions.js';

<br><br>

Add the appropriate import statement that will allow the current file to use the `uppercaseString` and `lowercaseString` functions you exported in the previous lesson. These functions are in a file called `string_functions.js`, which is in the same directory as the current file.
<br><br>

```js
import { uppercaseString, lowercaseString } from "./string_functions.js";

uppercaseString("hello");
lowercaseString("WORLD!");
```

<br><br>

### Use `*` to Import Everything from a File

Suppose you have a file and you wish to import all of its contents into the current file. This can be done with the import `*` as syntax. Here's an example where the contents of a file named `math_functions.js` are imported into a file in the same directory:
<br><br>

    import * as myMathModule from "./math_functions.js";

<br><br>

The above import statement will create an object called `myMathModule`. This is just a variable name, you can name it anything. The object will contain all of the exports from `math_functions.js` in it, so you can access the functions like you would any other object property. Here's how you can use the add and subtract functions that were imported:
<br><br>

    myMathModule.add(2,3);
    myMathModule.subtract(5,3);

<br><br>

The code in this file requires the contents of the file: `string_functions.js`, that is in the same directory as the current file. Use the import `*` as syntax to import everything from the file into an object called `stringFunctions`.
<br><br>

```js
import * as stringFunctions from "./string_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

<br><br>

### Import a Default Export

<br>

In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the `math_functions.js` file. Here is how to import it:
<br><br>

    import add from "./math_functions.js";

<br><br>

The syntax differs in one key place. The imported value, add, is not surrounded by curly braces (`{}`). add here is simply a variable name for whatever the default export of the `math_functions.js` file is. You can use any name here when importing a default.
<br><br>

In the following code, import the default export from the `math_functions.js` file, found in the same directory as this file. Give the import the name subtract.
<br><br>

```js
import subtract from "./math_functions.js";

subtract(7, 4);
```

<br><br>

---

<br>

## 5. Export

<br>

### Use export to Share a Code Block

<br>

**Named export**
<br>

Imagine a file called `math_functions.js` that contains several functions related to mathematical operations. One of them is stored in a variable, add, that takes in two numbers and returns their `sum`. You want to use this function in several different JavaScript files. In order to share it with these other files, you first need to export it.
<br><br>

```js
export const add = (x, y) => {
  return x + y;
};
```

<br><br>

The above is a common way to export a single function, but you can achieve the same thing like this:
<br>

```js
const add = (x, y) => {
  return x + y;
};

export { add };
```

<br><br>

When you export a variable or function, you can import it in another file and use it without having to rewrite the code. You can export multiple things by repeating the first example for each thing you want to export, or by placing them all in the export statement of the second example, like this:
<br><br>

    export { add, subtract };

<br><br>

There are two string-related functions in the editor. Export both of them using the method of your choice.
<br><br>

```js
export const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { lowercaseString };
```

<br><br>

### Create an Export Fallback with export default

<br>

**Export default**

In the export lesson, you learned about the syntax referred to as a named export. This allowed you to make multiple functions and variables available for use in other files.

There is another export syntax you need to know, known as export default. Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback `*` value for a file or module.
<br>

`*` something or someone to turn or return to, esp. for help or as an alternative;  designating something kept in reserve or as an alternative:
<br>

Below are examples using export default:
<br><br>

```js
export default function add(x, y) {
  return x + y;
}

export default function(x, y) {
  return x + y;
}
```

<br><br>

The first is a named function, and the second is an anonymous function.

Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use export default with var, let, or const

<br><br>

The following function should be the fallback value for the module. Please add the necessary code to do so.
<br><br>

```js
export default function subtract(x, y) {
  return x - y;
}
```

<br><br>

---

<br>

## 6. Module Script

<br><br>
JavaScript started with a small role to play on an otherwise mostly HTML web. Today, it’s huge, and some websites are built almost entirely with JavaScript. In order to make JavaScript more modular, clean, and maintainable; ES6 introduced a way to easily share code among JavaScript files. This involves exporting parts of a file for use in one or more other files, and importing the parts you need, where you need them. In order to take advantage of this functionality, you need to create a script in your HTML document with a type of module. Here’s an example:
<br><br>

    <script type="module" src="filename.js"></script>

<br><br>

A script that uses this module type can now use the import and export features you will learn about in the upcoming challenges.

<br><br>

Add a script to the HTML document of type module and give it the source file of `index.js`.
<br><br>

    <html>
      <body>
        <script type="module" src="index.js"></script>
      </body>
    </html>

<br><br>

---

<br>

## 7. Class syntax

<br>

**Use class Syntax to Define a Constructor Function**
<br>

ES6 provides a new syntax to create objects, using the class keyword.

It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.

In ES5, we usually define a constructor function and use the new keyword to instantiate an object.
<br><br>

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
The class syntax simply replaces the constructor function creation:

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

<br><br>

It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
<br>

**Note**: `UpperCamelCase` should be used by convention for ES6 class names, as in `SpaceShuttle` used above.

The constructor method is a special method for creating and initializing an object created with a class. You will learn more about it in the Object Oriented Programming section of the JavaScript Algorithms And Data Structures Certification.

<br><br>

Use the class keyword and write a constructor to create the `Vegetable` class.

The `Vegetable` class allows you to create a vegetable object with a property name that gets passed to the constructor.
<br><br>

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'
```

<br><br>

---

<br>

## 8. Promises

<br>

### Create a JavaScript Promise

<br>

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The syntax looks like this:
<br><br>

    const myPromise = new Promise((resolve, reject) => {

    });

<br><br>

Create a new promise called `makeServerRequest`. Pass in a function with resolve and reject parameters to the constructor.
<br><br>

    const makeServerRequest = new Promise((resolve, reject) => {

    })

<br><br>

### Complete a Promise with resolve and reject

<br>

A promise has three states: _pending_, _fulfilled_, and _rejected_. The promise you created in the last challenge is forever stuck in the pending state because you did not add a way to complete the promise. The `resolve` and `reject` parameters given to the promise argument are used to do this. `resolve` is used when you want your promise to succeed, and `reject` is used when you want it to fail. These are methods that take an argument, as seen below.
<br><br>

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

<br><br>

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.

<br><br>

Make the promise handle `success` and `failure`. If `responseFromServer` is `true`, call the resolve method to successfully complete the promise. Pass `resolve` a string with the value `We got the data`. If `responseFromServer` is `false`, use the `reject` method instead and pass it the string: `Data not received`.
<br><br>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});
```

<br><br>

### Handle a Fulfilled Promise with then

<br>

Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:
<br><br>

    myPromise.then(result => {

    });

<br>

`result` comes from the argument given to the resolve method.

<br><br>

Add the then method to your promise. Use result as the parameter of its callback function and log result to the console.
<br><br>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => console.log(result));
```

<br><br>

### Handle a Rejected Promise with catch

<br>

`catch` is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:
<br><br>

    myPromise.catch(error => {

    });

<br><br>

`error` is the argument passed in to the reject method.

<br><br>

Add the `catch` method to your promise. Use `error` as the parameter of its callback function and log `error` to the console.
<br><br>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
  }
});

makeServerRequest.then((result) => {
  console.log(result);
});

makeServerRequest.catch((error) => {
  console.log(error);
});
```

<br><br>

---

<br>

## 9. getters and setters

<br>

### Use getters and setters to Control Access to an Object

<br>

You can obtain values from an object and set the value of a property within an object.
These are classically called **getters** and **setters**.

**Getter** functions are meant to simply return (g`et) the value of an object's private variable to the user without the user directly accessing the private variable.

**Setter** functions are meant to modify (`set`) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely.
<br><br>

```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book("anonymous");
console.log(novel.writer);
novel.writer = "newAuthor";
console.log(novel.writer);
```

<br><br>

The console would display the strings `anonymous` and `newAuthor`.

Notice the syntax used to invoke the getter and setter. They do not even look like functions. Getters and setters are important because they hide internal implementation details.

**Note**: It is convention to precede the name of a private variable with an underscore (`_`). However, the practice itself does not make a variable private.
<br><br>

Use the class keyword to create a `Thermostat` class. The constructor accepts a `Fahrenheit` temperature.

In the class, create a getter to obtain the temperature in `Celsius` and a setter to set the temperature in `Celsius`.

Remember that `C = 5/9 * (F - 32)` and `F = C * 9.0 / 5 + 32`, where `F` is the value of temperature in `Fahrenheit`, and `C` is the value of the same temperature in `Celsius`.

**Note**: When you implement this, you will track the temperature inside the class in one scale, either `Fahrenheit` or `Celsius`.
<br><br>

This is the power of a getter and a setter. You are creating an API for another user, who can get the correct result regardless of which one you track.
In other words, you are abstracting implementation details from the user.
<br><br>

```js
class Thermostat {
  constructor(fahrenheit) {
    this._fahrenheit = fahrenheit;
  }

  // getter
  get temperature() {
    return (this._fahrenheit - 32) * (5 / 9);
  }

  // setter
  set temperature(celsius) {
    this._fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
```

<br><br>

---

<br>

### Resources

<br>

[freeCodeCamp ES6 JS Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
