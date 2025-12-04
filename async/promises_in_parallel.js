// get data for countries at the same time
// order that the data arrives doesn't matter

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    // manually throwing error/rejecting promise
    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }

    return response.json();
  });
};

// all of this can also be done with 'then()' instead of async/await
const get3Countries = async function(c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
    // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

    // helper function on Promise constructor
    // takes in array of promises >> returns a new promise >> runs all promises at the same time
    const fullData = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3 }`)
    ]);

    // loop over the fullData and take data that you want
    console.log(fullData.map(element => element[0].capital[0]));



  } catch (err) {
    console.error(err);
  }
}

get3Countries('croatia', 'spain', 'germany');
