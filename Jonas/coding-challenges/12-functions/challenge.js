"use strict";

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],

  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

// ---- Create a method called 'registerNewAnswer' on the 'poll' object.

// a: Display a prompt window for the user to input the number of the selected option, "What is your favourite programming language?", write option number

// b: Based on the input number, update the 'answers' array property. Make sure to check if the input is a number and if the number makes sense

// ---- Call this method whenever the user clicks the "Answer poll" button

// ---- Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

// ---- Run the 'displayResults' method at the end of each 'registerNewAnswer' method call

// ---- Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?
// test data 1: [5, 2, 3]
// test data 2: [1, 5, 3, 9, 6, 1]
