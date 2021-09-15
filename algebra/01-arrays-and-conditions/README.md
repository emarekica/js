# Exercise #1 - Arrays and Conditions

You're a student who has just finished taking a math exam. Something about a prime number question from the exam is bothering you, so you're going to have your computer figure out the answer for you.


Write a function named `countPrimeNumbers` accepting two parameters:

* `from` - the number from which to begin counting prime numbers.
* `to` - the number up to which to end counting prime numbers (inclusive).

The function requirements are:

1. The function must count the number of prime numbers present between values `from` and `to` (including `to`).
2. The function must return the prime number count.

**Example:**

Input: 

```js
countPrimeNumbers(10, 20);
```

Output:

```
4
```

**Tips:**

* [Explore loops on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
* [Explore conditionals on MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [Explore prime numbers](https://en.wikipedia.org/wiki/Prime_number)

* Solve the problem using different types of loops
* Test your function by using different arguments
* Remember to check if the function is being called with the correct arguments


*******

1. What is a prime number?

    = a number that is divisible only by itself and 1

    A prime number is an integer greater than one and can be divisible by only itself and one i.e it has only two factors.

    Only 2 is an even prime number; all the rest prime numbers are odd numbers.
    Except 2 and 3, all the other prime numbers can be expressed in the general form as    6n + 1 or 6n - 1, where n is the natural number.
    

    1-100:

    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.


2. How to calculate prime numbers?

  To prove whether a number is a prime number, first try dividing it by 2, and see if you get a whole number. If you do, it can't be a prime number. If you don't get a whole number, next try dividing it by prime numbers: 3, 5, 7, 11 (9 is divisible by 3) and so on, always dividing by a prime number.

  ## factorization method

    1. Find the factors of the given number (factors are the number which completely divides the given number).
    2. Check the total number of factors of that number.
    3. If the total number of factors is more than two, it is not a prime number but a composite number.

  ## general formulas

    6n + 1
    6n - 1

    Two consecutive numbers which are natural numbers and prime numbers are 2 and 3. Apart from 2 and 3, every prime number can be written in the form of 6n + 1 or 6n – 1, where n is a natural number.

      6(1) – 1 = 5
      6(1) + 1 = 7
      6(2) – 1 = 11
      6(2) + 1 = 13
      ...


    @: https://www.vedantu.com/maths/how-to-find-prime-numbers

    


3. How to check for a prime number in JS?

    function isPrime(num) { // returns boolean
      if (num <= 1) return false; // negatives
      if (num % 2 == 0 && num > 2) return false; // even numbers
      }
      return true;
    }
    console.log(isPrime(121));


      or

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
      console.log(isPrimeNumber(2));  // returns true
      console.log(isPrimeNumber(9));  // returns false
      console.log(isPrimeNumber(11)); // returns true

      or 

      function test_prime(n) {

        if (n===1) return false;
        else if(n === 2) return true;
        
        else {
          for(var x = 2; x < n; x++) {
            if(n % x === 0) {
              return false;
            }
          }
          return true;  
        }
      }

      console.log(test_prime(37));


      
https://www.programiz.com/javascript/examples/prime-number

// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}