"use strict";

// Creating HTML markup dynamically

let backdrop;
let modal;

const editValueButton = document.querySelector("button");
const demoContainer = document.querySelector(".demo-container");
const outputParagraph = document.querySelector("#quote");

// user can edit input value
let quote = "A Modal Component on a Webpage - how hard could it be?";

// if user changes the input of the quote, it is stored here
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

//

// --- EDIT VALUE BUTTON
// opens modal

editValueButton.addEventListener("click", function () {
  // create BACKDROP in the memory
  backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");

  // add it to the DOM before "demo-container" / render it
  document.body.insertBefore(backdrop, demoContainer);

  // closes backdrop
  backdrop.addEventListener("click", closeModal);

  //
  // create MODAL
  modal = document.createElement("div");
  modal.classList.add("modal");

  // child elements
  const modalHeading = document.createElement("h1");
  modalHeading.textContent = "Edit your Statement";
  modal.appendChild(modalHeading);

  let modalInput = document.createElement("div");
  modalInput.classList.add("modal-input");
  modal.appendChild(modalInput);

  let modalTextArea = document.createElement("textarea");
  modalTextArea.rows = "3";
  // registers and loads user input changes
  modalTextArea.addEventListener("input", function () {
    editedQuote = modalTextArea.value;
  });
  modalTextArea.value = quote;
  modalInput.appendChild(modalTextArea);

  const modalActions = document.createElement("div");
  modalActions.classList.add("modal-actions");
  modal.appendChild(modalActions);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.classList.add("btn-cancel");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", closeModal);
  modalActions.appendChild(cancelButton);

  const confirmButton = document.createElement("button");
  confirmButton.setAttribute("type", "button");
  confirmButton.classList.add("btn-confirm");
  confirmButton.textContent = "Confirm";
  confirmButton.addEventListener("click", function () {
    closeModal();

    if (editedQuote.trim().length > 0) {
      quote = editedQuote;
      updateParagraph();
    }
  });
  modalActions.appendChild(confirmButton);

  // add modal to the page before backdrop, after demoContainer
  document.body.insertBefore(modal, demoContainer);
});

//

// resource: https://www.youtube.com/watch?v=Nw18SQ9mU6I
