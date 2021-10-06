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



// HANDLING CLICK EVENTS - 1

    // get the data from input field whenever "Check!" button is clicked
    // add event listener
    // make an event handler function


// IMPLEMENTING THE GAME LOGIC - 2

  // Implement when the guess is correct / equal to the secret number
  // Implement what happens when the guess is too low
  // Implement what happens when the guess is too high


// defining the secret number
// it will be picked randomly, but defined only once
      
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// to see it instead of "?"

document.querySelector(".number").textContent = secretNumber;


// event handler function

document.querySelector(".check")
  .addEventListener("click", function() {
  
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    console.log(typeof guess);

    // DOM manipulation, visible after clicking on the button
    document.querySelector(".message").textContent = "Nice pick!";

// implementing game logic: SCENARIOS

    // check if there is a value/any number at all
    if(!guess) {
      document.querySelector(".message").textContent = "💔 No number!";
    } 
    
    // if the guess is correct
    else if(guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct number!";
    }

    // if the guess is too high
    else if(guess > secretNumber) {
      document.querySelector(".message").textContent = "⬆️ Too high!"; 
    }

    // if the guess is too low
    else if(guess < secretNumber) {
      document.querySelector(".message").textContent = "⬇️ Too low!";
    }
  });