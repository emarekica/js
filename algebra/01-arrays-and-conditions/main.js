"use strict";


// flag = 0 = false = not a prime number
// flag = 1 = true = a prime number

function countPrimeNumbers (from, to) {

  // looping from - to
  for (let i = from; i <= to; i++) {
      let flag = 1;

      // looping through 2 to user input number to teste wether the nuber is divisible by any other number than 1 and itself
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
              flag = 0;
              break;
          }
      }

      // if number greater than 1 and not divisible by other numbers
      if (i > 1 && flag == 1) {
          console.log(i);
      }
  }
}

console.log(countPrimeNumbers(0, 20));