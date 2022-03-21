// 2 ways of writing conditionals: IF - statement, SWITCH - statement

 /* conditional operator is like writing if-statement in one line 
 
    Has 3 parts: 
      . condition
      . IF
      . ELSE
 
 
 */




  const age = 17;
  age >= 18 ? console.log("I am allowed to drink wine") : console.log("I am NOT allowed to drink wine.");

  // age >= 18 ? "wine" : "water"; // this whole operator is an expression, not a statement
 
     const drink = age >= 18 ? "wine" : "water";  // we are storing this operator/expression in a variable
     console.log(drink);


  // we can do the same with an IF-ELSE statement, but it would be a bit longer and different

    let drink2;

    if (age >= 18) {
      drink2 = "wine";
    } else {
      drink2 = "water";
    }

    console.log(drink2);





// ternary operator can be used in TEMPLATE LITERAL

    // it is an expression so it can be used to determine value of the drink based on the age

    console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);