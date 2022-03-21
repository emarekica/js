"use strict";

// used when you don't know beforehand how many iterations the loop will have
// when you don't need a counter



// for comparison 

    for(let rep = 1; rep <= 10; rep++) {
      console.log(`Lifting weights repetition ${rep}.`);
    }


// while loop

    // you can only specify the condition
    // the loop runs while the condition is true

    // we have to define manually the repetition and the increment of the counter (outside of the loop).


    let rep = 1;

    while(rep <= 10) {
      // console.log(`WHILE: Lifting weights repetition ${rep}.`);

      rep++;
    }



// example without a counter   -   ROLLING THE DICE
 
    // depends on a random variable

    // rolling a dice untill we roll 6   
    // loop will keep "rolling the dice" while the condition is != 6

    // we don't know how many times we will roll the dice > we don't need a counter
    //    = use case of a while-loop
     

          // Math.random() creates number between 0 and 1
          // multiplied by 6 creates a decimal number
          // adding Math.trunc() will get rid of decimal and give 0-5 number
          // +1 gives us 0-6

    let dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);             // 3.624845460s
                                   // 3
                                   // as we reload the page, we get a random integer, that is different every time

/*  INFINITE LOOP

    will crash the browser
    it creates only ONE dice value (4)


      while(dice !== 6) {
        console.log(`You rolled a ${dice}!`);
      }

      SOLUTION: reasign a new value at the end of each iteration

 */
    

      while(dice !=6 ) {
        console.log(dice);
        dice = Math.trunc(Math.random() * 6) + 1;

        if(dice === 6) console.log("Loop is about to end. ");
      }