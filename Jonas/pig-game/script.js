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


// Array in which we will store scores for both players
const scores = [0, 0];

// Starting conditions
  // Put scores to zero
  score0El.textContent = 0;
  score1El.textContent = 0;

  // Add class .hidden to the dice
  diceEl.classList.add("hidden");

let currentScore = 0;
let activePlayer = 0;


// Rolling dice functionality
btnRoll.addEventListener("click", function() {
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
});

// Adding event listener to button HOLD

btnHold.addEventListener("click", () => {
  // 1. Add current score to the score of active player's score
  scores[activePlayer] += currentScore;
  // scores[1] = scores[1] + currentScore;

  // 2. Check score is a >= 100
  // Finish the game

  // Switch to the next player
})