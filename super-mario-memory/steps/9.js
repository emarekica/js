// Show back of card initially and flip on select

"use strict";

const cardsArray = [ /* ... */ ];

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);


/* we need this structure in order to implement the flip

<div class="card">
  <div class="front"></div>
  <div class="back"></div>
</div>

modify the card creation loop to add the front and back elements
*/
gameGrid.forEach(item => {

  // Create card element with the name dataset
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;

  // Create front of card
  const front = document.createElement('div');
  front.classList.add('front');

  // Create back of card, which contains
  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${item.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.remove('selected');
  });
};

grid.addEventListener('click', function (event) {
  let clicked = event.target;

  // prevent flipping already matched items
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected')) {
    return;
  }
  if (count < 2) {
    count++;

    // add parentNode since data-name is on outer div (card), and clicks are on inner div (front, back)
    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');

    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }


    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses, delay);
      }
    }
    previousTarget = clicked;
  }
});


/* Element.classList

- read-only property
- you can modify it by using the add() and remove() methods

- returns the class name(s) of an element, as a DOMTokenList object
- useful to add, remove and toggle CSS classes on an element

examples: 

// use the classList API to remove and add classes
    div.classList.remove("foo");
    div.classList.add("anotherclass");
*/


/* HTML data-* attributes

- used to store custom data private to the page or application
- for custom data attributes on all HTML elements

HTML
  ```
  <article
    id="electric-cars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
  ...
  </article>
  ```

JS
- reading the values fron these attributes
  a - `getAttribute()` with their full HTML name to read them

  b - read out via a dataset property

  ```js
  const article = document.querySelector('#electric-cars');

  article.dataset.columns // "3"
  article.dataset.indexNumber // "12314"
  article.dataset.parent // "cars"
  ```

PARENT NODE

- parentNode property returns the parent node of the specified node, as a Node object
- read-only

`parentNode = node.parentNode`
*/