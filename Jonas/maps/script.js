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

let map, mapEvent;
let workout;

// App architecture
class App {
  // private class field = private instance properties that are going to be present on all instances of the class
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    // this.workouts = [];
    this._getPosition();

    // event handler for submitting form > listen for "submit" event > display marker
    form.addEventListener("submit", this._newWorkout.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
  }

  // GEOLOCATION
  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Could not get your position.");
        }
      );
    }
  }

  _loadMap(position) {
    // position parameters
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    // MAP OBJECT: used for getting coordinates on click
    this.#map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.opentopomap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling click on map
    // Leaflet will call map function with special map event created by Leaflet
    this.#map.on("click", this._showForm.bind(this));
  }

  _showForm(mapEvent) {
    // Handling click on map
    // Leaflet will call map function with special map event created by Leaflet
    this.#mapEvent = mapEvent;

    // show form on click
    form.classList.remove("hidden");

    // focus mouse on input when form is rendered
    inputDistance.focus();
  }

  _toggleElevationField() {
    // toggle cadence/distance on selecting running/cycling
    // select closest parent
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkout(e) {
    e.preventDefault();
    // (...x) returns array
    // every() returns true if condition is true for all elements in the array
    const validInputs = (...inputs) =>
      inputs.every((inp) => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every((inp) => inp > 0);

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value; // '+' at the beginning converts it to a number
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;

    // For running create Running object
    if (type === "running") {
      const cadence = +inputCadence.value;

      // Check if data is valid with GUARD CLAUSE: if the distance is not a number
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert("Inputs have to be positive numbers!");
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // For cycling create Cycling object
    if (type === "cycling") {
      const elevation = +inputElevation.value;

      // Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        return alert("Inputs have to be positive numbers!");
      }

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to Workout array
    this.#workouts.push(workout);

    // Render new workout on the list
    this.renderWorkoutMarker(workout);

    // Hide the form, clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence =
      inputElevation.value =
        "";
  }

  // Render workout on map as a marker
  renderWorkoutMarker(workout) {
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(

        // add a new object
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          // className: "running-popup",
          className: `${type}-popup`,
        })
      )
      .setPopupContent(workout.distance )
      .openPopup();
  }
}

const app = new App();

// parent class, takes in data common to both workouts: coordinates, distance & duration
class Workout {
  // date when object is created
  date = new Date();

  // usually library takes care of this class field
  id = (Date.now + "").slice(-10); // returns timestamp

  constructor(coords, distance, duration) {
    this.coords = coords; // [latitude, longitude]
    this.distance = distance; // km
    this.duration = duration; // min
  }
}

class Running extends Workout {
  constructor(cords, distance, duration, cadence) {
    super(cords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  constructor(cords, distance, duration, elevationGain) {
    super(cords, distance, duration, elevationGain);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// testing classes

const run1 = new Running([39, -12], 5.2, 24, 178);
const cycling1 = new Cycling([39, -12], 27, 95, 523);

console.log(run1, cycling1);

///////////////////////////////////////////
// library for map: https://leafletjs.com/