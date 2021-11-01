'use strict';


// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");

const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");


// Due to scoping, declare empty variables

let scores, currentScore, activePlayer, playing


// Function for reseting/initializing the game 
// Starting conditions
const init = function() {

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  diceEl.classList.remove("hidden");

  score0El.textContent = 0;
  score1El.textContent = 0;

  current0El.textContent = 0;
  current1El.textContent = 0;

  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

// Run the function, else the initial values won't be executed
init();

// Function for switching the active player
const switchPlayer = function() {

      // Change text content to 0 before changing players
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      // Reset the current score
      currentScore = 0;
      // Switching players
      activePlayer = activePlayer === 0 ? 1 : 0;
  
      // Base for changing background
      player0El.classList.toggle("player--active");
      player1El.classList.toggle("player--active");
}


// Rolling dice functionality
btnRoll.addEventListener("click", function() {
  
  // Buttons are accessable only if the game is playing
  if(playing) {

    // 1. generate random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    
    // 2. display the dice
    diceEl.classList.remove("hidden");
    // Display dice img according to the dice number
    diceEl.src = `dice-${dice}.png`;

    // 3. check for rolled 1
    if(dice !==1) {

      // Add dice to the current score
      currentScore += dice;

      // Tracking the active player & selecting score dynamically, based on the current active player
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});


// Adding event listener to button HOLD
btnHold.addEventListener("click", () => {
  if(playing) {
    // 1. Add current score to the score of active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    // 2. Check score is a >= 100
    if(scores[activePlayer] >= 100) {
      // Finish the game
      // set playing variable to false; assign player--winner class; remove active--player class; remove the dice
      playing = false;
      diceEl.classList.add("hidden");

      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
    } else {
    // Switch to the next player
    switchPlayer();
    }
  }
});


// Reseting the game
btnNew.addEventListener("click", init);





// moje rješenje

// btnNew.addEventListener("click", () => {

//   //remove the winner class
//   playing = true;
//   diceEl.classList.remove("hidden");
//   let scores = [0, 0];
//   let currentScore = 0;
//   let activePlayer = 0;

//   document.querySelector(`.player--${activePlayer}`).classList.remove("player--winner");
//   document.querySelector(".player--0").classList.add("player--active");

//   // set all the scores (total and current) of all the players to 0
//   score0El.textContent = 0;
//   score1El.textContent = 0;

//   current0El.textContent = 0;
//   current1El.textContent = 0;
// });
