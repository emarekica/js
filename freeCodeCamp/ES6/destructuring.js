"use strict";

// assign values: a >> b, b >> a

let a = 6,
  b = 8;

[a, b] = [b, a];

//
// make `arr` an sub-array of the original array `source` with the first two elements omitted

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
  const [a, b, ...arr] = list;

  return arr;
}

const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

//
// send only `max` and `min` inside the function

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0;
