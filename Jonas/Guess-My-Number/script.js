'use strict';

// MANIPULATING DOM ELEMENTS

/* console.log(document.querySelector(".message").textContent);


// Setting the content of the element to something we want the new content to be

        document.querySelector(".message").textContent = "Correct number!";

        console.log(document.querySelector(".message").textContent);

        document.querySelector(".number").textContent = 4;
        document.querySelector(".score").textContent = 9;


    // setting / getting the value from an input field

      // getting the value
        console.log(document.querySelector(".guess").value);

      // setting the value
        console.log(document.querySelector(".guess").value = 23);
 */


////////////////////////////////////////////////////////////////

// from here we develop the app step-by-step



// HANDLING CLICK EVENTS

    // get the data from input field whenever "Check!" button is clicked


document.querySelector(".check")
  .addEventListener("click", function() {
  
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    console.log(typeof guess);

    // DOM manipulation, visible after clicking on the button
    document.querySelector(".message").textContent = "Nice pick!";

    // implementing game logic
    // check if there is a value

    if(!guess) {
      document.querySelector(".message").textContent = "💔 No number!";
    }

  });



 



    // document.querySelector(".check").addEventListener("click", function () {
    //   const guess = Number(document.querySelector(".guess").value); // 6
    //   console.log(guess, typeof guess);


      // starting to implement the game logic - guess that there is no guess

      // 1st scenario: THERE IS NO IMPUT
              // 1 - check if there is a value
              // 2 - if there is, print the response to the console / in the message element
              // when there is no guess, we get zero > zero is falsey, but we convert it to true by adding "!" so the code gets executed

        // if (!guess) {
        //   document.querySelector(".message").textContent = "No number!";
        // }

      // you need to respond to "no imput scenario"
