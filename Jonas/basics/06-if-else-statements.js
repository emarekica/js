// IF - ELSE is a CONTROL STRUCTURE
// gives us control over which block of code will be executed


// program checks if the person is old enough for driver's licence 

let age =  15;
const isOldEnough = age >= 18;


// not a common way of writing

  if(isOldEnough) {
    console.log("Sara can start the driving lessons. 💅🏻");
  }

// more common

  if (age >= 18) {
    console.log("Sara can start the driving lessons. 💅🏻");
  } else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. She needs to wait another ${yearsLeft} years.`); 
  }



// creating variable conditionally

  const birthYear = 2015;
  let century;               // declare it and leave empty so it can be read outside the codeblock

  if (birthYear <= 2000) {
    century = 20;
  } else {
    century = 21;
  };

  console.log(century);