# JavaScript Algorithms and Data Structures

<br>

1. [Golf Code](#1-golf-code)
2. [Counting Cards](#2-counting-cards)
3. [Record Collections](#3-record-collection)
4. [Profile Lookup](#4-profile-lookup)
5. [Use Recursion to Create a Countdown](#5-use-recursion-to-create-a-countdown)

<br><br>

---

<br>

## 1. Golf code

In the game of golf, each hole has a `par`, meaning, the average number of `strokes` a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below `par` your `strokes` are, there is a different nickname.
<br>

Your function will be passed `par` and `strokes `arguments. Return the correct string according to this table which lists the `strokes` in order of priority; top (highest) to bottom (lowest):
<br><br>

| Strokes    | Return         |
| ---------- | -------------- |
| 1          | "Hole-in-one!" |
| <= par - 1 | "Eagle"        |
| par - 1    | "Birdie"       |
| par        | "Par"          |
| par + 1    | "Bogey"        |
| par + 2    | "Double Bogey" |
| >= par + 3 | "Go Home!"     |

<br><br>

`par` and `strokes` will always be numeric and positive. We have added an array of all the names for your convenience.

<br><br>

**Solution**:
<br>

```js
const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  return "Change Me";
}

golfScore(5, 4);
```

<br><br>

---

<br>

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

<br><br>

You will write a card counting function. It will receive a `card` parameter, which can be a number or a string, and increment or decrement the global `count` variable according to the card's value (see table). The function will then return a string with the current count and the string `Bet` if the count is positive, or `Hold` if the count is zero or negative. The current count and the player's decision (`Bet` or `Hold`) should be separated by a single space.
<br>

Example Outputs: `-3 Hold` or 5 `Bet`
<br><br>

**Hint**
Do NOT reset `count` to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.

<br><br>

**Solution**:
<br>

```js
let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));
```

<br><br>

---

<br>

## 3. Record Collection

<br>

You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.
<br>

You start with an `updateRecords` function that takes an object literal, `records`, containing the musical album collection, an `id`, a `prop` (like `artist` or `tracks`), and a `value`. Complete the function using the rules below to modify the object passed to the function.
<br><br>

- Your function must always return the entire record collection object.

- If `prop` isn't `tracks` and `value `isn't an empty string, update or set that album's `prop` to `value`.

- If `prop` is `tracks` but the album doesn't have a `tracks` property, create an empty array and add `value` to it.

- If `prop` is `tracks` and `value` isn't an empty string, add `value` to the end of the album's existing `tracks` array.

- If `value` is an empty string, delete the given `prop` property from the album.
  <br><br>

**Note**: A copy of the `recordCollection` object is used for the tests.
<br><br>

**Hints**
<br>

For the given id parameter, which is associated with the records object:

- Use an if...else if chain to check the needed steps.
- To access the value of a key in this object, you will use `records[id][prop]` (same as `records.id.prop`).
- You can’t push to an array that doesn’t exist. Use hasOwnProperty to check first.
  <br><br>

**Solution**:
<br>

```js
const recordCollection = {
  2548: {
    // id
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi", // prop: value
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  // if prop isn't tracks and value isn't an empty string, update or set that album's prop to value (adding poperty to an object)
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  }

  // if prop is tracks but the album doesn't have a tracks property (hasOwnProperty), create an empty array ([]) and add value to it
  else if (
    prop === "tracks" &&
    records - id.hasOwnProperty("tracks") === false
  ) {
    records.id.prop = [value];
  }

  // if prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array
  else if (prop === "tracks" && value !== "") {
    records.id.prop.push(value);
  }

  // if value is an empty string, delete the given prop property from the album
  else if (value === "") {
    delete records.id.prop;
  }

  // your function must always return the entire record collection object
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
```

<br><br>

### Relevant links:

- [freeCodeCamp Challenge Guide](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-record-collection/18261)

- [Accessing Object Properties with Bracket Notation](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation)

- [Add New Properties to a JavaScript Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/add-new-properties-to-a-javascript-object)

- [Delete Properties from a JavaScript Object](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object)

- [Accessing Nested Objects](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects)

- [MDN Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- [MDN delete operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete)

- [Javascript Short-Circuit Conditionals](https://medium.com/@amaliesmidth/javascript-short-circuit-conditionals-6606bdeaa30d)

<br><br>

---

<br>

## 4. Profile Lookup

<br>

We have an array of objects representing different people in our contacts lists.
<br>

A `lookUpProfile` function that takes `name` and a property (`prop`) as arguments has been pre-written for you.
<br>

The function should check if `name` is an actual contact's `firstName` and the given property (`prop`) is a property of that contact.

- If both are true, then return the "value" of that property.

- If `name` does not correspond to any contacts then return the string `No such contact`.

- If `prop` does not correspond to any valid properties of a contact found to match `name` then return the string `No such property`.
  <br><br>

**Hints**
<br>

- use for loop to iterate through object
- check name (key) + value (prop) of the object

checking `prop`:

- `.hasOwnObject` returns `true/false` indicating wether object has a property with the name of the argument
- it only checks the properties of the object calling the function
  <br>

- `in` operator checks the property in the object calling **and in the prototype chain**

- [object.hasOwnProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

- [`in` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in)
  <br>
  <br>

**Solutions**

#### Solution 1: with `.hasOwnProperty`

<br>

```js
function lookUpProfile(name, prop) {
  // If the "firstName" parameter isn’t matched by the contacts object, the for loop exits and "No such contact" is returned
  for (let x = 0; x < contacts.length; x++) {
    // If the "firstName" parameter passed into the function matches the value of the "firstName" key in the first object, the if statement passes
    // if this statement fails, the for loop continues on to the next object in the contacts list
    if (contacts[x].firstName === name) {
      // checks if there’s a given property and returns a boolean) with prop as an argument. If it’s true, the value of prop is returned
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
        // if it fails, "No such property" is returned
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
```

<br><br>

#### Solution 2: with `in` operator

<br>

```js
function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}
```

<br><br>

---

<br>

## 4. Use Recursion to Create a Count Down

<br>

In a [previous challenge](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion), you learned how to use recursion to replace a `for `loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with `1` through the number passed to the function.
<br>

As mentioned in the previous challenge, there will be a _base case_. **The _base case_ tells the recursive function when it no longer needs to call itself.** It is a simple case where the return value is already known.
There will also be a _recursive call_ which **executes the original function with different arguments**. If the function is written correctly, eventually the base case will be reached.
<br>

For example, say you want to write a recursive function that returns an array containing the numbers `1` through `n`. This function will need to accept an argument, `n`, representing the final number. Then it will need to call itself with progressively smaller values of `n` until it reaches `1`. You could write the function as follows:
<br>

```js
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

The value `[1, 2, 3, 4, 5] `will be displayed in the console.

At first, this seems counterintuitive since the value of `n` **decreases**, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where `n` is pushed into the array, `countup(n - 1)` has already been evaluated and returned `[1, 2, ..., n - 1]`.
<br>
<br>

We have defined a function called `countdown `with one parameter (`n`). The function should use recursion to return an array containing the integers `n` through 1 based on the `n` parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with `n = 5` should return the array `[5, 4, 3, 2, 1]`. Your function must use recursion by calling itself and must not use loops of any kind.

<br><br>

**Solution**:
<br>

```js
function countdown(n) {
  // base case
  if (n < 0) {
    return [];

    // recursive call
  } else {
    const count = countdown(n - 1);
    count.unshift(n);
    return count;
  }
}

console.log(countdown(1)); // [1, 0]
console.log(countdown(5)); // [ 5, 4, 3, 2, 1, 0 ]
console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(countdown(-2)); // []
```

<br><br>

[About Recursion](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-countdown/305925/2)

<br><br>

---

## 5. Use Recursion to Create a Range of Numbers

<br>

Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.
<br>

We have defined a function named `rangeOfNumbers` with two parameters. The function should return an array of integers which begins with a number represented by the `startNum` parameter and ends with a number represented by the `endNum` parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both `startNum` and `endNum` are the same.

<br><br>

```js
// solution 1

function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum
    ? [startNum]
    : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// solution 2

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [endNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// solution 3

function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [endNum];
  } else {
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
}

console.log(rangeOfNumbers(1, 10));

// my solution

function countdown(n) {
  // base case
  if (n < 0) {
    return [];

    // recursive call
  } else {
    const count = countdown(n - 1);
    count.unshift(n);
    return count;
  }
}

console.log(countdown(1)); // [1, 0]
console.log(countdown(5)); // [ 5, 4, 3, 2, 1, 0 ]
console.log(countdown(10)); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
console.log(countdown(-2)); // []
```

<br><br>

---

## 6. Reverse array (HackerRank)

<br>

Given an array of integers, reverse the given array in plave using an index and loop rather than a built-in function.
<br>

**Example**

`arr = [1, 3, 2, 4, 5]`
<br>

Return the array `[5, 4, 2, 3, 1]` which is the reverse of the input array.
<br>

**Function Description**
<br>

Complete the function `reverseArray` in the editor below.

`reverseArray` has the following parameter(s):
int `arr[n]`: an array of integers

**Return**
`int[n]`: the array in reverse order
<br>

**Constrains**
<br>

- 1 <= n <= 100
- 0 <= arr <= 100
  <br><br>

### Input format for custom testing

<br>

The first line contains an integer, `n`, the number of elements in `arr`.

Each line `i` of the `n` subsequent lines (where `0 <= i < n`) contains an integer, `arr[i]`.
<br><br>

### Sample Case

<br>

INPUT: 5 / 1 3 2 4 5
OUTPUT: 5 4 2 3 1
<br>

**Explanation:**
<br>

The input array is `[1, 3, 2, 4, 5]`, so the reverse of the input array is `[5, 4, 2, 3, 1]`.

<br><br>

---

<br>

## 7. Iterate Through Items of Array Using For Loop

<br>

**basic-algorithms.js**
<br>

`filteredArray` takes `arr`, a nested array, and `elem` as arguments, and returns a new array.
`elem` represents an element that may or may not be present on one or more of the arrays nested within `arr`.
<br><br>

Modify the function, using a `for` loop, to return a filtered version of the passed array such that any array nested within `arr` containing `elem` has been removed.
<br><br>

```js
function filteredArray(arr, elem) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    // compare any element of the arra to the "elem" with indexOf(); -1 indicates it doesn't exist
    // arr[i] accesses the VALUE of the element on the "i" position
    if (arr[i].indexOf(elem) === -1) {
      // if a match is NOT found then newArr have that entire subarray added.
      return;
    }
  }

  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
```

<br><br>

---

<br>

## 8. Iterate Through the Keys of an Object

<br>

Use a `for...in` statement within this function to loop through the users object passed into the function and return the number of users whose `online` property is set to `true`. An example of a users object which could be passed to `countOnline` is shown below. Each user will have an `online` property with either a `true` or `false` value.

<br><br>

```js
const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  let onlineUsers = [];

  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      onlineUsers.push(user);
    }
  }

  return onlineUsers.length;
}

console.log(countOnline(users));
```

<br><br>

---

<br>

## 8. Modify an Array Stored in an Object

<br>

The `user` object contains three keys. The `data` key contains five keys, one of which contains an array of `friends`. We've started writing a function `addFriend`. Finish writing it so that it takes a `user` object and adds the name of the `friend` argument to the array stored in `user.data.friend`s and returns that array.

`user` must be referenced with the first parameter given to the `addFriend()` function

<br><br>

```js
let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  user.data.friends.push(friend);
  return userObj.data.friends;
}

console.log(addFriend(user, "Pete"));
```

<br><br>

---

### Resources

[JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
