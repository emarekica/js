'use strict';

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
         <article class="country ${className}">
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
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function() {

  // error handling
  try {
    // geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // reversed geocoding API
    const geoResponse = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // error handling
    if(!geoResponse.ok) throw(new Error('Problem getting location data.'));
    const dataGeo = geoResponse.json();


    // country data

    // the same:
    // 1. get the promise fulfilled value
    // fetch(`https://nominatim.openstreetmap.org/search?q=${country}&format=json`).then(result => console.log(result));
    // 2. get the JSON (returns promise)
    // response.json();

    // await stops code execution at this point until promise fulfilled
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${dataGeo.country}&format=json`); // 1.

    if(!geoResponse.ok) throw(new Error('Problem getting country.'));
    const data = await response.json(); // 2.

    renderCountry(data[0]);

    // fulfilled value of the promise
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  }
  catch(error) {
    console.log(error.message);
    renderError(`Something went wrong: ${error.message}`);

    // Rethrow the error
    // Reject promise returned from async function
    throw error;
  }
}

console.log('1: Will get location');

// const city = whereAmI();
// console.log(city);

// use then() to get fulfilled value of the promise
// whereAmI()
// .then(city => console.log(`2: ${city}`))
// .catch(err => console.error(`2: ${err.message}`))

// always executed
// .finally(() => console.log('3: Finished getting location'));

// IIFE
(async function() {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`)
  } catch(err) {
    console.error(`2: ${err.message}`);
  }

  console.log('3: Finished getting location')
})();


// ERROR HANDLING
// simple example

// try {
//   let y = 1;
//   const x = 2;

//   x = 3;
// } catch(error) {
//   alert(error.message);
// }
