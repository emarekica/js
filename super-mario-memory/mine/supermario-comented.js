"use strict";

/* STEPS

- Display 12 cards.
- Duplicate the cards to have 2 sets of 12.
- Randomize the display of cards.
- Add selected style for selected cards.
- Only allow two cards to be selected at a time.
- Determine if two selected cards are a match and hide them.
- Reset guess count after 2.
- Add delay to selections.
- Show back of card initially and flip on select
*/


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
  }];



// Duplicate array to create a match for each card
// Randomize game grid on each load
let gameGrid = cardsArray.concat(cardsArray).sort(function () {
  return 0.5 - Math.random();
});

// store the first and second guess
let firstGuess = '';
let secondGuess = '';

// store the count
let count = 0;
let previousTarget = null;
let delay = 1200;

// for displaying cards
  const game = document.getElementById("game");
  const grid = document.createElement("section");
  grid.setAttribute("class", "grid");
  game.appendChild(grid);


// creating a match for each card  
gameGrid.forEach(function (item) {
  let name = item.name,
  img = item.img;

  // create card element with the name dataset
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = name;

  // create front of card
  const front = document.createElement("div");
  front.classList.add("front");

  // create back of card, with contains
  const back = document.createElement("div");
  back.classList.add("back");
  back.style.backgroundImage = `url(${item.img})`

  // Append card to grid, and front and back to each card
  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});


// Add match CSS
// function for matching CSS loops through all `selected` elements when called; adds `match` class

const match = () => {
  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
}


// ALLOW MULTIPLE GUESSES
// function to reset the guess count after 2 guesses
// will set all counts and guesses back to their original values, remove the selected CSS
const resetGuesses = () => {
  firstGuess = '';
  secondGuess = '';
  count = 0;

  var selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};


// Add event listener to grid
grid.addEventListener("click", function (event) {

  // The event target is our clicked item
  let clicked = event.target;

  // add sound to clicking cards
  

  // Do not allow the grid section itself to be selected, only select divs inside the grid
  // prevent flipping already matched items
  if (clicked.nodeName === "SECTION" || clicked === previousTarget || clicked.parentNode.classList.contains("selected")) {
    return;
  }

  // counter that counts to 2; only adds "selected" to two cards
  if (count < 2) {
    count++;
    if (count === 1) {

      // add parentNode since data-name is on outer div (card), and clicks are on inner div (front, back)
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
    
    // add the resetGuesses() function to the match checker, on success or fail.
    // If both guesses are not empty... 
    if (firstGuess !== "" && secondGuess !== "") {

      // functions from before become callbacks
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