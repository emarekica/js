'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function(position) {
      // position parameters
       const { latitude } = position.coords;
       const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [ latitude, longitude ];

      // MAP OBJECT
      // used for getting coordinates on click
      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);


      // EVENT LISTENER
      // Leaflet will call map function with special map event created by Leaflet
      map.on("click", function(mapEvent) {
        console.log(mapEvent);
        const { lat, lng} = mapEvent.latlng;

        // coords = center of the map
        // L.marker(coords)

        L.marker([lat, lng])
            .addTo(map)
            .bindPopup(
              // add a new object
              L.popup({ maxWidth: 250, minWidth: 100, autoClose: false, closeOnClick: false, className: "running-popup" })
            )
            .setPopupContent("Workout")
            .openPopup();
      })
    },

    // error callback
    function() {
      alert("Could not get your position.")
    }
  );
}


// library for map: https://leafletjs.com/
