# what to use

  # conditionals

    if - else
    if - else if - else

  # comparison operators

    booleans 

      false, undefined, null, 0, NaN, or an empty string ('') - falsey

      everything else - truthy
        you can use a variable name on its own
        to test whether it is true

  # flag variable

    - a variable you define to have one value until some condition is true or false in which case you change the variable's value
    - it usually acts as a boolean variable indicating a condition to be either true or false
      - where the result toggles between 0 (False) and 1 (True)
    - used as a signal in programming to let the program know that a certain condition has met
    - it is same in every programming language 
    


## Questions to ask: 

1. WHAT IS A PRIME NUMBER? (prosti broj)

    = a number that is divisible only by itself and 1

    = integer greater than one and can be divisible by only itself and one i.e it has only two factors

    Only 2 is an even prime number; all the rest prime numbers are odd numbers.

    1-100:

    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.




2. HOW TO CALCULATE PRIME NUMBERS?

  To prove whether a number is a prime number, first try dividing it by 2, and see if you get a whole number.
    If you do, it can't be a prime number.
    If you don't get a whole number, next try dividing it by prime numbers: 3, 5, 7, 11 (9 is divisible by 3) and so on, always dividing by a prime number.

  ## factorization method

    1. Find the factors of the given number (factors are the number which completely divides the given number).
    2. Check the total number of factors of that number.
    3. If the total number of factors is more than two, it is not a prime number but a composite number.

  ## general formulas

    Except 2 and 3, all the other prime numbers can be expressed in the general form as 6n + 1 or 6n - 1, where n is the natural number.

    6n + 1
    6n - 1

    Two consecutive numbers which are natural numbers and prime numbers are 2 and 3. Apart from 2 and 3, every prime number can be written in the form of 6n + 1 or 6n – 1, where n is a natural number.

      6(1) – 1 = 5
      6(1) + 1 = 7
      6(2) – 1 = 11
      6(2) + 1 = 13
      ...

    @: https://www.vedantu.com/maths/how-to-find-prime-numbers


3. HOW TO CHECK FOR A PRIME NUMBER IN JS?

      function isPrimeNumber(n) {
        for (var i = 2; i < n; i++) { 
                  // i will always be less than the parameter so the condition below will never allow parameter to be divisible by itself ex. (7 % 7 = 0) which would return true
          if(n % i === 0) return false;
                  // when parameter is divisible by i, it's not a prime number so return false
        }
        return n > 1;
                  // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
      }

      console.log(isPrimeNumber(1));  // returns false



      // short

      function primeNumber(n) {
        for (var i = 2; i < n; i++) {
          if(n % i === 0) {
              return false;
          } else if (n > 1) {
              return true;
          }
        }
      }   

      console.log(primeNumber(3));



@: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-8.php

        function test_prime(n) {
          if (n===1) return false;
          else if(n === 2) return true;
          else {
            for(var x = 2; x < n; x++) {
              if(n % x === 0) return false;
          }
          return true;  
          }
        }  

      console.log(test_prime(37));



@: https://www.programiz.com/javascript/examples/prime-number

  // program to check if a number is prime or not


    let number = 71;
    let isPrime = true;

    if(number === 1) {
      console.log(("Neither prime nor composite"));
    } else if(number > 1) {  
        for(let i = 2; i < number; i++) {
          if(number % i === 0) {
            isPrime = false;
            break;
          }
        }
    } else if(isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }

    console.log(isPrime);



4. HOW TO COUNT NUMBERS BETWEEN TWO GIVEN VALUES/ARGUMENTS?

=  Print All Prime Numbers in an Interval

@: https://www.programiz.com/javascript/examples/prime-number-intervals



// take input from the user
  const lowerNumber = parseInt(prompt('Enter lower number: '));
  const higherNumber = parseInt(prompt('Enter higher number: '));

  console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

// looping from lowerNumber to higherNumber
for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}


  function GetNumCount() {
    var total = 0;
    var num1 = 1;
    var num2 = 10;
    var array = [1, 4, 6, 7, 8, 6];

    for (var a = 0; a < array.length; a++) {
      if (array[a] >= num1 && array[a] <= num2) {
        total++;
    }
  }