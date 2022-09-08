"use strict";

let userLeft = true;
let userWatchingCatMeme = false;

// CALLBACK

// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: ":(",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User Watching Cat Meme",
//       message: "WebDevSimplified < Cat",
//     });
//   } else {
//     callback("Thumbs up and Subscribe");
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log(`Success: ${message}`);
//   },
//   (error) => {
//     console.log(error.name + " " + error.message);
//   }
// );

// PROMISE

function watchTutorialPromise() {
  // create a promise
  return new Promise((resolve, reject) => {
    // this code was previously calling callbacks
    // "callback" >> "resolve", "errorCallback" >> "reject"
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}

// use the promise

// it takes no parameters
watchTutorialPromise()
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
