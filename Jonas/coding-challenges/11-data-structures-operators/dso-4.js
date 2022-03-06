"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

// attach event handler to the button
document.querySelector("button").addEventListener("click", function () {
  // get the value (input) from the text area
  const text = document.querySelector("textarea").value;
  console.log(text);

  // separate into 5 different strings
  const rows = text.split(`\n`);

  // loop over each iteration, each time log the variable converted to camelCase

  for (const [i, row] of rows.entries()) {
    // split in two strings
    const [first, second] = row.toLowerCase().trim().split("_");

    // get second word capitalized
    const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;

    // adding emojis: add fixed length + 1 emoji each iteration
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

// ------------------------------------ MY WORK

// remove underscore, convert to lower case
// const test = "underscore_case".replaceAll("_", " ").toLowerCase();
// console.log(test);

// convert to array, split into 2 elements
const newWord = "underscore_case".replaceAll("_", " ").toLowerCase().split(" ");
console.log(newWord); // ['underscore', 'case']

// convert first letter of 2nd word to upper case
console.log(newWord[1][0].toUpperCase()); // C
console.log(newWord[1][0].toUpperCase() + newWord[1].slice(1)); // Case

// concatenate two array items into one with camelCase conversion
const camelWord =
  newWord[0] + newWord[1][0].toUpperCase() + newWord[1].slice(1);
console.log(camelWord);

console.log(typeof camelWord); // string

// if there are empty spaces before word, trim them

const inputData = " first_name   ";
const trimmedData = inputData.trim();
console.log(trimmedData); // first_name
console.log(trimmedData.length); // 10

// function that turns 2 element string `a_b`into camel Case string

const camelCaseConverter = function (input) {
  // receive input, remove underscore, convert to lowercase, trim, split and create array with 2 elements
  const temporaryArray = input
    .replaceAll("_", " ")
    .toLowerCase()
    .trim()
    .split(" ");

  // convert first letter of 2nd word to upper case, concatenate two array items into one
  const camelCase =
    temporaryArray[0] +
    temporaryArray[1][0].toUpperCase() +
    temporaryArray[1].slice(1);

  console.log(camelCase);
};

camelCaseConverter("underscore_case");
camelCaseConverter("  first_name");
camelCaseConverter("Some_Variable");
camelCaseConverter("  calculate_AGE  ");
camelCaseConverter("delayed_departure");
