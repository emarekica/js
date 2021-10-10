'use strict';

    
let secretNumber = Math.trunc(Math.random() * 20) + 1; // a
let score = 20; // b
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
}

const setScore = function(score) {
  document.querySelector(".score").textContent = score;
}


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
      // document.querySelector(".message").textContent = "💔 No number!";
      displayMessage("💔 No number!");
    } 
    
    // if the guess is correct / WIN
    else if(guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct number!";

      //changing the background color
      document.querySelector("body").style.backgroundColor = "#60b347";

      // increase the width of central number
      document.querySelector(".number").style.width = "30rem";

      // setting the highscore
      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    }

    // when guess is wrong (DRY)
    else if(guess !== secretNumber) {
      if (score > 1) { // c

        // document.querySelector(".message").textContent
        // = guess > secretNumber ? "⬆️ Too high!" : "⬇️ Too low!";
        displayMessage(guess > secretNumber ? "⬆️ Too high!" : "⬇️ Too low!");

        score = score - 1;  // b
        //document.querySelector(".score").textContent = score;  // b
        setScore(score);

      } else {  // c
        // document.querySelector(".message").textContent = "😭 You've lost the game. Try again!";
        displayMessage("😭 You've lost the game. Try again!");

        document.querySelector(".score").textContent = 0;
      }
    }
  })



// RESTORING INITIAL CONDITIONS  

document.querySelector(".again")
        .addEventListener("click", function() {

          // reasigning initial values to score and sercetNumber
              let score = 20;
              let secretNumber = Math.trunc(Math.random() * 20) + 1;
              
          // Restoring the initial conditions of the message, number, score and guess 
            
            // document.querySelector(".message").textContent = "Start guessing...";
            displayMessage("Start guessing...");
            
            document.querySelector(".number").textContent = "?";
            
            //document.querySelector(".score").textContent = score;
            setScore(score);

            // setting an empty value to the input field
            document.querySelector(".guess").value = "";
          
          // Restoring background and number width
            document.querySelector("body").style.backgroundColor = "#222";
            document.querySelector(".number").style.width = "15rem";
        })
