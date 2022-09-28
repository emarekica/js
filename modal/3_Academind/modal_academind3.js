// ES6

"use strict";

let backdrop;
let modal;

const editValueButton = document.querySelector("button");
const demoContainer = document.querySelector(".demo-container");
const outputParagraph = document.querySelector("#quote");

let quote = "A Modal Component on a Webpage - how hard could it be?";
let editedQuote = "";

function updateParagraph() {
  outputParagraph.textContent = quote;
}

function closeModal() {
  if (backdrop) {
    backdrop.remove();
  }

  if (modal) {
    modal.remove();
  }
}

updateParagraph();

// pull out variables defined in EDIT VALUE BUTTON and make them global

// escape creating this with template literal because data comes from the user
let modalTextArea = document.createElement("textarea");
modalTextArea.rows = "3";
modalTextArea.value = quote; // may need to go inside of "editValueButton"

const confirmButton = `<button type="button" class="btn-confirm">Confirm</button>`;

editValueButton.addEventListener("click", function () {
  // BACKDROP
  backdrop = `<div class="backdrop"></div>`;

  document.body.insertBefore(backdrop, demoContainer);
  backdrop.addEventListener("click", closeModal);

  // MODAL
  modal = `
  <div class="modal">
    <h1>Edit your Statement</h1>

    <div class="modal-input">
      ${modalTextArea}
    </div>

    <div class="modal-actions">
      <button
        type="button"
        class="btn-cancel">Cancel
      </button>
        ${confirmButton}
    </div>
  `;

  // registers and loads user input changes
  modalTextArea.addEventListener("input", function () {
    editedQuote = modalTextArea.value;
  });

  confirmButton.confirmButton.addEventListener("click", function () {
    closeModal();

    if (editedQuote.trim().length > 0) {
      quote = editedQuote;
      updateParagraph();
    }
  });

  document.body.insertBefore(modal, demoContainer);
});

// resources:

// https://wesbos.com/template-strings-html
// https://medium.com/samsung-internet-dev/html-and-templates-javascript-template-literals-2d7494ea3e6

// fali innerHTML
