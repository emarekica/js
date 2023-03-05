# MAPTY

1. [Use Geolocation API](#1-use-geolocation-api)
2. [Display map marker](#2-display-map-marker)

<br><hr /><br>

## 1. Use Geolocation API

<br>

https://leafletjs.com/

<br>

```js
if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    // success callback
    // receives position parameter
    function(position) {
       const { latitude } = position.coords;
       const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [ latitude, longitude ];

      // leaflet library
      const map = L.map('map').setView(coords, 13);

      L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker(coords).addTo(map)
          .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
          .openPopup();
    },

    // error callback
    function() {
      alert("Could not get your position.")
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
```

<br><hr /><br>