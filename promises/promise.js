"use strict";

// PROMISE
// created with constructor
let promise = new Promise((resolve, reject) => {
  // define the callback function - what the promise actually is
  let a = 1 + 1;

  // it it is successful, resolve with arbitrary message
  if (a == 2) {
    resolve("SUCCESS");
  }
  // if it fails, reject with arbitrary message
  else {
    reject("FAILED");
  }
});

// INTERACTION WITH A PROMISE
// consumers
// what to do when a promise succeeds / fails

promise

  // called when promise is resolved
  .then((resolveMessage) => {
    console.log(`This is a message in "then": ${resolveMessage}.`);
  })

  // called when promise rejected / fails
  .catch((rejectMessage) => {
    console.log(`This is a message in the "catch": ${rejectMessage}`);
  });
