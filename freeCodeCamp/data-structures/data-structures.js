"use strict";

// ------------------------ for loop

function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // compare any element of the arra to the "elem" with indexOf(); -1 indicates it doesn't exist
    // arr[i] accesses the VALUE of the element on the "i" position
    if (arr[i].indexOf(elem) === -1) {
      // if a match is NOT found then newArr have that entire subarray added.
      return;
    }
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
