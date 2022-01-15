# JavaScript Algorithms and Data Structures

1. Golf Code
2. Counting Cards
3. Record Collections
   <br>
   <br>

---

<br>

## 1. Golf code

In the game of golf, each hole has a `par`, meaning, the average number of `strokes` a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below `par` your `strokes` are, there is a different nickname.
<br>

Your function will be passed `par` and `strokes `arguments. Return the correct string according to this table which lists the `strokes` in order of priority; top (highest) to bottom (lowest):
<br>
<br>

| Strokes    | Return         |
| ---------- | -------------- |
| 1          | "Hole-in-one!" |
| <= par - 1 | "Eagle"        |
| par - 1    | "Birdie"       |
| par        | "Par"          |
| par + 1    | "Bogey"        |
| par + 2    | "Double Bogey" |
| >= par + 3 | "Go Home!"     |

<br>
<br>

`par` and `strokes` will always be numeric and positive. We have added an array of all the names for your convenience.

<br>
<br>

---

## 2. Counting Cards

<br>

In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called [Card Counting](https://en.wikipedia.org/wiki/Card_counting).
<br>

Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
<br>

| Count Change | Cards                  |
| ------------ | ---------------------- |
| +1           | 2, 3, 4, 5, 6          |
| 0            | 7, 8, 9                |
| -1           | 10, 'J', 'Q', 'K', 'A' |

<br>
<br>

You will write a card counting function. It will receive a `card` parameter, which can be a number or a string, and increment or decrement the global `count` variable according to the card's value (see table). The function will then return a string with the current count and the string `Bet` if the count is positive, or `Hold` if the count is zero or negative. The current count and the player's decision (`Bet` or `Hold`) should be separated by a single space.
<br>

Example Outputs: `-3 Hold` or 5 `Bet`
<br>
<br>

**Hint**
Do NOT reset `count` to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

<br>
<br>

---

## 3. Record Collection

<br>

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.
<br>

You start with an `updateRecords` function that takes an object literal, `records`, containing the musical album collection, an `id`, a `prop` (like `artist` or `tracks`), and a `value`. Complete the function using the rules below to modify the object passed to the function.
<br>
<br>

- Your function must always return the entire record collection object.

- If `prop` isn't `tracks` and `value `isn't an empty string, update or set that album's `prop` to `value`.

- If `prop` is `tracks` but the album doesn't have a `tracks` property, create an empty array and add `value` to it.

- If `prop` is `tracks` and `value` isn't an empty string, add `value` to the end of the album's existing `tracks` array.

- If `value` is an empty string, delete the given `prop` property from the album.
  <br>
  <br>

**Note**: A copy of the `recordCollection` object is used for the tests.
<br>
<br>

**Hints**
<br>

For the given id parameter, which is associated with the records object:

- Use an if...else if chain to check the needed steps.
- To access the value of a key in this object, you will use `records[id][prop]` (same as `records.id.prop`).
- You can’t push to an array that doesn’t exist. Use hasOwnProperty to check first.
  <br>
  <br>

### Relevant links:

- [freeCodeCamp Challenge Guide](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-record-collection/18261)

- [Accessing Object Properties with Bracket Notation](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation)

- [Add New Properties to a JavaScript Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object)

- [Delete Properties from a JavaScript Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object)

- [Accessing Nested Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects)

- [MDN Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- [MDN delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)

- [Javascript Short-Circuit Conditionals](https://medium.com/@amaliesmidth/javascript-short-circuit-conditionals-6606bdeaa30d)

---

### Resources

[JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
