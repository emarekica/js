"use strict";


// simple function
  // we use it when there is a block of code we need to reuse over and over again
  // doesn't accept parameters
  // doesn't return anything

function logger() {
  console.log("My name is Mari.");
}

// calling / invoking / running the function
// you can reuse the function in the code as many times you need
// it produces "undefined", which we don't capture in variable nor return it

  logger();
  logger();
  logger();




// more complete function
    // used more often

    // this is a generic function (juice maker) that works for any number of apples and oranges

      function fruitProcessor(apples, oranges) {    // parametres

        // the food processor produces a juice out of apples and oranges that we give it

        const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
        return juice;
      }

      const appleJuice = fruitProcessor(5, 0);
      console.log(appleJuice);

      // you can log the value of function's parameter without storing it to a variable

        console.log(fruitProcessor(5, 0));


    // reusing the function

      const appleOrangeJuice = fruitProcessor(2, 4);
      console.log(appleOrangeJuice);


    

      // TYPES OF FUNCTIONS

// FUNCTION DECLARATION

      // function that calculates age based on the birth year


      // my function

        function myAge (currentYear, birthYear) {
          const age = currentYear - birthYear;
          return age; 
        }

        const myCurrentAge = myAge (2021, 1985);
        console.log(myCurrentAge);
        
        console.log(myAge(2021, 1985));


      // example
        const age1 = calcAge1(1991);

        function calcAge1 (birthYear) {
          /* const age = 2021 - birthYear;
          return age; */

          return 2021 - birthYear; 
        }

/*         const age1 = calcAge1(1991);
        console.log(age1);
 */


// FUNCTION EXPRESSION

        // we store a function in a variable, which then becomes a function

    const calcAge2 = function (birthYear) {
      return 2021 - birthYear; 
    }
    
    const age2 = calcAge2(1991);
    console.log(age1, age2); 

    