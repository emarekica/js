"use strict";

fetch("https://reqres.in/api/users", {
  // creating new user
  method: "POST",

  // tell fetch you'll be passing in JSON
  headers: {
    "Content-Type": "application/json",
  },

  // data for the new user goes inside of the body of the Response object passed as JSON with JSON.stringify()
  body: JSON.stringify({
    name: "User 1 ",
  }),
})
  // converts inaccessible data from the Response into JSON
  .then((response) => {
    // check if the response is OK
    if (response.ok) {
      console.log("Successful response.");
    } else {
      console.log("Response not successful.");
    }

    return response.json();
  })

  .then((data) => console.log(data))
  .catch((error) => console.log("error"));
