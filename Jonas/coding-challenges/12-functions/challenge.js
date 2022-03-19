"use strict";

// const registerNewAnswer = function () {
//   let answer = Number(
//     prompt(`What is your favourite programming language?
//   0: JavaScript
//   1: Python
//   2: Rust
//   3: C++
//   (Write option number)`)
//   );
//   console.log(answer);
// };

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
  // This generates [0, 0, 0, 0]
  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    let answer = Number(
      prompt(
        `${this.question}\n${this.options.join("\n")}\n(Write option number)`
      )
    );

    console.log(answer);

    // update answer
    // check if it is a number and if the number of options coincide
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },

  // default is set to array
  displayResults: function (type = "array") {
    if (type === "array") {
      console.log(this.answers);
    } else if (type === "string") {
      console.log(`Poll results are ${this.answers.join(", ")}`);
    }
  },
};

// poll.registerNewAnswer();

document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));

// for new "this" keyword, use call()
// we need a new object that contains new array: create an object "newAnswers" that contains it
poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// Poll results are 5, 2, 3
poll.displayResults.call({ answers: [5, 2, 3] });
// 3) [5, 2, 3]

poll.displayResults.call({ answers: [5, 2, 3] }, "string");
// Poll results are 5, 2, 3
poll.displayResults.call({ answers: [5, 2, 3] });
// (3) [5, 2, 3]

// test data 1: [5, 2, 3]
// test data 2: [1, 5, 3, 9, 6, 1]
