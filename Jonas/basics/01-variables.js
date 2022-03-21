/* // VARIABLES
    // "box" with lable in which to store the value
    // with its identifier, you can reference the variable a lot of times in the code


let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Marija");
console.log(23);


// variable naming conventions
  // usually in camelCase

  let firstName = "Marija";
  let first = "Matilde";
  let firstNamePerson = "camelCase";
  let first_name_person = "RubyPopular";

  let jonas_matida = "JM";
  let $function = 27;
  let name = "Jonas";    // allowed, but not recomendable, better firstName


  // use lowercase, --> UPPERCASE is reserved for constants we know will never change

    let person = "Jonas"; 
    let PI = 3.1415;           // CONSTANT



  // make sure your variables are DESCRIPTIVE
    // it should be easy to understand what the variable is holding just by reading the name of the variable

    let myFirstJob = "programmer";
    let myCurrentJob = "teacher";


 



// VAR, CONST LET

  // LET 

    // to declare variables that can change later (during the execution of the program
    // called: REASSIGNING the value to the variable or MUTATING the variable
      
        let age3 = 35;
         age3 = 36;  


    // to declare empty variable 

         let year2;
         year2 = 1985;
       

  // CONST 

      /* 
        - to declare variables that are not supposed to change at any point in the future
        - you can't change its value
        - creates IMMUTABLE VARIABLE 
        - you may not declate an empty variable

      */
      

          const birthYear = 1985;
          // birthYear = 1886;       --> gives you TypeError  

          // const job;              --> gives SyntaxError: missing Initializer


   /*   GOOD PRACTICE
   
       - use CONST as default
       - use LET if you are sure the variable will need to change at some point in the future

       --> HAVE AS LITTLE VARIABLE MUTATIONS AS POSSIBLE

   */



  // VAR

      // should be avoided
      // know how it works for legacy reasons
      // mutation allowed

        var job2 = "designer";
        job2 = "manager";



// declaring variables is not mandatory 

    // BAD IDEA: it doesn't create a variable in a global scope but rather JS will create a property on a global object

    lastName = "Schmedtmann";
    console.log(lastName);