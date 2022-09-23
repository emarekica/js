// 8:11

"use strict";

// Creating HTML markup dynamically

/*  

1. REMOVE
    - "modal", "backdrop" variables
    - "display:none" from closeModal()
    - "display: block" from editValueButton[2].addEventListener()

2. create global variables "backdrop" and "modal", uninitialized   

3. add backdrop upon a click of "Edit value" button (buttons[2]) that opens the modal
    - use createElement("tagName") to create new HTML element
 
4. Add event listener on backdrop in the same place where it is

5. change button selection >> now we only have 1 button 
    
    const editValueButton = document.querySelector("button");
    
     - this will run only once at the start of the script
    - querySelector gives STATIC NODE LIST
    - won't mess with buttons later added programatically 

6. comment out "cancel", "confirm" and "textEdit " buttons

7. remove "display:none" from ".backdrop" in CSS

8. create "demoContainer" variable

9. add backdrop to the DOM in the "editValueButton[2].addEventListener()" before "demoContainer "

    document.body.insertBefore(backdrop, demoContainer);

10. fill in closeModal() function

 */

let backdrop;
let modal;

const editValueButton = document.querySelector("button");
const demoContainer = document.querySelector(".demo-container");
const outputParagraph = document.querySelector("#quote");
// const textEdit = document.querySelector(".modal textarea");

// user can edit input value
const quote = "A Modal Component on a Webpage - how hard could it be?";

// if user changes the input of the quote, it is stored here
let editedQuote = "";

function updateParagraph() {
  // loads the value of quote into the <p>
  outputParagraph.textContent = quote;
}

function closeModal() {
   // check if backdrop exists >> remove it
   if(backdrop) {
    backdrop.remove();
   }
}

updateParagraph();

// 

// --- EDIT VALUE BUTTON
// opens modal
// editValueButton gives an array of elements/editValueButton
// here, we select the 3rd element/button, with i = 2

editValueButton.addEventListener("click", function () {
  // create backdrop in the memory
  backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  
  // add it to the DOM before "demo-container" / render it 
  document.body.insertBefore(backdrop, demoContainer);
  
  // closes backdrop 
  backdrop.addEventListener("click", closeModal);

  // qoute we start with
  editedQuote = quote;

  // loads value of "quote" to <p> when modal opens
  //  
});

// 

// --- CANCEL BUTTON
// closes modal 
// buttons[0].addEventListener("click", closeModal);
//

// --- CONFIRM BUTTON
// buttons[1].addEventListener("click", function () {
//   // here we need parenthesis because the whole function depends on click
//   closeModal();

//   if (editedQuote.trim().length > 0) {
//     quote = editedQuote;
//     updateParagraph();
//   }
// });

//

// registers and loads user input changes into modal
//
// textEdit.addEventListener("input", function () {
//   // "textEdit.value" is current value
//   editedQuote = textEdit.value;
// });

// resource: https://www.youtube.com/watch?v=Nw18SQ9mU6I


