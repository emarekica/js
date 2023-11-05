const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${errorMsg} (${response.status})`);
      }
      return response.json();
    });
};

// Promise.race()
// receives array of promises
// returns a promise

(async function() {
  const response = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/spain`),
    getJSON(`https://restcountries.com/v3.1/name/france`),
    getJSON(`https://restcountries.com/v3.1/name/italy`)
  ]);

  console.log(response[0]);
})();

// example: Promise.race() against timeout

const timeout = function(sec) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error ('Request took too long'));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/germany`),
  timeout(1),
])
  .then(res => console.log(response[0]))
  .catch(error => console.log(error));




////////////////////////////////////////////////


// if user has bad internet connection, fetch() might take too long to be useful

// allSettled
// any