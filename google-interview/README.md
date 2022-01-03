# FIND THE LONGEST SUBSEQUENCE

This challenge has been found in the Grasshoppet app made by Google. It is a question from a real world Google job interview for developers, in JavaScript.

## Instructions

Write a function that takes a string (`stringSequence`) and an array of strings (`dictionary`) and returns the longest subsequence of `stringSequence` from `dictionary`.
<br>

Given a string `stringSequence` and an array of strings `dictionary`, find the longest word in the dictionary that is a subsequence of `stringSequence`.

Reminder: a string is a subsequence of another string if all of its letters appear and are in the same order.
For example, _yup_ is a subsequence of _syrup_.
<br>
<br>

### Analysis

mainFunction(string, arrayOfStrings)

**functions used**

1. `longestWord()`

Finds longest subsequence in a list of subsequences, helper function

- input: **array of strings**
- output: the **longest string** in the array

```js
function longestWord(array) {
  let longestWord = "";

  for (let word of array) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

let listOfWords = ["llama", "alpaca", "camel"];

// gives the variable "longest" the value
let longest = longestWord(listOfWords);
console.log(longest); // alpaca
```

<br>

The function takes an array of strings and declares the `longestWord` variable to store an empty string. The function then iterates through the array and updates `longestWord` each time it finds a string that is longer than the last `longestWord`. When the iteration is complete, `longestWord` is returned.
<br>
<br>

2. `mapString()`

Helper function that determines what characters are in a string and where they appear.
The function takes a string and returns an object. The object contains a property for each character in the string.
Each property stores an array containing the indices where the cahracter appears.

Example: the string `"boo"` would become the object: `{ b: [0]; o: [1, 2]}`

- input: a **string**
- output: an **object** that can be used to look up indices of i+different letters from the unput string
  <br>

```js
function mapString(string) {
  let map = "";
  for (let i = 0; i < string.length; i++) {
    let letter = string[i];

    if (map[letter]) {
      map[letter].push(i);
    } else {
      map[letter] = [i];
    }
  }
  return map;
}

let object = mapString("zigzag");
console.log(object); // { z: [0, 3; i: [1]; g: [2, 5]; a: [4]}
```

<br>

The function takes a string, and declares an empty object. The function then iterates through the string and checks if a property exists in the object for each character. If it does, it pushes the index of the current character to the array contained in the property.If the property does not exist, it creates one, and sets its value to an array storing the index of the current character.
<br>
<br>

3. `findNextIndex()`

Helper function used by `isSubsequence` function to determine if a character is in the correct order.

- input: an **array of indices** for a specific letter, the minimum index to start searching
- output: the next minimum **index** to start searching
  <br>

```js
function finNextIndex(array, minIndex) {
  for (let index of array) {
    if (index >= minIndex) {
      return index + 1;
    }
  }
  return false;
}
```

<br>

The function takes the array of indices stored in the map object, and the current value of `minIndex`. If it finds an index in the array that is greater than or equal to the `minIndex`, it returns that `index + 1` (the +1 allows the `minIndex` to increment). If a valid index can not be found in the array, the function returns `false`.

If we're trying to find the next letter of a subsequence, this function will find that letter and then return the next minimum index that can be searched.
<br>
<br>

4. `isSubsequence()`

A helper function that is used to determine if a string is a subsequence of another string.
The function takes a string and an object that is a mapped version of another string, and returns `true` if the string is a subsequence, or `false` if it is not.
The function can be used in an if statement to test whether some dictionary word is a subsequence of another mapped word.

```js
function isSubsequence(word, map) {
  let minIndex = 0;
  for (let letter of dictionaryWord) {
    if (map[letter]) {
      minIndex = finNextIndex(map[letter], minIndex);
      if (minIndex === false) {
        return false;
      } else {
        return false;
      }
    }
  }
  return true;
}
```

<br>

The function checks if each character in the string exists in the object. If it does, it uses the `findNextIndex()` helper function to check if the characters are in the correct order.
<br>
<br>

### Creating a list of all subsequences of `stringSequence`

1. Loop through each word in the `dictionary`.

2. Test each word using `isSubsequence`.

3. Add the words that pass the test to an array.

<br>
<br>
<br>

## Summary

The function takes a string (`stringSequence`) and an array of strings (`dictionary`).
<br>

The function creates a local variable to store an empty array.
This array will eventually store all of the strings that are subsequence.

Example: `let subsequences = [];`
<br>

The `mapString()` helper function maps the `stringSequence` string and stores the object that the function returns in a local variable.

Example: `let map = mapString (stringSequence);`
<br>

The function iterates through the `dictionary` array of strings.
<br>

While the function iterates, the `isSubsequence` helper function compares the current string with the map object and returns `true`or `false`.
<br>

If the `isSubsequence()` function returns `true`, then the current string is pushed to the `subsequences` array.
<br>

Finally, the `longestWord()` helper function returns the longest word in the `subsequence` array.
