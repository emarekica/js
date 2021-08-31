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

const neighbours = ["Italy", "Slovenia", "Hungary", "Serbia", "BiH", "Crna Gora"];

    // adding Utopia to the end

      neighbours.push("Utopia");
      console.log(neighbours);

    // removing Utopia

      const popped = neighbours.pop("Utopia");
      console.log(neighbours);
      console.log(popped);

    // conditional

      if (neighbours.includes("Germany")) {
        console.log("It is a central European country.");
      } else {
        console.log("It is probably not a central European country.");
      }


      // shorter

      if (!neighbours.includes("Germany")) {
        console.log("It is probably not a central European country.");
      }


    // changing the name of one of countries 

        // splice()

      console.log(neighbours.indexOf("BiH"));
      neighbours.splice(4, 1, "Bosnia and Herzegovina");
              // the first parameter stands for the index number to be removed, and the second parameter is how many items should be removed

      console.log(neighbours);


      // another way

      neighbours [neighbours.includes("Slovenia")] = "Republic of Slovenia";
      console.log(neighbours);



// OBJECTS

      // Intro

      const myCountry = {
        countryName: "Croatia",
        hasCoast: true,
        mountains: [ "Učka", "Velebit", "Biokovo", "Dinara"],

        capital: "Zagreb",
        language: "Croatian",
        population: 4,
        neighbours: [ "Italy", "Slovenia", "Hungary", "Serbia", "BiH", "Montenegro" ],

// Methods

        describe: function() {
          console.log(`${this.countryName} has ${this.population} million Croatian-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
        },

        checkIsland: function() {
          this.isIsland = this.neighbours.length === 0 ? true : false;
        }

      };


      // Dot and Bracket Notation
/*   
        console.log(`${myCountry.countryName} has ${myCountry.population} million Croatian-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);
 */

        // increasing/decreasing population by 2 mil

          myCountry.population += 2;
          console.log(myCountry);

          myCountry["population"] -= 2;
          console.log(myCountry);


      myCountry.describe();
      myCountry.checkIsland();

      console.log(myCountry);


  