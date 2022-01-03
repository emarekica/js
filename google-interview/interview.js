//----------------------------------------------------------------- LONGEST WORD
// finds longest string (subsequence) in an array (in a list of subsequences)
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

let longest = longestWord(listOfWords);
console.log(longest);

// ----------------------------------------------------------------- MAP STRING
// determines what characters are in a string and where they appear
// turns a string into an object that can be used to look up indices of different characters
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
console.log(object);

// ----------------------------------------------------------------- FIND NEXT INDEX
// determines if a character is in the correct order
function findNextIndex(array, minIndex) {
  for (let index of array) {
    if (index >= minIndex) {
      return index + 1;
    }
  }
  return false;
}

// ----------------------------------------------------------------- IS SUBSEQUENCE
// determines if a string is a subsequence of another string (a map)
function isSubsequence(word, map) {
  let minIndex = 0;
  for (let letter of dictionary) {
    if (map[letter]) {
      minIndex = findNextIndex(map[letter], minIndex);
      if (minIndex === false) {
        return false;
      } else {
        return false;
      }
    }
  }
  return true;
}

// ----------------------------------------------------------------- LONGEST MATCH
// main function

const stringSequence = "javascript";
const dictionary = ["art", "vascular", "avast", "javas", "vat"];

function longestMatch(stringSequence, dictionary) {
  // mapping string so we know what letters and their indices
  let map = mapString(stringSequence);

  // empty array that will store all subsequences
  let listOfSubsequences = [];

  // figuring out which strings in dictionary are subsequences
  for (let element of dictionary) {
    if (isSubsequence(element, map)) {
      listOfSubsequences.push(element);
    }
  }
  return longestWord(listOfSubsequences);
}

console.log(stringSequence);
console.log(dictionary);
console.log(longestMatch(stringSequence, dictionary));
