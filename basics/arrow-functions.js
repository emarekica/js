"use strict";

// function expression

const calcAge2 = function (birthYear) {
  return 2021 - birthYear; 
}

// ARROW FUNCTION


  // simple
      // no {}
      // "return" is implicit

      const calcAge = birthYear => 2021 - birthYear;
      const age = calcAge(1985);
      console.log(age);


  // complex

      const yearsUntilRetirement = (birthYear, firstName) => {
        const age = 2021 - birthYear;
        const retirement = 65 - age;

        //return retirement;

        return `${firstName} retires in ${retirement} years.`;
      }

      console.log(yearsUntilRetirement(1985, "Marija"));
      console.log(yearsUntilRetirement(1987, "Matija"));
      
