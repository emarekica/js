# SHUFFLE

`gameGrid.sort(() => 0.5 - Math.random());`


-- `Math.random` returns a random number between 0 and 1

-- the function is not called anywhere because it’s actually an argument to the sort method
-- the function in its entirety is passed as an argument
-- `gameGrid.sort()` is called
  

  ### sort()

-- `sort()` method without any arguments sorts values alphabetically
-- If you pass a function, you’re telling the method how to sort when it compares two values
-- When comparing numerical values, the difference between 2 values is either less than 0, equal to 0, or greater than equal
-- if the result is < 0, then the first value comes first >  **this method provides a random comparison value** 

-- `sort()` sorts the elements in an array based on the first character in the element
-- will alphabetize an array of strings that are all either uppercase or lowercase, based on the first unicode character
-- 123456789 > UPPERCASE > lowercase 


  **sorting numbers**

  -- create a comparison function as an argument

1. If you want ascending numbers:

  ```js
  var arr = [1, 5, 12, 41, 25, 7, 2];

  function numAscending(a,b) {
      return a - b;
  }
  console.log(arr.sort(numAscending));
  // returns [ 1, 12, 2, 25, 41, 5, 7 ]
  ```

  Function compares each pair of values:

  `
  a - b = negative --> a, b
  a - b = positive --> b, a
  `

2. If you want descending numbers:

  ```js
  function numDescending(a,b) {
    return b - a;
  }
  console.log(arr.sort(numDescending));
  // returns [ 41, 25, 12, 7, 5, 2, 1 ] 
  ```
  `
  a - b = negative --> b, a
  a - b = positive --> a, b
  `

 3. If you want randomized order:

    ```js
    function numRandomized() {
      return 0,5 - Math.random();
    }
    console.log(arr.sort(numRandomized));
    // returns random order like [ 5, 2, 12, 7, 41, 25, 1 ]
    ```

    `Math.random` returns a random number between 0 and 1.

     `
      0,5 - 0 = 0,5
      0,5 - 0,2 = 0,3
      0,5 - 0,5 = 0
      0,5 - 0,7 = -0,2
      0,5 - 1 = -0,5
      `

   **Because the function returns a number that is equally likely to be either negative or positive it will cause a random order.**



**sort()**

- [array.sort()](http://www.javascriptkit.com/javatutors/arraysort.shtml)
- [Digital ocean - array methods](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-mutator-methods)


**shufle**
  
- [How does SHUFFLE work](https://www.codecademy.com/forum_questions/4f609c49e0bd2b0003011313)
-  [How does Math.random work to sort an array?](https://forum.freecodecamp.org/t/how-does-math-random-work-to-sort-an-array/151540)




[JS sorting algorithms](https://khan4019.github.io/front-end-Interview-Questions/sort.html)

---