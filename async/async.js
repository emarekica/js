"use strict";

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}.`);

    if (location === "Google") {
      resolve("Google says 'Hi!'.");
    } else {
      reject("We can only talk Google.");
    }
  });
}

// will always resolve
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response...");
    resolve(`Extra information + ${response}`);
  });
}

// calling these functions using promises
// makeRequest("Google")
//   .then((response) => {
//     console.log("Response received.");

//     // needs to be returned so it can be used in the next chained event
//     return processRequest(response);
//   })
//   // gets the response from processRequest
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })

//   .catch((error) => console.log(error));

// output:
// Making request to Google.
// Response received.
// Processing response...
// Extra information + Google says 'Hi!'.

//

// with async/await

// holds all async code
async function doWork() {
  try {
    // will return the same thing as resolve() section of the Promise
    const response = await makeRequest("Google");

    // we will see this as soon as await finishes executing
    console.log("Response received.");

    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork();

// Output:
// Making request to Google.
// Response received.
// Processing response...
// Extra information + Google says 'Hi!'.
