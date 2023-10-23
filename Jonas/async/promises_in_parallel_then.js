const getJSON = function (url, errorMsg = "Something went wrong") {
  // Use the fetch function to make an HTTP request and return a promise
  return fetch(url)
    .then((response) => {
      // Check if the response is successful, and if not, throw an error
      if (!response.ok) {
        throw new Error(`${errorMsg} (${response.status})`);
      }
      // Parse the response as JSON and return the promise
      return response.json();
    });
};

const get3Countries = function (c1, c2, c3) {
  // Create an array of promises using the getJSON function
  const promises = [
    getJSON(`https://restcountries.com/v3.1/name/${c1}`),
    getJSON(`https://restcountries.com/v3.1/name/${c2}`),
    getJSON(`https://restcountries.com/v3.1/name/${c3}`)
  ];

  // Use Promise.all to wait for all promises to resolve
  Promise.all(promises)
    .then((results) => {
      // Process the results after all promises have resolved
      // Access the data you need and perform any necessary operations
      // Log the results to the console or handle them as needed
    })
    .catch((err) => {
      // Handle any errors that may occur during promise execution
      // Log or handle the error as appropriate
    });
};

// Call the get3Countries function with the desired arguments
get3Countries('croatia', 'spain', 'germany');
