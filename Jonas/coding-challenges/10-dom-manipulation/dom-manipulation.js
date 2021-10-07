'use strict';
      
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// event listener/handler function
document.querySelector(".check")
  .addEventListener("click", function() {
  
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);
    console.log(typeof guess);

// DOM manipulation, visible after clicking on the button
    document.querySelector(".message").textContent = "Nice pick!";

// implementing game logic: SCENARIOS

    // when there is no input
    if(!guess) {
      document.querySelector(".message").textContent = "💔 No number!";
    } 
    
    // if the guess is correct / WIN
    else if(guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct number!";
      // Display the secret number! 
      document.querySelector(".number").textContent = secretNumber;

      //changing the background color
      document.querySelector("body").style.backgroundColor = "#90be6d";

      // increase the width of central number
      document.querySelector(".number").style.width = "30rem";
    }

    // if the guess is too high
    else if(guess > secretNumber) {

      if (score > 1) {
        document.querySelector(".message").textContent = "⬆️ Too high!"; 
        score = score - 1; 
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "😭 You've lost the game. Try again!";
        document.querySelector(".score").textContent = 0;
      }
    }

    // if the guess is too low
    else if(guess < secretNumber) {

      if(score > 1) { 

        document.querySelector(".message").textContent = "⬇️ Too low!";
        score--; 
        document.querySelector(".score").textContent = score;  
      } else {  
        document.querySelector(".message").textContent = "😭 You've lost the game. Try again!";
        document.querySelector(".score").textContent = 0;
      }
    }
  });


