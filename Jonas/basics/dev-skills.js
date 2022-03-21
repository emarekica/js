// Remember, we're gonna use strict mode in all scripts now!
"use strict";


// RESEARCH - Google, MDN, StackOverflow

    // PROBLEM 1:
    // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

      const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];




/*      1) Understanding the problem

         What is a temp. amplitude? 
         = difference between highest and lowest temp. in the array

         Formula to calculate temperature ampliture. 
         (how to calculate max and min temp.) = function

         What is sensor error?
         How does it look like? = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]
         What to do when one occurs?  = ignore sensor errors
         

        2) Breaking up into sub-problems

        - calculate max & min temperature 
           - find max value in temperature array
           - find min value in temperature array

        - calculate difference between highest & lowest temp
           - subtract min from max (ampliture) and return the result

        - how to ignore errors

*/

      // write a function for CALCULATING MIN AND MAX

          // this logic should run only if we have a number in the array, not error

        const calcTempAmplitude = function(temps) {
          
          let max = temps[0];  // 1
          let min = temps[0];

          for(let i = 0; i < temps.length; i++ ) {
              const currentTemp = temps[i]; // 3
              if (typeof currentTemp !== "number") continue;  // 4

              if (currentTemp > max) max = currentTemp;  // 2
              if (currentTemp < min) min = currentTemp;
          }
          console.log(max, min);
          return max - min;
        }

        // 1 - we suppose that the first element in the array is the max one
        // 2 - if the current position is greater than the max value, then the new value will become the max value
        // 3 - we create variable for temps at position [i] that we use a lot
        // 4 - we use "continue" for jumping over "error" when it occurs so that the logic isn't executed at that step/iteration but it continues to the next iteration

        // calcTempAmplitude([3, 7, 4, 1, 8, 13]);
        // calcTempAmplitude(temperatures);



        // IGNORE ERRORS

            // add this to the function: if (typeof currentTemp !== "number") continue;


        // RETURN THE AMPLITURE

          // add this to the function: return max - min;
          // save it in an variable

            const amplitude = calcTempAmplitude(temperatures);
            console.log(amplitude);


        // PROBLEM 2:
        // Function should now receive 2 arrays of temps.

         /* 
         
            1) Understanding the problem: 

            - implmenting same functionality twice? = No, merge 2 arrays at the beginning.
         

            2) Breaking up into sub-problems

            - how to merge two arrays?
         
         */
        
          /*  MDN concat() method

            const array1 = ['a', 'b', 'c'];
            const array2 = ['d', 'e', 'f'];
            const array3 = array1.concat(array2); */


/*             const calcTempAmplitudeNew = function(t1, t2) {
              const temps = t1.concat(t2);
              console.log(temps);

              let max = temps[0];  // 1
              let min = temps[0];
    
              for(let i = 0; i < temps.length; i++ ) {
                  const currentTemp = temps[i]; // 3
                  if (typeof currentTemp !== "number") continue;  // 4
    
                  if (currentTemp > max) max = currentTemp;  // 2
                  if (currentTemp < min) min = currentTemp;
              }
              console.log(max, min);
              return max - min;
            }

            const amplitudeNew = calcTempAmplitudeNew([1, 5, 9], [5, 4, 0]);
            console.log(amplitudeNew); */




// DEBUGGING

    // we are doing measurements in Kelvin in the thermomether from the exercise before
    // Kelvin - absolute temperature 
    // conversion to Kelvin >  temp (Celsius) / 263 = temp (Kelvin)

    // creating function which will perform the action
    // it takes no arguments because we will get the measurement from the command "prompt" (asking for it in the browser)  
    // comand "prompt" will act as our thermometer sensor


            const  measureKelvin = function() {
              const measurement = {
                type: "temp",
                unit: "Celsius",

                // 3 
                //value: Number(prompt("Degrees celsius:"))  // 2b > we get a string, and need a number

                value: 10,
              };

               console.log(measurement);  //2b 
                 // the "value" of the object is a STRING, and we need a number
                 // the prompt() function always returns a string
             
              console.table(measurement);
                 // nice way of viewing objects in a table in the Console

              // console.log(measurement.value); // 2a
              // console.warn(measurement.value);  generates warnings in the console
              // console.error(measurement.value);  generates errors in the console

              const kelvin = measurement.value + 273;
              return kelvin;
            }

          console.log(measureKelvin()); // 1 - identify that there is a bug



    // 2 - find a bug

      // a - the bug came from the measurement.value > came from object "measurement"'s value > let's check it

      // b - take a look at the complete object



    // 3 - fix the bug

      // use the Number() to fix the bug

    


  // USING DEBUGGER in Google Chrome

    // Inspect > Sources > .js script > set breakpoints



    // introducing a big bug

    const calcTempAmplitudeBug = function(t1, t2) {
      const temps = t1.concat(t2);
      console.log(temps);

      let max = 0;
      let min = 0;

      for(let i = 0; i < temps.length; i++ ) {
          const currentTemp = temps[i];
          if (typeof currentTemp !== "number") continue;

          // debugger;    // calling debugger from the code
          if (currentTemp > max) max = currentTemp;
          if (currentTemp < min) min = currentTemp;
      }
      console.log(max, min);
      return max - min;
    }

    const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
    console.log(amplitudeBug);  // 1 - identify the bug