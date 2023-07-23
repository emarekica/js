"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
         <article class="country ${className}">
           <img class="country__img" src="${data.flags.png}" />
           <div class="country__data">
             <h3 class="country__name">${data.name.common}</h3>
             <h4 class="country__region">${data.region}</h4>
             <p class="country__row"><span>👫</span>${(
               +data.population / 1000000
             ).toFixed(1)}</p>
             <p class="country__row"><span>🗣️</span>${
               Object.entries(data.languages)[0][1]
             }</p>
             <p class="country__row"><span>💰</span>${
               Object.entries(Object.entries(data.currencies)[0][1])[0][1]
             }</p>
           </div>
         </article>
  `;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// new way: FETCH API
// syntax: fetch(resource, options)
// promises

// GET request
const requestGermany = fetch("https://restcountries.com/v3.1/name/germany");
console.log(requestGermany);

// helper: conversion to JSON, error handling, fetch()
const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    // manually throwing error/rejecting promise
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json(); // for fulfilled promise
  });
};

const getCountryData = function (country) {
  // Country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    "Country not found."
  ).then((data) => {
    renderCountry(data[0]);

    const neighbor = data[0].borders[0];
    console.log(neighbor);

    if (!neighbor)
      throw (
        new Error("No neighbor found.")
    );

    // Country 2
      getJSON(`https://restcountries.com/v3.1/name/${neighbor}`, 'Country not found.');
    })

    .catch(error => {
      console.log(`${error}`);
      // renderError(`Something went wrong: ${error.message}. Try again! `);
    })

    .finally(() => {
      countriesContainer.style.opacity = 1;
    })

};

btn.addEventListener("click", function () {
  getCountryData("portugal");
});

getCountryData("australia");

////////////////////////////////////////////////////////////////
// OLD CODE
// contains FLAT CHAIN OF PROMISES
// const getCountryData = function(country) {

//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)

// .then( response => {
//   console.log(response);

//   // manually throwing error/rejecting promise
//   if(!response.ok) {
//     throw new Error(`Country not found (${response.status})`);
//   }

//   response.json(); // for fulfilled promise
// })

// // returns new promise
// .then(data => {
//   renderCountry(data[0]);

//   // const neighbor = data[0].borders?.[0];
//   const neighbor = "asdfasdf";

//   if(!neighbor) return;

//   // Country 2
//   // Whatever is returned from this promise becomes fulfilled value of this promise
//   return fetch(`https://restcountries.com/v3.1/name/${neighbor}`);
//   })

//   // receives value of the promise of the previous then() method = RESPONSE
//   // response is fulfilled value of a fetch
//   // it becomes body = data stored in the body
//   .then(response => response.json())

//   // handles data stored in the body from previous then()
//   .then(data => renderCountry(data, 'neighbor'))

//   // ERROR handling
//   .catch(error => {
//     console.log(`${error}`);
//     renderError(`Something went wrong: ${error.message}. Try again! `);
//   })

//   // its callback function is called no matter what happens with the promise
//   .finally(() => {
//     countriesContainer.style.opacity = 1;
//   });
// };

// // Call the function whenever the user clicks on a button
// btn.addEventListener('click', function() {
//   getCountryData('portugal');
// });

// getCountryData("asdfasdfasdf");

// [GitHub public APIs](https://github.com/public-apis/public-apis)
