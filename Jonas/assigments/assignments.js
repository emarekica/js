
// 1 - VALUES, VARIABLES

    /* let country = "Croatia";
    let continent = "Europe";
    let populationCroatia =  4079528;

    console.log(country);
    console.log(continent);
    console.log(population); */


// 2 - DATA TYPES

let isIsland = false;

    /* const country = "Croatia";
    let population = 4079528;
    const language = "Croatian";
    isIsland = "Lastovo";

    populationCroatia = "4235493";
    isIsland = "Vis";

    console.log("My home country is", country, "."); 
    console.log("The number of population in 2021. was", populationCroatia, "."); 
    console.log("We speak", language, "language."); 
    console.log("The most beautiful island in Croatia is", isIsland, "."); 

    populationCroatia = "4235493";
    isIsland = "Vis"; */


// 3 - LET, CONST, VAR


    const country = "Croatia";
    const continent = "Europe";
    var populationCroatia = 4081651;

    const language = "Croatian";


    console.log(country);
    console.log(continent);
    console.log(populationCroatia);


    populationCroatia = 567893;

    console.log(populationCroatia);



// 4 - BASIC OPERATORS


  console.log("If Croatia split in half, half of the population would be " + populationCroatia / 2 + ".");

  populationCroatia++;
  console.log(populationCroatia);

  var populationFinland = 6000000;
  console.log(populationFinland < populationCroatia);

  var populationAverage = 33000000;
  console.log(populationAverage > populationCroatia); 

  let description = country + " is in " + continent + ", and its " + populationCroatia + " people speak " + language + " language.";

  console.log(description);


// 5 - STRINGS & TEMPLATE LITERAL
  
  let description2 = `${country} is in ${continent}. and its ${populationCroatia} people speak ${language} language.`;

  console.log(description2);



// 6 - IF - ELSE 

  if (populationCroatia > 33000000) {
    console.log(`Croatia's population is above the average of ${populationAverage}.`);
  } else {
    console.log(`Croatia's population is ${(populationAverage - populationCroatia)} below the average.`);
  }



// 7 - TYPE CONVERSION and COERCION

console.log('9' - '5');                            // 4
console.log('19' - '13' + '17');                   // "617"
console.log('19' - '13' + 17);                     // 23
console.log('123' < 57);                           // false
console.log(5 + 6 + '4' + 9 - 4 - 2);              // 1143



// 8 - EQUALITY OPERATORS

/* numNeighbours = Number(prompt("How many neighbour countries does your country have?")); */

numNeighbours = 0;

if (numNeighbours === 1) {
  console.log("Only 1 border!")
} else if (numNeighbours > 1) {
  console.log("More than 1 border")
} else { 
  console.log("No borders.");
}


// 9 - BOOLEANS

  const language2 = "English";
  let population = 55;
  let island = false;

  if (language2 === "English" && population < 50 && !island) {
    console.log('You should live in Croatia.');
  } else {
    console.log('Croatia does not meet your criteria.');
  }



// 10 - SWITCH STATEMENT


  switch(language) {
    case "Chinese":
    case "Mandarin":
      console.log("MOST number of native speakers!");
      break;
    case "Spanish":
      console.log("2nd place in number of native speakers");
      break;
    case "English":
      console.log("3rd place");
      break;
    case "Hindi":
      console.log("Number 4");
      break;
    case "Arabic":
      console.log("3rd place");
      break;

    default:
      console.log("Great language too :D");
  }




// 11 - TERNARY OPERATOR

const populationNumber = population > 33000000000 ? "Croatia's population is above average." : "Croatia's population is below average.";

console.log(populationNumber);
