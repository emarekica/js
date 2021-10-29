// Randomize the display of cards
    // Shuffle the array using sort() and Math.random()

"use strict";

const cardsArray = [ /* ... */ ];

let gameGrid = cardsArray.concat(cardsArray);

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random());

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