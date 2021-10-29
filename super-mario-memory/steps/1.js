// DISPLAY 12 CARDS

"use strict";

// create array of objects, put them in a variable
const cardsArray = [
  {
    name: 'shell',
    img: 'img/blueshell.png',
  },
  {
    name: 'star',
    img: 'img/star.png',
  },
  {
    name: 'bobomb',
    img: 'img/bobomb.png',
  },
  {
    name: 'mario',
    img: 'img/mario.png',
  },
  {
    name: 'luigi',
    img: 'img/luigi.png',
  },
  {
    name: 'peach',
    img: 'img/peach.png',
  },
  {
    name: '1up',
    img: 'img/1up.png',
  },
  {
    name: 'mushroom',
    img: 'img/mushroom.png',
  },
  {
    name: 'thwomp',
    img: 'img/thwomp.png',
  },
  {
    name: 'bulletbill',
    img: 'img/bulletbill.png',
  },
  {
    name: 'coin',
    img: 'img/coin.png',
  },
  {
    name: 'goomba',
    img: 'img/goomba.png',
  },
]

//DISPLAY THE IMAGES

// 1 - Add section to the DOM

  // Grab the div with an id of root
  const game = document.getElementById('game');

  // Create a section with a class of grid
  const grid = document.createElement('section');
  grid.setAttribute('class', 'grid');

  // Append the grid section to the game div
  game.appendChild(grid);


// 2 - steps
  // loop through each item in the cardsArray
  // create card div for each object (12 divs total)
  // set data-name attribute + background-image style property of each div
  // append that div to the grid

  // for each item in the cardsArray array...
  cardsArray.forEach(item => {
    // Create a div
    const card = document.createElement('div');

    // Apply a card class to that div
    card.classList.add('card');

    //Set data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name;

    // Apply the background image of the div to the cardsAarray image
    card.style.backgroundImage = `url(${item.img})`;

    // Append the div to the grid section
    grid.appendChild(card);
  });


/*  DATA-NAME attributes

`dataset`

-- allow us to store extra data in an HTML element
-- any non-standard attribute should begin with `data-`

Reading their values in JS:

-- use `getAttribute()` with their full HTML name
-- via `dataset`property

  -- get the property by the part of the attribute name after data-
  -- Each property is a string and can be read and written

  ```js
  const article = document.querySelector('#electric-cars');

  article.dataset.columns // "3"
  article.dataset.indexNumber // "12314"
  article.dataset.parent // "cars"
  ```
*/