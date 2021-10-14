'use strict';

// selecting all the elements with which we'll work

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-modal");
const openButtons = document.querySelectorAll(".show-modal");

console.log(openButtons);



        // looping through "Show modal" buttons

        for(let i = 0; i < openButtons.length; i++) {
          console.log(openButtons[i].textContent);
        }


// attaching event listener
// removing the class "hidden" 

    // for(let i = 0; i < openButtons.length; i++) {
    //   openButtons[i]
    //     .addEventListener("click", function(){
    //         modal.classList.remove("hidden");
    //         overlay.classList.remove("hidden");
    //       });
    // }


// Hiding the modal window with "x" button
// adding an event listener

  // closeButton.addEventListener("click", function(){
  //     modal.classList.add("hidden");
  //     overlay.classList.add("hidden");
  //   });


// close modal window also when I click on the overlay (background)

    // overlay.addEventListener("click", function() {
    //       modal.classList.add("hidden");
    //       overlay.classList.add("hidden");
    //   });



// DRY version of the code to OPEN and CLOSE the Modal window

const openModal = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for(let i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener("click", openModal);
}

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);



// KEYPRESS (keyboard) EVENTS

  // global events > don't happen on one specific element
  // event listener for the whole document - for any keypress on the page

  // accessing the EVENT OBJECT by giving the event handler function a parameter (e)
  

  document.addEventListener("keydown", function(e) {
      //console.log("A key was pressed.");
      console.log(e.key);

// closing the modal: if the pressed key is ESC && the modal DOES NOT contain class "hidden"

      if(e.key === "Escape" && !modal.classList.contains("hidden")) {
            closeModal();
      }
  });