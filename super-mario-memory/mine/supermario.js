"use strict";

// 1

// Card data

const cardsArray = [
  {
    name:"shell",
    img:"img/blueshell.png",
  },
  {
    name: "star",
    img: "img/star.png",
  },
  {
    name: "bobomb",
    img: "img/bobomb.png",
  },
  {
    name: "mario",
    img: "img/mario.png",
  },
  {
    name: "luigi",
    img: "img/luigi.png",
  },
  {
    name: "peach",
    img: "img/peach.png",
  },
  {
    name: "1up",
    img: "img/1up.png",
  },
  {
    name: "mushroom",
    img: "img/mushroom.png",
  },
  {
    name: "thwomp",
    img: "img/thwomp.png",
  },
  {
    name: "bulletbill",
    img: "img/bulletbill.png",
  },
  {
    name: "coin",
    img: "img/coin.png",
  },
  {
    name: "goomba",
    img: "img/goomba.png",
  },
]


// DISPLAYING THE CARDS


// // Grab the root element <div id="game">
// const game = document.getElementById("game");

// // Create a <secton class="grid">
// const grid = document.createElement("section")
// grid.setAttribute("class", "grid");

// // Append the grid section to the game div 
// game.appendChild(grid);



// DISPLAYING THE IMAGES

// // For each item in the cardsArray ...
// cardsArray.forEach((item) => {

//   // Create a div
//   const card = document.createElement("div");

//   //Apply a card class to the div
//   card.classList.add("card");

//   // Set the data-name attribute of the div to the cardsArray name
//   card.dataset.name = item.name;

//   // Apply the background image of the div to the cardsArray image
//   card.style.backgroundImage = `url(${item.img})`;

//   // Append the div to the grid section
//   grid.appendChild(card);

// })


/////////////////////////////////////////////////////////////

// 2, 3, 5

// DUPLICATING CARDS TO HAVE 2 SETS OF 12
// RANDOMIZE THE DISPLAY CARDS
// ONLY ALLOW 2 CARDS SELECTED AT A TIME

// create a match for each card
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let count = 0;

// for displaying cards
  const game = document.getElementById("game");
  const grid = document.createElement("section");
  grid.setAttribute("class", "grid");
  game.appendChild(grid);

// creating a match for each card  
gameGrid.forEach((item) => {
  const card = document.createElement("div");

  card.classList.add("card");
  card.dataset.name = item.name;
  card.style.backgroundImage = `url(${item.img})`;
  grid.appendChild(card);
});



/////////////////////////////////////////////////////////////

// 4

// ADD EVENT LISTENER TO GRID

grid.addEventListener("click", function (event) {

  // The event target is our clicked item
  let clicked = event.target;

  // Do not allow the grid section itself to be selected, only select divs inside the grid
  if (clicked.nodeName === "SECTION") {
    return
  }
  if (count < 2) {
    count++;

    // Add selected class
    clicked.classList.add("selected");
  }
});