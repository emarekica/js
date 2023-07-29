# GEO COORDINATES AND ASYNC CODE

## Base URL breakdown

`https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${long}&zoom=10
`

<br>

`https://nominatim.openstreetmap.org/reverse`
<br>

This is the base URL of the Nominatim service, which is a tool for searching OpenStreetMap data.
<br>

`?format=geojson`
<br>
This is a **query parameter in the URL**.
It specifies the format in which we want the response from the API. In this case, we are requesting the response in the `GeoJSON` format. `GeoJSON` is a widely used data format for representing geographic features with JSON (JavaScript Object Notation).
<br><br>

`&lat=${lat}` & `&lon=${long}`
<br>

This is another query parameter, a placeholder for the latitude & longitude value of the GPS coordinates that will be replaced with the actual value at runtime.
<br><br>

`&lon=${long}`
<br><br>

`&zoom=10`
<br>

This is yet another query parameter. It defines the **level of detail** (zoom level) for the map.
The higher the zoom level, the more detailed the map will be.
<br><br>

This URL is used to make a reverse geocoding request to the Nominatim service. It takes the latitude and longitude values as input and requests information about the location corresponding to those coordinates in the GeoJSON format. The response from the API will contain details about the location, such as city, country, and other relevant information.

For example, if you were to replace ${lat} with the latitude value 52.508 and ${long} with the longitude value 13.381, the final URL would look like:

```js
https://nominatim.openstreetmap.org/reverse?format=geojson&lat=52.508&lon=13.381&zoom=10
```
<br>

And when you make a request to this URL, the API will respond with information about the location corresponding to the given latitude and longitude.
<br><br>

## API formats
<br>

The `?format=geojson` part of the URL is specific to this particular API (Nominatim) and is used to specify the response format of the data. It tells the API to return the geocoded location information in the GeoJSON format, which is a standard format for encoding geographic data in JSON.

In general, APIs may provide different formats for their responses, and the way to specify the desired response format may vary from one API to another. Some APIs might use query parameters like this one, while others might use different methods, such as specifying the format in the request headers or through other query parameters.



Nominatim API documentation: https://nominatim.org/release-docs/develop/api/Search/

Popular APIs:

- Google Maps API
- OpenWeatherMap API
- GitHub API

In the documentation, you should look for sections related to:

- the API endpoints
- request parameters
- response formats.
<br><br>

## fetch() code structure
<br>

```js
// Define latitude and longitude values for the GPS coordinates
const lat = 52.508;
const lng = 13.381;

// Construct the API URL with the provided latitude and longitude
const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`;

// Perform a fetch request to the API URL
fetch(apiUrl)
  .then(response => {

    // Check if the network response is ok (status code 200-299)
    if (!response.ok) {

      // If not ok, throw an error to be caught in the catch block
      throw new Error('Network response was not ok.');
    }

    // Return the JSON parsed response to the next then() block
    return response.json();
  })

  .then(data => {
    // Handle the data received from the API (GeoJSON data)
    // In this case, the API response is a GeoJSON object representing the location data
    // Log the data to the console for further processing
    console.log(data);
  })

  .catch(error => {
    // Handle any errors that occurred during the fetch
    // This catch block will catch errors from both the fetch request and the response handling
    // Log the error to the console for debugging or error reporting
    console.error('Fetch error:', error);
  });
```
<br><br>

## `then()` VS `catch()` block
<br>

The first `then()` block and the catch block in the code serve different purposes and handle different types of errors:
<br><br>

First `then()` Block:

In the first `then()` block, the code checks if the network response is not okay by evaluating the `response.ok` property. If the response status code is not in the range of **200-299** (which typically indicates a successful response), it means there was an error with the network request. In this case, the code throws an error using the throw statement. Throwing an error in this `then()` block effectively signals that something went wrong with the fetch request, and the Promise chain will skip directly to the nearest `catch()` block.
<br><br>

`catch()` Block:

The `catch()` block is executed if any error occurs in the entire Promise chain, including errors thrown in any of the preceding `then()` blocks. If an error is thrown in any of the `then()` blocks, the Promise chain will skip the subsequent `then()` blocks and go directly to the nearest catch block.
<br><br>

In summary:

The first `then()` block checks for a network error and throws an error if the response is not okay, signaling a fetch-related error.

The `catch()` block handles any error that occurs during the entire Promise chain, whether it's a network error (thrown in the first `then()` block) or any other error thrown in any of the `then()` blocks.

Using this structure allows you to have a specific error handling mechanism for fetch-related errors (in the first `then()` block) and a more general error handling approach for any other errors that might occur during the Promise chain (in the catch block). This way, you can differentiate between different types of errors and handle them appropriately.

<br><br>

## `response`, `data`, `error`
<br>

Those are variables representing different aspects of the fetch process.
<br><br>

`response`

Represents the **response received from the server after making the fetch request**.

It is an object containing various properties and methods related to the response. For example, it includes properties like `status`, `statusText`, `ok`, `headers`, etc., which provide information about the response status, headers, and other details.
<br>

See [properties and methods](https://developer.mozilla.org/en-US/docs/Web/API/Response).
<br><br>

`data`

Represents the **parsed JSON data obtained from the API response**.
After calling `response.json()`, a Promise is returned that resolves to the actual data extracted from the response.

In this case, data will contain the parsed JSON object received from the API, which may include information about the location, as requested in the URL.

It is a result of parsing the JSON response using `response.json()`, which converts the JSON data into a JS object, so you can access its properties using dot notation or bracket notation.
<br><br>

`error`

The error variable **represents an error object when an error occurs during the fetch process**.

If there's an issue with the network, the `fetch` function will reject the Promise, and the execution will jump to the `catch` block.
In the catch block, you can access the error object, and it will **contain information about the error that occurred**.

See [properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error).

<br><br>

- `response` and `error` are JS objects provided by [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

- `data` is the parsed JavaScript object obtained from the JSON data received from the server












