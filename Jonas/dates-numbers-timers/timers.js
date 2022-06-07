'use strict';

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

// const ingredients = ['olives', 'garlic'];

// const pizzaTimer = setTimeout(
//   (ingr1, ingr2) =>
//     console.log(`Here is your pizza with ${ingr1} and ${ingr2}.`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting...');

// // stop timer
// if (ingredients.includes('garlic')) clearTimeout(pizzaTimer);

//

// --- setInterval()

// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// --------------------------- challenge:
// build a clock that logs hours, mins & secs to the console

// const now = new Date();
// const locale = navigator.language;
// const options = {
//   second: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
// };

// setInterval(() => {
//   console.log(new Intl.DateTimeFormat(locale, options).format(now));
// }, 1000);

// setInterval(function () {
//   const date = new Date();
//   const hour = date.getHours();
//   const minute = date.getMinutes();
//   const sec = date.getSeconds();
//   console.log(`${hour}:${minute}:${sec} H:M:S`);
// }, 1000);

// setInterval(function () {
//   console.log(
//     new Intl.DateTimeFormat('en-US', {
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric',
//       day: 'numeric',
//       weekday: 'long',
//       year: 'numeric',
//       month: 'numeric',
//     }).format(new Date())
//   );
// }, 1000);
