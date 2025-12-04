// function whereAmI(lat, lng) {
//   fetch(
//     `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
//   )
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("There was an error in network response"); // Rejects the promise
//       }

//       // Unpacks the response object
//       return response.json();
//     })

//     // Handle the data received from the API (GeoJSON data)
//     .then(data => {
//     console.log(data);
//     console.log(`You are in ${data.features[0].properties.display_name}`);

//     // Render the country using the received data
//     return fetch(`https://nominatim.openstreetmap.org/search?q=${data.country}&format=json`);
//     })

//     // Handle the response and extract the relevant country information
//     .then(response => {
//       if(!response.ok) {
//         throw new Error("There was an error fetching country data");
//       }

//       // unpacks the response
//       return response.json();
//     })
//     // from the unpacked response
//     .then(countryData => {
//       console.log(`Country Data:`, countryData[0]);
//     })

//   .catch(error => {
//     console.log('Fetch error:', error);
//   })
// }

// const location1 = whereAmI(52.508, 13.381);

//////////////////////////////////////////////////////////
// Promisifying Geolocation

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );

    // resolve & reject get called automatically with the position & error, no need to pass it
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((position) => console.log(position));

//////////////////////////////////////////////////////////
// App will tell you where you are based on the Geolocation of device
// no need for latitude/longitude

const whereAmIGeolocation = function () {
  getPosition()
    .then((position) => {
      const { latitude: lat, longitude: lng } = position.coords;

      // creates & returns new promise
      return fetch(
        `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("There was an error in network response"); // Rejects the promise
      }

      // Unpacks the response object
      return response.json();
    })

    // Handle the data received from the API (GeoJSON data)
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.features[0].properties.display_name}`);

      // Render the country using the received data
      return fetch(
        `https://nominatim.openstreetmap.org/search?q=${data.country}&format=json`
      );
    })

    // Handle the response and extract the relevant country information
    .then((response) => {
      if (!response.ok) {
        throw new Error("There was an error fetching country data");
      }

      // unpacks the response
      return response.json();
    })
    // from the unpacked response
    .then((countryData) => {
      console.log(`Country Data:`, countryData[0]);
    })

    .catch((error) => {
      console.log("Fetch error:", error);
    });
};

const btn = document.querySelector(".btn-country");
btn.addEventListener("click", whereAmIGeolocation);

const location2 = whereAmIGeolocation(52.508, 13.381);
