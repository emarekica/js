
// COMPARISSON OPERATORS

// === 
  // strict equality operator
  // does not perform type coercion
  // returns boolean (true) only if both sides are exactly the same
  // not to be confused with assignment operator

const age = "18";

if (age === 18) console.log("You just became an adult. (strict)");  // true

const age2 = 19;

if (age === 18) console.log("You just became an adult.");  // false



// == 
  // loose equality operator
  // does type coercion

  console.log("18" == 18);

  if (age == 18) console.log("You just became an adult. (loose)");  // true



// PROMPT function
  // simple way of getting a value from any webpage


   // value that we put in the form that pops-up will be stored in this variable
   // prompt() function stores a string by default
   // you have to wrap the prompt() funtion into a Number() function to convert the string into a number
   
      let favourite = Number(prompt("What's your favourite number?"));

      console.log(favourite);
      console.log(typeof favourite);

      if(favourite == 45) {  // "45" == 45
        console.log("Cool! 45 is an amazing number!");
      }

  if(favourite === 45) {  // this one doesn't work because === doesn't do type coercion
    console.log("45 is my favourite number, too!");
  }



// adding more conditions to "IF" statement
  // "ELSE IF" block

  if(favourite === 45) {
    console.log("Cool! That is my favourite number, too")
  } else if (favourite === 9) {
    console.log("9 is also a cool number")
  } else if (favourite === 7) {
    console.log("I like that number, too.")
  } else {
    console.log("Number is not 45 nor 9.");
  }



// !== (strict version)
  // different operator
  // != (loose version), don't use it
  
  
    if(favourite !== 45) console.log("Why not 45?");