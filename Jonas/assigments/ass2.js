"use strict";

// FUNCTIONS

  function describeCountry(country, population, capitalCity) {

    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  };

  const Finland = describeCountry("Finland", 6, "Helsinki");

  const Croatia = describeCountry("Croatia", 4, "Zagreb");

  const Germany = describeCountry("Germany", 84, "Berlin");

  console.log(Finland, Croatia, Germany);




  // FUNCTION DECLARATIONS vs. EXPRESSIONS

  let populationCroatia = 4;
  let populationTaiwan = 23;
  let populationArgentina = 45;


  // DECLARATION

  function percentageOfWorld (population) {
    const percentage = population / 7900 * 100;
    return percentage;
  }

  const percentCroatia = percentageOfWorld (populationCroatia);
  const percentArgentina = percentageOfWorld (populationArgentina);
  const percentTaiwan = percentageOfWorld (populationTaiwan);

  console.log(percentCroatia, percentArgentina, percentTaiwan);



  // EXPRESSION

  let populationMongolia = 3.3;
  let populationNorway = 5.4;
  let populationMexico = 130;

  const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
  }

  const percentMongolia = percentageOfWorld2 (populationMongolia);
  const percentNorway = percentageOfWorld2 (populationNorway);
  const percentMexico = percentageOfWorld2 (populationMexico);

  console.log(percentMongolia, percentNorway, percentMexico);



  // ARROW FUNCTIONS

    let populationSwitzerland = 8.7;
    let populationSweden = 10;
    let populationBelgium = 11.6;

    const percentageOfWorld3 = population => population / 7900 * 100;

    const percentSwitzerland = percentageOfWorld3(populationSwitzerland);
    const percentSweden = percentageOfWorld3(populationSweden);
    const percentBelgium = percentageOfWorld3(populationBelgium);

    console.log(percentSwitzerland, percentSweden, percentBelgium);



  // FUNCTIONS CALLING OTHER FUNCTIONS

    // function expression

        const describePopulation = function (country, population) {

        const percentage = percentageOfWorld3 (population);

        return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
      }



    // function declaration

      function describePopulation2 (country, population) {

        const percentage = percentageOfWorld3 (population);

        return `${country} has ${population} million people, which is about ${percentage}% of the world.`;

      } 



    // arrow function 

      const describePopulation3 = (country, population) => {

        const percentage = percentageOfWorld3 (population);

        return `${country} has ${population} million people, which is about ${percentage}% of the world.`;
      }


      const Switzerland = describePopulation ("Switzerland", 8.7);
      const Norway = describePopulation ("Norway", 5.4);
      const Argentina = describePopulation ("Argentina", 45);

      console.log(Switzerland, Norway, Argentina);



// ARRAYS


const populations = [4.8, 1408, 1395, 333];

if(populations.length >= 4) {
  console.log(true);
} else {
  console.log(false);
}


const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];

console.log(percentages);



// ARRAY METHODS




  
  