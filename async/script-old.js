'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// old school: XML http request
// events + callbacks

const getCountryData = function(country, className = '') {
  const request = new XMLHttpRequest();

  // URL to which to make AJAX call
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  // sends request, fetches data in background, emits 'load' event once done
  request.send();

  // listens for the event, converts JSON to object
  request.addEventListener('load', function() {
    // const data = JSON.parse(this.responseText)[0];
    const [data] = JSON.parse(this.responseText);

    console.log(data);

    const html = `
      <article class="country ${className}>
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${Object.entries(data.languages)[0][1]}</p>
          <p class="country__row"><span>💰</span>${Object.entries(Object.entries(data.currencies)[0][1])[0][1]}</p>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('croatia');
getCountryData('germany');