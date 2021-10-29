// Determine if two selected cards are a match and hide them

    // add function for matching CSS that loops through selected items and ads match
    // call it at the right time in the code: in the event listener

    // make sure you can't select the same element twice

"use strict";

const cardsArray = [ /* ... */ ];

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

// store the first and second guess
let firstGuess = '';
let secondGuess = '';
let count = 0;

// Make previouse target so you can't select the same element twice
let previousTarget = null;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
});

// Add match CSS
// function for matching CSS loops through all `selected` elements when called; adds `match` class

const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

// assign the first and second guess to their respective variables
// if they're both not empty and match, the match() function will be called

grid.addEventListener('click', function (event) {
  let clicked = event.target;

  // this will ignore 2nd click on the same element
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
    return;
  }

  if (count < 2) {
    count++;
    if (count === 1) {

      //Assign first guess
      firstGuess = clicked.dataset.name;
      console.log(firstGuess);
      clicked.classList.add('selected');

    } else {
      // Assign second guess
      secondGuess = clicked.dataset.name;
      console.log(secondGuess);
      clicked.classList.add('selected');
    }

    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {

      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        match();
      }  

      // Set previous target to clicked so you can't select same element twice
      previousTarget = clicked;
    }
  }
});

/* 

The guesses don't reset, so we can only select or match one thing at a time.
But if we select two elements we know match, the proper CSS will be applied.

*/