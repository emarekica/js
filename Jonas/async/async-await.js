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
    if(!geoResponse.ok) throw(new Error('There was a problem with geo response.'));

    const dataGeo = geoResponse.json();
    if(!dataGeo.ok) throw(new Error('There was a problem with data geo.'));

    console.log(dataGeo);

    // country data

    // the same:
    // 1. get the promise fulfilled value
    // fetch(`https://nominatim.openstreetmap.org/search?q=${country}&format=json`).then(result => console.log(result));
    // 2. get the JSON (returns promise)
    // response.json();

    // await stops code execution at this point until promise fulfilled
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${dataGeo.country}&format=json`); // 1.
    const data = await response.json(); // 2.

    renderCountry(data[0]);
  }
  catch(error) {
    console.log(error.message);
    renderError('Something went wrong: ${error.message}');
  }
}

whereAmI();
console.log('first ');


// ERROR HANDLING
// simple example

// try {
//   let y = 1;
//   const x = 2;

//   x = 3;
// } catch(error) {
//   alert(error.message);
// }