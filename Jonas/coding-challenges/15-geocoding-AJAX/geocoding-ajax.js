// Coding Challenge #1

/*

In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).

2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉

3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'

4. Chain a .catch method to the end of the promise chain and log errors to the console

5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.

7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

///////////////////////////////////////
// NEW GEOCODING WEBSITES - geocode.xyz does not work

nominatim.org

- it's not fast but it works
- no need to make an account
- docs: https://nominatim.org/release-docs/develop/api/Search/

    fetch(`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${long}&zoom=10`)

    fetch(``)
*/

function whereAmI(lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("There was an error in network response"); // Rejects the promise
      }

      // Unpacks the response object
      return response.json();
    })

    .then(data => {
      // Handle the data received from the API (GeoJSON data)
    // In this case, the API response is a GeoJSON object representing the location data
    // Log the data to the console for further processing
    console.log(data);
    console.log(`You are in ${data.features[0].properties.display_name}`);

    // PART 2 - Render the country using the received data
    // Fetch data from the countries API using the extracted information
    return fetch(`https://nominatim.openstreetmap.org/search?q=${data.country}&format=json`);
    })

    // Handle the response and extract the relevant country information
    .then(response => {
      if(!response.ok) {
        throw new Error("There was an error fetching country data");
      }

      // unpacks the response
      return response.json();
    })
    // from the unpacked response
    .then(countryData => {
      // console.log(countryData);
      console.log(`Country Data:`, countryData[0]);
    })

  .catch(error => {
    console.log('Fetch error:', error);
  })
}

const location1 = whereAmI(52.508, 13.381);
const location2 = whereAmI(19.037, 72.873);
const location3 = whereAmI(-33.933, 18.474);
