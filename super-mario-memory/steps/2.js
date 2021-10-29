// Duplicate the cards to have 2 sets of 12

"use strict";

const cardsArray = [ /* ... */ ];

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray);

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

// replace cardsArray with gameGrid in the forEach() loop
gameGrid.forEach(item => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
});