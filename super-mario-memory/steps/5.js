// Only allow two cards to be selected at a time

"use strict";

const cardsArray = [ /* ... */ ];

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

// store the count
let count = 0;

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

grid.addEventListener('click', function (event) {
  let clicked = event.target;

  // counter that counts to 2; only adds "selected" to two cards
  if (clicked.nodeName === 'SECTION') { return; }
  if (count < 2) {
    count++;
    clicked.classList.add('selected');
  }
});