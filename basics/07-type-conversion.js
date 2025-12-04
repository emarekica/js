
// TYPE CONVERSION (manual)


    // we have input year from input element on the webpade
    // they usually come as strings

    
      const inputYear = "1985"; 

        // converting string to a number > use built-in NUMBER function
        // it converts it only once, not for the rest of the code

          console.log(Number(inputYear), inputYear );


      console.log(inputYear + 18);  



    // converting into a number something that is impossible to convert

        const myName = "emarekica";
        console.log(Number("emarekica"));   // > NaN

        // NaN is actually a number, but an invalid one

            console.log(typeof NaN);


    // converting a number into a string

        console.log(String(23), 23);



// TYPE COERCION (automatic)


  // "+" operator converts a number to a string

    console.log("I am " + 23 + " years old.");

  

  // "-", "*" operators convert strings to numbers

    console.log("23" - "10" - 3);
    console.log("23" * "2");
    console.log("24" / "2");

  
  // logical operators

    console.log('23' > '18');



let n = "1" + 1;      // gives string "11"
n = n - 1;            // gives number 10

console.log(n);