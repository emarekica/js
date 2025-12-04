
// Math operators

  const now = 2026;
  const ageMarija = now - 1985;
  const ageMatija = now - 1987;

  console.log(ageMarija, ageMatija);

  // creating 2 values at the same time
  console.log(ageMarija * 2, ageMatija / 2, 2 ** 3);


// concatenation of strings

  const firstName = "Marija";
  const lastName = "Emarekica";
  
  console.log(firstName + " " + lastName);


// typeof is also an operator

  console.log(typeof ageMarija);



// assigment operators
    // we used let because we are changing the variable by reassigning it the value 

  let x = 10 + 5;     // 15
  x += 10             // x = x + 10 tj. 15 + 10 = 25
  x *= 4;             // x = x * 4  tj. 25 + 4 = 100
  x++;                // x = x + 1  tj. 100 + 1 = 101
  x--;                // x = x - 1; tj. 101 - 1 = 100

  console.log(x);



// Comparisson operators -> for boolean values
    // <, >, <=, >=
    // result: true or false


  console.log(ageMarija > ageMatija);       // true 
  console.log(now - 1985 > now - 1987);     // all in one step


  console.log(ageMatija >= 39); 

  const isFullAge = ageMatija >= 39; 



// OPERATOR PRECEDENCE
  