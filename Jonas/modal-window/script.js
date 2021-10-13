'use strict';

// selecting all the elements with which we'll work

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-modal");
const openButtons = document.querySelectorAll(".show-modal");

console.log(openButtons);


    // looping through "Show modal" buttons
    // logging the text content of each button

    for( let i = 0; i < openButtons.length; i++) {
      console.log(openButtons[i].textContent);
    }


# MANIPULATING CLASSES WITH JS