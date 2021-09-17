/* for (var x = 1; x <= 100; x++) {
  var message = "";

  if (x % 3 === 0) {
    message += "fizz";
  }
  if (x % 5 === 0) {
    message += "buzz";
  }
  
  if (message === "") {
    console.log(x);
  } else {
    console.log(message);
  }
}  */


// moje

for ( var x = 1; x <= 100; x++) {
  if (x % 3 === 0) {
        console.log("fizz");
      } else if (x % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(x);
      }
}


// solution: 

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);   // ispisuje ili broj ili riječ
}

// The OR operator (||) returns true if one or both expressions are true, otherwise it returns false.