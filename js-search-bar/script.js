"use strict";

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

// user object
let users = [];

// event listener for input
searchInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  console.log(users);

  // hide all users that don't match what we type in
  users.forEach((user) => {
    // does the name match the input/does it have the input inside of it
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);

    // hides the element if the value doesn't match
    user.element.classList("hide", !isVisible);
  });
});

// pulling in user cards via API
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    // filling in the card with data for each user
    users = data.map((user) => {
      // get the content of the template
      // clone that content and all the content inside of it
      // get the 1st child of returned #document-fragment to use data inside of it = card itself
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");

      // set the content
      header.textContent = user.name;
      body.textContent = user.email;

      // append the card inside of the container
      userCardContainer.append(card);

      // returns object that contains data about user
      return {
        name: user.name,
        email: user.email,
        element: card,
      };
    });
  });
