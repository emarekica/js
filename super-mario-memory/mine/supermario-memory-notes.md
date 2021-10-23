# MAKING A MEMORY GAME

## PREREQUISITES

- Basic knowledge of HTML and CSS.
- Basic knowledge of JavaScript syntax and datatypes.
- ES6 and some basic DOM concepts.


## GOALS

The premise of the game is to have a grid of 24 face-down cards. The card faces consist of pairs of matches. Clicking on cards will flip them over, revealing the value. When two are chosen, if it's a match, both cards will disappear. If it's not, the cards will flip back over to face-down. The game should be different every time the game is refreshed.


## PLANNING

[ ] Display 12 cards.
[ ] Duplicate the cards to have 2 sets of 12.
[ ] Randomize the display of cards.
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

Displaying the cards:

1. grab the root element <div ide="game">
2. through JS, create new <section class="grid">
3. append to the DOM insige the root element


Display the images:

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
2. duplicate array with `concat()``
3. loop through

---

## STEP 3 - Randomize the display of cards

1. shuffle the array using `sort()` and `Math.random()`

Place this code right after the declaration of gameGrid.

  `gameGrid.sort(() => 0.5 - Math.random());`

 [How does Math.random work to sort an array?](https://forum.freecodecamp.org/t/how-does-math-random-work-to-sort-an-array/151540)

  -- `Math.random` returns a random number between 0 and 1
  
  [How does SHUFFLE work](https://www.codecademy.com/forum_questions/4f609c49e0bd2b0003011313)

  -- the function is not called anywhere because it’s actually an argument to the sort method
  -- the function in its entirety is passed as an argument
  -- `gameGrid.sort()` is called
  
  -- `sort()` method without any arguments sorts values alphabetically
  -- If you pass a function, you’re telling the method how to sort when it compares two values
  -- When comparing numerical values, the difference between 2 values is either less than 0, equal to 0, or greater than equal
  -- If the result is < 0, then the first value comes first >  **this method provides a random comparison value** 

    [more](http://www.javascriptkit.com/javatutors/arraysort.shtml)
    [even more](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-mutator-methods)

---

source: [Tania Rascia's blogue](https://www.taniarascia.com/how-to-create-a-memory-game-super-mario-with-plain-javascript/)



-- ubaciti muziku dok igraš
-- zvuk kad pogodiš
-- na kraju muzika "pređeni leven"
-- win na ekranu na kraju

[YT SuperMario music](https://www.youtube.com/watch?v=NTa6Xbzfq1U&t=4s)
[TY SuperMario sound effects](https://www.youtube.com/watch?v=5yrFdhNG2Sk)