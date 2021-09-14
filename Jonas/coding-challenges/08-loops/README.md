# LOOPS

Let's improve Steven's tip calculator even more, this time using loops!


Your tasks:

  [x] Create an array 'bills' containing all 10 test bill values.

  [x] Create empty arrays for the tips and the totals ('tips' and 'totals').

  [] Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip for every bill value in the bills array.
  
  Use a for loop to perform the 10 calculations!


    ## PSEUDOCODE

    tips + totals = totalValue

    for(let i = 1; i <= bills.length; i++) {
      const all = calcTip(bills[i]);

      totalValue.push(all);
    }

    console.log(all);


## Test data: 

  22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
  
## Hints:
  
  Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays.




  ## Bonus:


  Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument.
  This function calculates the average of all numbers in the given array.

  average = sum of number of elements / number of elements


  ## EXAMPLE

  const calcAverage = (a, b, c) => (a + b + c) / 3;

    const avgDolphins = calcAverage (44, 23, 71);
    const avgKoalas = calcAverage (85, 54, 41);

    console.log(avgDolphins, avgKoalas);  // 46, 60


  ## PSEUDOCODE

  number of element in an array = array.length - 1

  sum of number of element in an array 

  reduce()

      ### example

            var array = [1, 2, 3, 4, 5];
    
            // Getting sum of numbers
             var sum = array.reduce(function(a, b){
                return a + b;
              }, 0);
    
             console.log(sum);



  This is a difficult challenge (we haven't done this before)! Here is how to solve it:
  
    4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0.
    Then loop over the array using a for loop.
    In each iteration, add the current value to the 'sum' variable.
    This way, by the end of the loop, you have all values
    added together.

    4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

    4.3. Call the function with the 'totals' array.