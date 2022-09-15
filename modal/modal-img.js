"use strict";

// selecting DOM elements
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".img-modal");
const caption = document.querySelector(".caption");

// looping over images to open them when click
previews.forEach((preview) => {
  // adding "click" event listener to all imgs
  preview.addEventListener("click", () => {
    modal.classList.add("open");

    // opening animation
    original.classList.add("open");

    // dynamic img & txt
    const originalSrc = preview.getAttribute("data-original");
    // if you need to navigate to a folder with bigger imgs
    // original.src = `./full/${originalSrc}`;
    original.src = originalSrc;

    const altTxt = preview.alt;
    caption.textContent = altTxt;
  });
});

// closing opened modal imgs
// e = event
modal.addEventListener("click", (e) => {
  // check what you're clicking on (contains() returns boolean)
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    original.classList.remove("open");
  }
});

// src: https://www.youtube.com/watch?v=4SQXOA8Z-lo
