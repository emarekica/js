"use strict";

// ------------ setTimeout()

// ordering pizza

// setTimeout(
//   (ingr1, ingr2) =>
//     console.log(`Here is your pizza with ${ingr1} and ${ingr2}.`),
//   3000,
//   "olives",
//   "garlic"
// );
// console.log("Waiting...");

//

const ingredients = ["olives", "garlic"];

const pizzaTimer = setTimeout(
  (ingr1, ingr2) =>
    console.log(`Here is your pizza with ${ingr1} and ${ingr2}.`),
  3000,
  ...ingredients
);
console.log("Waiting...");

// stop timer
if (ingredients.includes("garlic")) clearTimeout(pizzaTimer);

//

// --- setInterval()

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// challenge: build a clock that logs hours, mins & secs to the console
