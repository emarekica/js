"use strict";

/* console.log("Lifting weights repetition 1.");
console.log("Lifting weights repetition 2.");
console.log("Lifting weights repetition 3.");
console.log("Lifting weights repetition 4.");
console.log("Lifting weights repetition 5.");
console.log("Lifting weights repetition 6.");
console.log("Lifting weights repetition 7.");
console.log("Lifting weights repetition 8.");
console.log("Lifting weights repetition 9.");
console.log("Lifting weights repetition 10.");
 */

// instead, we can make a loop

  // FOR LOOP
  
/*     
      has a counter
      has 3 parts:
                    1. initial value of the counter
                    2. condition - evaluated before each iteration 
                    3. increment of the counter
      
      The loop runs as long as the condition is true
 */
    for(let rep = 1; rep <= 30; rep++) {
      console.log(`Lifting weights repetition ${rep}.`);
    }



// LOOPING THROUGH ARRAYS with for-loop


    const mariArray = [
      "Mari",
      "Stedman",
      2021 - 1986,
      "developer",
      ["Matija", "Martina", "Dijana"],
      "true"
    ];


    // individually logging all elements to console

      // console.log(mariArray[0]);
      // console.log(mariArray[1]);
      // console.log(mariArray[2]);
      // console.log(mariArray[3]);
      // console.log(mariArray[4]);

      // console.log(mariArray[5]); doesn't exist, "i" should stay below 5
      // 5 is the lengthof the array


      // i = traditional counter variable in the for-loop
      // i is used to retrieve all the elements in the array
      // start at 0 = array is zero based
      // mariArray[i] = we use "i", the counter variable instead of hard-coding numbers

      // condition - the i index always has to stay below the length of the array
      // the counter is going to go from 0 to array.length-1 in the loop

      for(let i = 0; i < mariArray.length; i++) {
        console.log(mariArray[i], typeof mariArray[i]);
      }



// FILLING AN EMPTY ARRAY WITH FOR-LOOP      
    
      // creating new array that will, at the same time, contain type of each of the element
          // creating a new array based on the values of original array
          // in real world is not used 

          // 1: by reading from the original array
          // 2: using the push() method, adding to the end of the new empty array


          // original array from which we read

          const toniArray = [
            "Toni",
            "Stedman",
            2021 - 1986,
            "teacher",
            ["Nikita", "Hans", "Jonas"],
            "true"
          ];

          // empty array 

          const types = [];

          for(let i = 0; i <toniArray.length; i++) {
            console.log(mariArray[i]);

            // 1: Filling types array, just reading from mariArrat
            // types[i] = typeof toniArray[i];

            // 2: push method
              types.push(typeof toniArray[i]);
          }

          console.log(types);
      


    // more practical example

          // calculate the ages for the array of birth years
          // loop through years, calculate and fill up empty ages array
          // i = current loop position in the array

    const years = [1991, 2007, 1969, 2020]; 
    const ages = [];

    for (let i = 0; i < years.length; i++) {
      ages.push(2021 - years[i]);
    }

    console.log(ages);  // 30, 14, 52, 1





// STATEMENTS in the loop

    // "continue" & "break"


    // CONTINUE
      // exit the current iteration of the loop and continue to the next one

      // we want to log only strings from the array

      console.log("--- ONLY STRINGS --- ");

      for(let i = 0; i < mariArray.length; i++) {
        if (typeof mariArray[i] !== "string") continue;
                   // we only want to log strings and skip everything else

        console.log(mariArray[i], typeof mariArray[i]);
      }



    // BREAK
      // exits the whole loop

      // after we find a number, we don't want to log any more elements from the array


      console.log("--- BREAK WITH NUMBER ---");

      for(let i = 0; i < mariArray.length; i++) {
        if (typeof mariArray[i] === "number") break;

        console.log(mariArray[i], typeof mariArray[i]);
      }