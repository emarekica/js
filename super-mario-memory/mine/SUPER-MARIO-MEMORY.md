# MAKING A MEMORY GAME

## PREREQUISITES

- Basic knowledge of HTML and CSS.
- Basic knowledge of JavaScript syntax and datatypes.
- ES6 and some basic DOM concepts.


## GOALS

The premise of the game is to have a grid of 24 face-down cards. The card faces consist of pairs of matches. Clicking on cards will flip them over, revealing the value. When two are chosen, if it's a match, both cards will disappear. If it's not, the cards will flip back over to face-down. The game should be different every time the game is refreshed.


## PLANNING

[x] Display 12 cards.
[x] Duplicate the cards to have 2 sets of 12.
[x] Randomize the display of cards.
[ ] Add selected style for selected cards.
[ ] Only allow two cards to be selected at a time.
[ ] Determine if two selected cards are a match and hide them.
[ ] Reset guess count after 2.
[ ] Add delay to selections.
[ ] Show back of card initially and flip on select
[ ] Finished game!

[All of the steps](https://gist.github.com/taniarascia/a3b550d568f3e6b693e89786eb333988)


---

## STEP 1 - Setup

**HTML**
-- create index.html (add CSS + JS)
-- app will be contained in the game div, so this file won't change at all

**CSS**
-- flex grid
-- each card is 150x150px
-- has background properties because we'll be adding the card images soon as background images
-- will be adjusted as we add more features

**JS**
-- display 12 cards, each with a different value: 

1. create an array of objects
2. put it in the `cardsArray` variable
Each object will contain a name and an image.

**Displaying the cards:**

1. grab the root element <div ide="game">
2. through JS, create new <section class="grid">
3. append to the DOM insige the root element


**Display the images:**

1. loop through each item in `cardsArray` with `forEach()`
    (_`forEach()` method executes a provided function once for each array element_)
2. create a new card div for each object
3. set the data-name attribute and background-image style property of the div
4. append that div to the grid.

(we will get 12 divs in total)


-- [Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
-- [HTMLElement & Properties](https://developer.mozilla.org/en-US/docs/Web/API/Element)


  **`data-name` attributes**
  -- allow us to store extra data in an HTML element
  -- any non-standard attribute should begin with `data-`


---

## STEP 2 - Duplicate the cards to have 2 sets of 12

1. create `gameGrig` variable
2. duplicate array with `concat()`
3. loop through

---

## STEP 3 - Randomize the display of cards

1. shuffle the array using `sort()` and `Math.random()`

Place this code right after the declaration of gameGrid.

---

## STEP 4 - Add selected style for selected cards

**CSS**

-- add a simple CSS style so we can see selected items easily

**JS**

-- add event listener to the entire grid
-- add it to the bottom of the JS script
-- anytime an element is clickeg, `selected` class will be applied
      
---

## STEP 5 - Only allow two cards to be selected at a time

We're testing if two selected cards match.

-- store the counter
-- store the guesses
    modify the event listener to have `if` statement that counts to two, and only adds `selected` to two cards
-- add the selected CSS inside the statement

---

## STEP 6 - Determine if two selected cards are a match and hide them

**CSS**
-- create CSS for matches
-- give them a red border to differentiate them
-- remove the background image

**We won't remove them from the DOM because we need to preserve the space they used to be - otherwise, all the elements would shift and it would no longer be a proper memory game.**


**JS**

1.
-- where we had a `count` variable before, we'll add a place to store the first and second guess as well

2.
-- make a function for matching elements
-- loop through all `selected` elements when called
-- add `match` class

3.
-- have to call the `match()` function at the right time in the code
-- in event listener, assign the first and second guess to their respective variables
-- if they're both not empty and match, the `match()` function will be called.

The guesses don't reset, so we can only select or match one thing at a time.

_problem_

  _If I select the same element twice, it will consider it a match, because they both have the same data-name property. I shouldn't be able to select the same element twice._

_solution: Ignore the 2nd click on the same element_

  1. add a previousTarget variable = null
  2. assign the clicked value to prevousTarget after the first click
  3. add that check to our return statement at the top of the counter

    ```js
    if (clicked.nodeName === "SECTION" || clicked === previousTarget) {
      return
    }
    ```

Right now, we only get two guesses.
If they're a match, the match style will show.
If they're not, the regular selected style will show.

--- 

## STEP 7 - Reset guess count after 2

We want to allow multiple guesses.
-> do this by resetting the guess count after two guesses, whether they matched or not

1. create a function to reset the guesses
    - set all counts and guesses back to their original values
    - removes selected CSS
2. add the `resetGuesses()` function to the match checker, on success or fail


Select style will disappear immediately if it's not a match because we haven't set any delays to allow it to display longer.

---

## STEP 8 - Add delay to selections

Right now, everything happens immediately.
We want a delay after we make a selection so the user can see what their selection was before the card is hidden again.

1. set a delay time with `setTimeout()`
2. put the functions from before in the `setTimeout()`, with the delay variable as the amount of time for the timeout to last

      ```js
      if (firstGuess !== "" && secondGuess !== "") {
            // and the first guess matches the second match...
            if(firstGuess === secondGuess) {
              setTimeout(match, delay);
              setTimeout(resetGuesses, delay);
            } else {
              setTimeout(resetGuesses,delay);
            }
      ```  

Now we can see selections and matches for 1.2 seconds before they disappear.

---

## STEP 9 - Show back of card initially and flip on select

- Hide the cards initially
- Flip them over when selected
- Make matches disappear

**JS**
-to implement the flip, each div will need to consist of three divs
- we change structure through JS

  <div class="card">
    <div class="front"></div>
    <div class="back"></div>
  </div>

Where we had `clicked.dataset.name` and `clicked.classList.add`, we'll have to add `parentNode` now, since we'll be clicking on an inner div (`front` or `back`) and the data-name is still on the outer div (`card`).


**CSS**
To make FLIP work:
  -- set each card as relative
  -- set back and front as absolute
All three will have the same height and width.

---

source: [Tania Rascia's blog](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)



-- ubaciti muziku dok igraš
-- zvuk kad pogodiš
-- na kraju muzika "pređeni leven"
-- win na ekranu na kraju

[YT SuperMario music](https://www.youtube.com/watch?v=NTa6Xbzfq1U&t=4s)
[TY SuperMario sound effects](https://www.youtube.com/watch?v=5yrFdhNG2Sk)