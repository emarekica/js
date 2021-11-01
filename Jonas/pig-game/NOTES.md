# PIG GAME PROJECT

-- make a **flow chart** of everything happening in the app
-- visual guide to implementation in code

[MAKE YOUR FLOWCHART](https://www.diagrams.net/)

---

## Steps:

### Step 1 - Put scores to zero

**2 ways of selecting elements by ID**

1: `const score0 = document.querySelector("#score--0");`
2: `const score1 = document.getElementById("score--1");`

-- a bit faster (for when you have a lot of elements)

We are writing numbers, JS will auto-convert them to strings to display them.

`score0El.textContent = 0;`
`score1El.textContent = 0;`

___

## Step 2 - Hide the dice

Create a hidden class and add it at the beginning.
We will remove it as we implement _roll dice_ functionality.

**CSS**
```
.hidden {
    display: none;
}
```

Now add that class to the dice at the beginning of the game (JS).
Use  `classList.add()`  to add a class.

  1. select the element: `const diceEl = document.querySelector(".dice");`
  2. add `.hidden` : `diceEl.classList.add("hidden");`
___

## Step 3 - Rolling the dice

  3a - generate dice roll
  3b - display it
  3c - check if it is (not) 1
    YES - add dice to the current score
    NO - go to next player

Generate dice roll --> react to clicking of a button

  1. select button element
  2. add event listener
(when we define variables inside the function, those variables are not global)

  `Math.random()` gives numbers between 0 - 0.99
  `Math.trunc()` removes decimals

## Switching Active player

Keep track which player is active in the moment the dice was rolled (i.e. the button was clicked).

-- create a variable that will hold:

  0 if the current player is Player0
  1 if the current player is Player1

Player0 & Player1 because **we will store scores of both players in an array**.
(array starts with 0)

Dynamically building ID name:

  `document.getElementById(`current--${activePlayer}`).textContent = currentScore;`

When switching players, you need to change the value in `activePlayer`:

  0 --> 1
  1 --> 0

Switching (pseudo code) 

  ```
  if (the activePlayer is currently 0) {
      switch it to 1;
  } else if (the active player is 1) {
      switch it to 0;
  }
  ```

___

## Step 4 - Reset the current score

Also, **change background** when the player changes.

  ```js
  else {
      // Change text content to 0 before changing players
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      
      // Reset the current score
      currentScore = 0;
  
      // Switch players
      activePlayer = activePlayer === 0 ? 1 : 0;
  }
  ```

**Background change:**

-- in the HTML, Player0 has `class="player--active"` because it is always first
-- before switching, we need to remove it and add it to Player 1

  ```js
  else {
      ...
  
      player0El.classaList.toggle("player--active");
      player1El.classaList.toggle("player--active");
  }
  ```

**`textContent`**

-- HTML DOM property
-- sets or returns the text content of the specified node and all its descendants

**Similar to innerText**

-- `innerText` returns the content of all elements, except for <script> and <style> elements
-- innerText will not return the text of elements that are hidden with CSS (textContent will)
-- `innerText` only shows “human-readable” elements


**`classLis.toggle()`**
adds the class if it isn't there
if the class is there, it will remove it

___

## Step 5 - Holding current score

-- it happens whenever the user clicks on the button to hold the score (btn HOLD)
-- we add the current score to the total score

_Score at position [activePlayer] will be equal that score + current score._

  `scores`[activePlayer] += currentScore`
  `scores[activePlayer]`= value of the score of the player that is currently active


Create a function with code we will use more times.
Call the function where you need it.


  ```js
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
  ```
___

## Step 6 - Check for reaching 100 points

-- when that happens, game is over = no more reaction to click events
-- assign `player--winner` class
-- remove `player--active` class

  ```js
  if(scores[activePlayer] >= 100) {
      // Finish the game - assign player--winner class & remove active--player class
      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
  } else {
    // Switch to the next player
    switchPlayer();
  }
  ```

___

## Step 7 - Disable continuation of the game

-- disable roll the dice
-- remove the dice

**solution: create a variable that holds the state of the game**

-- tells the condition of the system: is the game playing or not

    a. if the game is playing, everything works normally
    b. as soon as the game is finished, we can no longer click on any button


  ```js
  let playing = true;

  // buttons are reachable if the game is active = playing = true
  btnRoll.addEventListener("click", function() {
    if(playing) {
      ...
  }
  
  btnHold.addEventListener("click", () => {
    if(playing) {
      ...
  }
  
  if(scores[activePlayer] >= 100) {
        playing = false;
        ...
      } else {
      // Switch to the next player
      switchPlayer();
  ```

-- remove the dice: add `.hidden` class when the game is finished

  ```js
  if(scores[activePlayer] >= 100) {
        ...
        diceEl.classList.add("hidden");
        ...
  }
  ```
___

## Step 8 - Reset the game

Set back all the initial conditions of the game.

-- remove the `winner` class
-- set all the scores (total and current) of all the players to 0
-- remove `hidden` class from dice so it is visible
-- remove `player--active` class


Put it all in a function:

  ```js
  // Starting conditions
  const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
  
    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  };
  ```

We want the function in 2 situations:

  1. when the game is loaded **for the first time**
  2. when the **_new game_ button is clicked**


1. To execute the code as the page loads, we need to call the function. Else the code inside, with initial conditions, won't be executed.

  ```js
  const init = () => {
    // Starting conditions
      ...
  }
  init();
  ```


**Scoping**

Our variables are defined inside of the function.
They are not accessible outside of that function.
**= they are scoped to this function**

**SOLUTION: Declare the variables outside the function, without value.**

Remove `let` from the variables inside the function, otherwise it will create new variables.
In the function we only **reasign them a value**.

  ```js
  let scores, currentScore, activePlayer, playing;
  
  // Starting conditions
  const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    ...
  };
  init();
  ```