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



// create a match for each card
let gameGrid = cardsArray
  .concat(cardsArray)
  .sort(() => 0.5 - Math.random());

let firstGuess = "";
let secondGuess = "";
let count = 0;

let previousTarget = null;

let delay = 1200;


// for displaying cards
  const game = document.getElementById("game");
  const grid = document.createElement("section");
  grid.setAttribute("class", "grid");
  game.appendChild(grid);


// creating a match for each card  
gameGrid.forEach((item) => {
  const { name, img } = item;

  // create card element with the name dataset
  const card = document.createElement("div");
  card.classList.add("card");

  // create front of card
  const front = document.createElement("div");
  front.classList.add("front");

  // create back of card, with contains
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`

  // Append card to grid, and front and back to each card
  grid.appendChild(card);
  grid.appendChild(front);
  grid.appendChild(back);
});


// Add match CSS

const match = () => {
  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
}


// ALLOW MULTIPLE GUESSES
// Reset guess count after 2 guesses

const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;

  var selected = document.querySelectorAll(".selected");
  selected.forEach(card => {
    card.classList.remove("selected");
  });
};



// ADD EVENT LISTENER TO GRID

grid.addEventListener("click", function (event) {

  // The event target is our clicked item
  let clicked = event.target;

  // Do not allow the grid section itself to be selected, only select divs inside the grid
  if (clicked.nodeName === "SECTION" || clicked === previousTarget || clicked.parentNode.classList.contains("selected")) {
    return
  }
  if (count < 2) {
    count++;
    if (count === 1) {
      // Assign first guess
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);

      // Add selected class
      clicked.parentNode.classList.add("selected");

    } else {
      // Assign second guess
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add("selected");
    }
    
    // If both guesses are not empty... 
    if (firstGuess !== "" && secondGuess !== "") {
      // and the first guess matches the second match...
      if(firstGuess === secondGuess) {
        setTimeout(match, delay);
        setTimeout(resetGuesses, delay);
      } else {
        setTimeout(resetGuesses,delay);
      }
    }
    // set previous target to clicked
    previousTarget = clicked;
  }  
});