// Add selected style for selected cards
    // add an event listener to the entire grid
    // anytime an element is clicked, the selected class will be applied to it.

"use strict";

const cardsArray = [ /* ... */ ];

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

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

// Add event listener to grid
grid.addEventListener('click', function (event) {
  // The event target is our clicked item
  let clicked = event.target;

  // Do not allow the grid section itself to be selected; only select divs inside the grid
  if (clicked.nodeName === 'SECTION') { 
    return;
  }

  // Add selected class
  clicked.classList.add('selected');
});