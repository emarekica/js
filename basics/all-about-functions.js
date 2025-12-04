// calling one function inside of another

    const calcAge = function (birthYear) {
      return 2021 - birthYear;
    }

// arrow function

    const yearsUntilRetirement = (birthYear, firstName) => {
      const age = 2021 - birthYear;
      const retirement = 65 - age;

      return `${firstName} retires in ${retirement} years.`;
    }


// converted to function expression

    const yearsUntilRetirement2 = function (birthYear, firstName) {
      const age = calcAge(birthYear);
      const retirement = 65 - age;

      return `${firstName} will retire in ${retirement} years.`;
    }


// converted to function declaration

    function yearsUntilRetirement3 (birthYear, firstName) {
      const age = calcAge(birthYear);
      const retirement = 65 - age;

      // taking a decision based on retirement value

      if (retirement > 0) {
        console.log(`$firstName will retire in ${returement} years`);
        return retirement;
      } else {
        console.log(`${firstName} has already retired.`);
        return -1;
      }
    }

    console.log(yearsUntilRetirement3(1985, "Marija"));
    console.log(yearsUntilRetirement3(1930, "Mislav"));