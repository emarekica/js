"use strict";

// create an array of list element strings
// each list element's text should be one of the array elements from the `failure` property on the `result` object, with class attribute value `text-warning`
// `makeList` function should return the array of list item strings: <li class="text-warning">no-var</li>

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};

// solution 1

function makeList(arr) {
  // Only change code below this line
  const failureItems = arr.map(
    (element) => `<li class="text-warning">${element}</li>`
  );
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

// solution 2

function makeList2(arr) {
  // Only change code below this line
  const failureItems = [];

  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList2 = makeList2(result.failure);
