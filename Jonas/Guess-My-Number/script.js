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


  // defining the secret number - a
  // it will be picked randomly, but defined only once

  // SCORE - start with 20, decrease if guess is wong - b
  // only while score > 0, change score, else display a message and change highscore to 0 - c
      
const secretNumber = Math.trunc(Math.random() * 20) + 1; // a
let score = 20; // b


// to see it instead of "?"
document.querySelector(".number").textContent = secretNumber;


// event listener/handler function
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

      if (score > 1) { // c

        document.querySelector(".message").textContent = "⬆️ Too high!"; 
        score = score - 1;  // b
        document.querySelector(".score").textContent = score;  // b
      } else {  // c
        document.querySelector(".message").textContent = "😭 You've lost the game. Try again!";
        document.querySelector(".score").textContent = 0;
      }
    }

    // if the guess is too low
    else if(guess < secretNumber) {

      if (score > 1) { // c

        document.querySelector(".message").textContent = "⬇️ Too low!";
        score--; // b
        document.querySelector(".score").textContent = score;  // b
      } else {  // c
        document.querySelector(".message").textContent = "😭 You've lost the game. Try again!";
        document.querySelector(".score").textContent = 0;
      }
    }
  });

