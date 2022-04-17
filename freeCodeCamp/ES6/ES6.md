[Destructuring](#-destructuring)
[Template literal](#-template-literal)

<br><br>

---

<br>

## Dectructuring

<br>

## Swapping values

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

## Template literal

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

### Resources

<br>

[freeCodeCamp ES6 JS Course](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
