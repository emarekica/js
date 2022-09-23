"use strict";

const buttons = document.querySelectorAll("button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

const outputParagraph = document.querySelector("#quote");
const textEdit = document.querySelector(".modal textarea");

// user can edit input value
const quote = "A Modal Component on a Webpage - how hard could it be?";

// if user changes the input of the quote, it is stored here
let editedQuote = "";

function updateParagraph() {
  // loads the value of quote into the <p>
  outputParagraph.textContent = quote;
}

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

updateParagraph();

// buttons gives an array of elements/buttons
// here, we select the 3rd element/button, with i = 2
buttons[2].addEventListener("click", function () {
  // opens modal
  modal.style.display = "block";
  backdrop.style.display = "block";

  // qoute we start with
  editedQuote = quote;

  // loads value of "quote" to <p> when modal opens
  textEdit.value = quote;
});

// CANCEL button
// NO: closeModal() >> executes it at the start of the script;
// YES: closeModal >> executes it on click
buttons[0].addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

// CONFIRM button
buttons[1].addEventListener("click", function () {
  // here we need parenthesis because the whole function depends on click
  closeModal();

  if (editedQuote.trim().length > 0) {
    quote = editedQuote;
    updateParagraph();
  }
});

// registers and loads user input changes into modal
//
textEdit.addEventListener("input", function () {
  // "textEdit.value" is current value
  editedQuote = textEdit.value;
});

// resource: https://www.youtube.com/watch?v=Nw18SQ9mU6I
