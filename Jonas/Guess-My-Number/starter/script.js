'use strict';

console.log(document.querySelector(".message").textContent);


// DOM manipulation = JS interacting with the webpage
  // DOM is part of web API's


// Selecting and manipulating DOM elements

    // Setting the content of the element

/*     document.querySelector(".message").textContent = "Correct number!";
    console.log(document.querySelector(".message").textContent = "Correct number!");

    document.querySelector(".number").textContent = 13;
    document.querySelector(".score").textContent = 10;



    // writing data into input field with JS

      document.querySelector(".guess").value = 23;


    // to get data from an input field, use .value property

      console.log(document.querySelector(".guess").value);
 */


// HANDLING CLICK OF A BUTTON

    // making the code react to something in the DOM
    // get the data from input field whenever "Check!" button is clicked

    /* STEPS:

      1. Select the element where the event should happen.

      2. Call addEventListener() method on that element.

      3. Pass in the type of the event to the event listener method.

      4. Specify the reaction to the event (tell the event listener what to do)
          > define a function that contains the code that should be executed whenever the event happens on that element
          > that function is called "event handler"
          > addEventListener() method expects the event handler function second argument after the event type

            (function = value, can be passed to another function as an argument)

      5. Specify what should happen:
              
              - log to the console value in the input field

                console.log(document.querySelector(".guess".value))

      6. store the value from the input field into a variable and log it

    events: https://data-flair.training/blogs/javascript-event-types/
    */


    document.querySelector(".check").addEventListener("click", function () {
      const guess = Number(document.querySelector(".guess").value); // 6
      console.log(guess, typeof guess);


      // starting to implement the game logic - guess that there is no guess

      // 1st scenario: THERE IS NO IMPUT
              // 1 - check if there is a value
              // 2 - if there is, print the response to the console / in the message element
              // when there is no guess, we get zero > zero is falsey, but we convert it to true by adding "!" so the code gets executed

        if (!guess) {
          document.querySelector(".message").textContent = "No number!";
        }

      // you need to respond to "no imput scenario"
    });