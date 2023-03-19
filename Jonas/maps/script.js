"use strict";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

let map;
let mapEvent;

// GEOLOCATION
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // position parameters
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      // MAP OBJECT: used for getting coordinates on click
      map = L.map("map").setView(coords, 13);

      L.tileLayer("https://tile.opentopomap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // EVENT LISTENER
      // Leaflet will call map function with special map event created by Leaflet
      map.on("click", function (mapEvnt) {
        mapEvent = mapEvnt;

        // show form on click
        form.classList.remove("hidden");

        // focus mouse on input when form is rendered
        inputDistance.focus();
      });
    },

    function () {
      alert("Could not get your position.");
    }
  );
}

// event handler for submitting form > listen for "submit" event > display marker
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Clearing input fields



  // Display marker
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;
  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      // add a new object
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "running-popup",
      })
    )
    .setPopupContent("Workout")
    .openPopup();
});


// toggle cadence/distance on selecting running/cycling
inputType.addEventListener('change', function() {
  // select closest parent
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
});


// library for map: https://leafletjs.com/

