"use strict";

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// App architecture
class App {
  // private class field = private instance properties that are going to be present on all instances of the class = class fields
  #map;
  #mapEvent;
  #mapZoomLevel = 13;
  #workouts = [];

  constructor() {
    // Get user's position
    this._getPosition();

    // code executed when the app loads >> Get data from localStorage
     this._getLocalStorage();

    // EVENT HANDLERS
    // event handler for submitting form > listen for "submit" event > display marker
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);

    // when there is no element to add event listener to, delegate event: add it to the parent element
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

  }

  // GEOLOCATION
  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const coords = [latitude, longitude];

    // MAP OBJECT: used for getting coordinates on click
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    // map layout
    L.tileLayer("https://tile.opentopomap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling click on map
    // Leaflet will call map function with special map event created by Leaflet
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });

    // render workout markers
    this.#workouts.forEach(work => this._renderWorkoutMarker(work));
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

  _hideForm() {
    // empty inputs
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value =
      '';

    form.style.display = "none";
    form.classList.add("hidden");

    // return display back to grid so you can insert another workout
    setTimeout(() => (form.style.display = "grid"), 1000);

  }

  _toggleElevationField() {
    // toggle cadence/distance on selecting running/cycling
    // select closest parent
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    // (...x) returns array
    // every() returns true if condition is true for all elements in the array
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from the form
    const type = inputType.value;
    const distance = +inputDistance.value; // '+' at the beginning converts it to a number
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // create Running object
    if (type === 'running') {
      const cadence = +inputCadence.value;

      // Check if data is valid with GUARD CLAUSE: if the distance is not a number
      if (!validInputs(distance, duration, cadence) ||
          !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // For cycling create Cycling object
      if (type === 'cycling') {
        const elevation = +inputElevation.value;

      // Check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to Workout array
    // #not accessible from outside
    this.#workouts.push(workout);

    // Render workout on map as marker
    // _accessible from the outside
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide the form, clear input fields
    this._hideForm();

    // set localStorage to all workouts
    this._setLocalStorage();
  }

  // Render workout on map as a marker
  _renderWorkoutMarker(workout) {
      L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(

      // add a new object
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: `${workout.type}-popup`,
      })
    )
    .setPopupContent(
      `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
    )
    .openPopup();
  }

  _renderWorkout(workout) {

    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
      `;

      if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;

    form.insertAdjacentHTML('afterend', html);
    }

    // match the object you're looking for
    // closest is opposite of query selector
    _moveToPopup(e) {
      const workoutElement = e.target.closest(".workout");

      // read closest element's ID and select it out of workouts array
      if(!workoutElement) return;

      // get workout data out of workouts array
      const workout = this.#workouts.find(work => work.id === workoutElement.dataset.id);

      // take the coordinates from that element and move the map to that position
      // setView method is from Leaflet: setView(<LatLng> center, <Number> zoom, <Zoom/pan options> options object)
      this.#map.setView(workout.coords, this.#mapZoomLevel, {
        animate: true,
        pan: {
          duration: 1,
        },
      });

      // using the public interface
      // workout.click();
    }

    _setLocalStorage() {
      // using localStorage API that the browser provides
      // setItem(keyName, keyValue)
      // convert object (workouts) to string with JSON.stringify()
      localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    };

    _getLocalStorage() {
      // convert the string back to object with JSON.parse()
       const data = JSON.parse(localStorage.getItem('workouts'));

      // check if there is data in localStorage
      if(!data) return;

      // sets workouts array to the data before, data from "data" is now in the workouts array, which is initially empty at the app load
      this.#workouts = data;

      this.#workouts.forEach(work => this._renderWorkout(work));
    };

    // delete workouts
    reset() {
      localStorage.removeItem('workouts');
      location.reload();
    };
  }

// parent class, takes in data common to both workouts: coordinates, distance & duration
class Workout {
  // date when object is created
  date = new Date();

  // usually library takes care of this class field
  // id = (Date.now + "").slice(-10); // returns timestamp
  id = (Date.now() + '').slice(-10); // returns timestamp

  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [latitude, longitude]
    this.distance = distance; // km
    this.duration = duration; // min
  }

  _setDescription() {
    const months = [
      // prettier-ignore
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",
    ];

    // workout type first character to upper case" and workout type starting from position one (the rest of the letters)
    // months[] retrieves any value from "months" array
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(cords, distance, duration, cadence) {
    super(cords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';

  constructor(cords, distance, duration, elevationGain) {
    super(cords, distance, duration, elevationGain);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
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

const app = new App();

///////////////////////////////////////////
// library for map: https://leafletjs.com/
