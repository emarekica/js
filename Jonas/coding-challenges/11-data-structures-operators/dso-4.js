"use strict";

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

/* 

Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.


Test data (pasted to textarea, including spaces):

underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):

underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅

Hints:

- Remember which character defines a new line in the textarea: `\r\n`
- The solution only needs to work for a variable made out of 2 words, like a_b.
- Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working.

*/

/* 

1. HOW TO REMOVE UNDERSCORE:

  1: replaceAll("_", " ")

  2: regex
    removing all underscores: .replace(/_/g, " ")
    replacing all underscores with empty space: .replace(/_/g, " ") 
    
    
2. STRING >> ARRAY conversion

console.log("Jonas Schmedtmann".split(" "));
// (2) ['Jonas', 'Schmedtmann']


3. MAKE FIRST LETTER OF THE 2nd WORD UPPER CASE

array[1].toUpperCase;


4.  Trim empty spaces before/after word: trim()
    
5. How to make page react when input is typed into text area and button is clicked?

- add event listener to textarea / button
- nest the camelCaseConverter function under event listener

*/

// -------------------- MY WORK

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

// function that turns 2 element string `a_b`into camelCase string

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
