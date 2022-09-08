"use strict";

const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 recorded.");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 recorded.");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 recorded.");
});

// --- Record all videos in parallel

// waits for everything to complete
Promise.all([
  // array of primises we want to run
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree,
]).then((messages) => {
  console.log(messages);
});

// output:
// (3) ['Video 1 recorded.', 'Video 2 recorded.', 'Video 3 recorded.']

//

// --- Do something as soon as one promise is completed

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

// output: Video 1 recorded.
