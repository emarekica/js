// Reset guess count after 2
    // allow multiple guesses by resetting the guess count after two guesses, whether they matched or not
    // add the resetGuesses() function to the match checker, on success or fail.


"use strict";

const cardsArray = [ /* ... */ ];

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let count = 0;
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

const match = () => {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(card => {
    card.classList.add('match');
  });
}

// function to reset the guesses 
// will set all counts and guesses back to their original values, remove the selected CSS
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
  if (clicked.nodeName === 'SECTION' || clicked === previousTarget) {
    return;
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      firstGuess = clicked.dataset.name;
      console.log(firstGuess);
      clicked.classList.add('selected');
    } else {
      secondGuess = clicked.dataset.name;
      console.log(secondGuess);
      clicked.classList.add('selected');
    }

    // add the resetGuesses() function to the match checker, on success or fail
    if (firstGuess !== '' && secondGuess !== '') {
      if (firstGuess === secondGuess) {
        match();
        resetGuesses();
      } else {
        resetGuesses();
      }
    }  
    previousTarget = clicked;
  }
});


/* 
- now you can make multiple matches
- select style will disappear immediately if it's not a match, but this is fine because we haven't set any delays to allow it to display longer
*/