"use strict";

const buttons = document.querySelectorAll("button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

const outputParagraph = document.querySelector("#quote");
const textEdit = document.querySelector(".modal textarea");

const quote = "A Modal Component on a Webpage - how hard could it be?";
const editedQuote = "";

function updateParagraph() {
  outputParagraph.textContent = quote;
}

function closeModal() {
  modal.style.display = "none";
  backdrop.style.display = "none";
}

updateParagraph();

buttons[2].addEventListener("click", function () {
  modal.style.display = "block";
  backdrop.style.display = "block";
  editedQuote = quote;
  textEdit.value = quote;
});

buttons[0].addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

buttons[1].addEventListener("click", function () {
  closeModal();
  if (editedQuote.trim().length > 0) {
    quote = editedQuote;
    updateParagraph();
  }
});

textEdit.addEventListener("input", function () {
  editedQuote = textEdit.value;
});
