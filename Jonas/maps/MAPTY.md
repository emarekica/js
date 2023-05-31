# MAPTY

1. [Use Geolocation API](#1-use-geolocation-api)
2. [Display map marker](#2-display-map-marker)
3. [Render input form](#3-render-input-form)

<br><hr /><br>

## 1. Use Geolocation API

<br>

https://leafletjs.com/

<br>

```js
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    // success callback
    // receives position parameter
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      // leaflet library
      const map = L.map("map").setView(coords, 13);

      L.tileLayer("https://tile.opentopomap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
    },

    // error callback
    function () {
      alert("Could not get your position.");
    }
  );
}
```

<br><br>

### Choose map layout

<br>

- change tiles (google it)

- [example](https://openmaptiles.org/)

<br><hr /><br>

## 2. Display map marker

<br>

- bind event handler: whenever user clicks on the map, pin is displayed on the map

- to know exact GPS coordinates the user clicked on, you can't put `addEventListener()` on the whole map because you wouldn't get the exact coordinates, only map knows them > use `on()` method available on [Leaflet](https://leafletjs.com/reference.html#featuregroup)

- in the `originalEvent` object, under `latlng` you can find coordinates

- take those coordinates and add a marker at that point

- [docs for methods on UI layers](https://leafletjs.com/reference.html#marker)
  <br>

```js
// EVENT LISTENER
// Leaflet will call map function with special map event created by Leaflet
map.on("click", function (mapEvent) {
  console.log(mapEvent);
  const { lat, lng } = mapEvent.latlng;

  // coords = center of the map
  // L.marker(coords)

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
```

<br><hr /><br>

## 3. Render input form: `submit` event

<br>

Use `focus()` method to place focus where you want on the webpage.
<br>

The `HTMLElement.focus()` method sets focus on the specified element, if it can be focused. The focused element is the element that will receive keyboard and similar events by default.
<br>

```js
const inputDistance = document.querySelector(".form__input--distance");

inputDistance.focus();
```

<br><br>

`ENTER` key button triggers `submit` event on the `form`.

Trying to submit a form that does not pass validation triggers an `invalid` event. In this case, the validation prevents form submission, and thus there is no `submit` event.
<br>

```js
form.addEventListener("submit", function (e) {
  e.preventDefault();
  ...
});
```

<br><br>

### Clearing input fields: `element.value`

<br>

- after the form is submitted, clear all input fields > do it in the submit event listener

- clear only the `.value` property, not the entire element
  <br>

```js
inputDistance.value =
  inputDistance.value =
  inputDuration.value =
  inputElevation.value =
    "";
```

<br><br>

### Toggle cadence/distance on selecting running/cycling: `change` event

<br>

Event triggered on changing the value of `select` element: `change` event
<br>

The change event is fired for <input>, <select>, and <textarea> elements when the user modifies the element's value. Unlike the `input` event, the change event is not necessarily fired for each alteration to an element's value.

<br>

`element.closest()` is inverse `querySelector` = selects parent

<br>

Toggle hidden class.
This way, it makes it always visible.
<br>

```js
inputType.addEventListener("change", function () {
  // select closest parent
  inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
  inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
});
```

<br><hr /><br>

### Delegating events
<br>

When you have no element to attach your event listener to, delegate the event to the closest parent.

- Use method `closest()`.

- Read the `id` from that element and set the event listener to it.

**reading an id from an element**: `element.dataset.id`;
<br>

`const workout = this.#workouts.find(work => work.id === workoutElement.dataset.id);`
<br><br>
