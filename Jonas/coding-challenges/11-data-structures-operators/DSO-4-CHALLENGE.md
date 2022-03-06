# CHALLENGE 4

**Data Structures, Modern operators, Strings**

<br>

Write a program that receives a list of variable names written in `underscore_case`and convert them to `camelCase`.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

<br>

```js
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
```

<br>

Test data (pasted to textarea, including spaces):

```
underscore_case
 first_name
Some_Variable
 calculate_AGE
delayed_departure
```

<br><br>

Should produce this output (5 separate console.log outputs):

```
underscoreCase     ✅
firstName          ✅✅
someVariable       ✅✅✅
calculateAge       ✅✅✅✅
delayedDeparture   ✅✅✅✅✅
```

<br><br>

**Hints:**

- Remember which character defines a new line in the textarea: `\r\n` or `\n`.
- The solution only needs to work for a variable made out of 2 words, like `a_b`.
- Start without worrying about the ✅. Tackle that only after you have the variable
  name conversion working.

<br><br>

## STEPS: New things I have learned

<br>

1. [How to remove underscore](#1-how-to-remove-underscore)
2. [String >> array conversion](#2-string--array-conversion)
3. [Make first letter of the 2nd word uppercase](#3-make-first-letter-of-the-2nd-word-upper-case)
4. [Trim empty spaces before/after word](#4-trim-empty-spaces-beforeafter-word)
5. [How to make a page react when input is typed into textarea and button is clicked](#5-how-to-make-a-page-react-when-input-is-typed-into-textarea-and-button-is-clicked)
6. [How to get the input from the textarea to JS](#6-how-to-get-the-input-from-the-textarea-to-js)
7. [How to split the input into 5 different console.logs](#7-how-to-split-the-input-into-5-different-consolelogs)
8. [How to make all symbols start at the same position](#8-how-to-make-all-symbols-start-at-the-same-position)
9. [How to add emojis + add 1 each time](#9-how-to-add-emojis--add-1-each-time)

<br>

---

<br>

### 1. HOW TO REMOVE UNDERSCORE

<br>

**method 1:** `replaceAll("_", " ");`
<br><br>

**method 2: regex**

    removing all underscores: .replace(/_/g, " ")
    replacing all underscores with empty space: .replace(/_/g, " ")

<br><br>

**method 3:**

Split with `"_"` and make 2 strings at the same time.

The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call: search for pattern of underscore with `split("_");`
<br>

```js
let row = "underscore_case";
const [first, second] = row.split("_");

console.log(first, second);
```

<br>

---

<br>

### 2. STRING >> ARRAY CONVERSION

<br>

```js
console.log("Jonas Schmedtmann".split(" "));
// (2) ['Jonas', 'Schmedtmann']
```

<br>

---

<br>

### 3. MAKE FIRST LETTER OF THE 2nd WORD UPPER CASE

<br>

`array[1].toUpperCase;`

<br>

---

<br>

### 4. TRIM EMPTY SPACES BEFORE/AFTER WORD

<br>

`trim();`

<br>

---

### 5. HOW TO MAKE A PAGE REACT WHEN INPUT IS TYPED INTO `textarea` AND BUTTON IS CLICKED

<br>

- How to add event listener to textarea / button?
- How to nest the camelCaseConverter function under event listener?
  <br>

```js
document.querySelector("button").addEventListener("click", function () {
  ... add the function here ...
}
```

<br>

---

<br>

### 6. HOW TO GET THE INPUT FROM THE `textarea` TO JS

<br>

- select the DOM element
- add .value to it
- console log it
  <br>

```js
const text = document.querySelector("textarea").value;

console.log(text);
// prints out in the console whatever is written in the text area
```

<br>

---

<br>

### 7. HOW TO SPLIT THE INPUT INTO 5 DIFFERENT `console.logs`

<br>

- make a string with 5 elements
- use the symbol for a new line: `\n`
  <br>

`const rows = text.split(`\n`);`

<br>

---

<br>

### 8. HOW TO MAKE ALL SYMBOLS START AT THE SAME POSITION

<br>

All of the string input at the start of emojis should have the same length:

    `padEnd()` + set to fixed length of 20 and at the end should be an empty string:

        `output.padEnd(20, " ");`

If you want **empty spaces at the end**, just ommit the second argument:

    `output.padEnd(20,);`

<br>

---

<br>

### 9. HOW TO ADD EMOJIS + ADD +1 EACH TIME

<br>

Adding emojis:

    console.log(`{output.padEnd(20)}✅`)

<br>

- for adding 1 more emoji each iteration use current index
- to get the current index in the `for...of` loop, use `entries()` of the array
- treat the `row` as an array of `[index, element]` with use of destructuring
- use the index of the emoji: `"✅".repeat(i) + 1);`
  you need to `+1` because it starts at `i = 0`

  <br>

```js
for (const [i, row] of rows.entries()) {
  // split in two strings
  const [first, second] = row.toLowerCase().trim().split("_");

  // get second word capitalized
  const output = `${first}${second[0].toUpperCase() + second.slice(1)}`;

  // adding emojis: add fixed length + 1 emoji each iteration
  console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
}
```
