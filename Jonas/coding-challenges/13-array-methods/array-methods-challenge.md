# ARRAY METHODS - CODING CHALLENDE

<br><br>

## Part 1

<br>

Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

<br><br>

**Task**

<br>

Create a function `checkDogs`, which accepts 2 arrays of dog's ages (`dogsJulia` and `dogsKate`), and does the following things:
<br>

1. Julia found out that the owners of the first and the last two owners actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters).
   <br><br>

2. Create an array with both Julia's (corrected) and Kate's data.
   <br><br>

3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶").
   <br><br>

4. Run the function for both test datasets.
   <br><br>

**Test data**

<br>

- **Data 1**: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
- **Data 2**: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
  <br><br><br>

---

## Part 2

<br>

Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.
<br><br>

**Task**

<br>

Create a function `calcAverageHumanAge`, which accepts an arrays of dog's ages (`ages`), and does the following things in order:
<br>

1.  Calculate the dog age in human years using the following formula:

        if the dog is <= 2 years old, humanAge = 2 * dogAge
        if the dog is > 2 years old, humanAge = 16 + dogAge * 4

    <br><br>

2.  Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old).
    <br><br>

3.  Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉).
    <br><br>

4.  Run the function for both test datasets.
    <br><br>

**Test data**

<br>

- Data 1: [5, 2, 4, 1, 15, 8, 3]
- Data 2: [16, 6, 10, 5, 6, 1, 4]

<br><br>

---

## Part 3

<br>

Rewrite the `calcAverageHumanAge` function from Challenge #2, but this time
as an arrow function, and using chaining.
<br><br>

Test data:

- Data 1: [5, 2, 4, 1, 15, 8, 3]

- Data 2: [16, 6, 10, 5, 6, 1, 4]

<br><br>

---

## Part 4

<br>

Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
<br><br>

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array.
   The result is in grams of food, and the weight needs to be in kg
   <br><br>

**Forumla**: recommendedFood = weight \*_ 0.75 _ 28
<br><br>

**Work notes**:
<br><br>

Formula:

    recommendedFood = weight ** 0.75 * 28
    food = g, weight = kg

<br>

How to select key-values in the object:

    weight = dogs.weight

<br>

**Methods used**:

- `forEach()` >> loops over arr, doesn't create new; takes callback

- `Math.trunc()` >> eturns the integer part of a number by removing any fractional digits

<br><br>

2. Find Sarah's dog and log to the console whether it's eating too much or too little.
   <br>

_HINT_: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose).
<br><br>

**Work notes**:
<br>

**1: Find a dog with owner Sarah**
<br>

    [ { [3, [1]] } ]

<br>

Select it:
<br>

    dogs.owners.includes()

<br><br>

Looping over arrays nested in objects:
<br>

` find()` the object inside of the original array that
`includes()` "Sarah" as owner

<br><br>

**2: Compare**:
<br>

Formula:
<br>

dog.recommendedFood > (recommended _ 0.90) && dog.recommendedFood < (recommended _ 1.10)
<br><br>

Condition:
<br>

    if (dog.recommendedFood > (recommended * 0.90) && dog.recommendedFood < (recommended * 1.10)) {
      console.log("The dog eats OK");
    }
    else if (dog.recommendedFood < (recommended * 0.90)) {
      console.log("The dog eats too little.");
    }
    else if (dog.recommendedFood > (recommended * 1.10)) {
      console.log("The dog eats too much");
    }

<br><br>

OR:

    currentFood > recommendedFood = too much
    currentFood < recommendedFood = too little

<br><br>

3. Create an array containing all owners of dogs who eat too much (`ownersEatTooMuch`) and an array with all owners of dogs who eat too little (`ownersEatTooLittle`).
   <br><br>

**Work notes**:
<br>

1.  check if the current food is too much/little >> `filter()`
    <br>

        dog.curFood > dog.recommendedFood ? "much" : "little"

    <br>

2.  put all dogs that eat too much in one array >> `push()`
    <br>

3.  put all dogs that eat too little in onther array >> `push()`
    <br><br>

**Methods used**:

- `filter()`

- `push()` >> `.push(dog.owners)` because you need only owners

- `flat()` >> create a new array by flattening the old one with nested arrays of owners

<br><br>

4. Log a string to the console for each array created in 3., like this: _"Matilda and Alice and Bob's dogs eat too much!"_ and _"Sarah and John and Michael's dogs eat too little!"_ .
   <br><br>

**Work notes**:
<br>

Ennumerate all the owners/elements from the array >> `join()`

It creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

use: `( and )`

<br><br>

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just `true` or `false`).
   <br><br>

**Methods used**:

- `some()`

<br><br>

6. Log to the console whether there is any dog eating an OKAY amount of food (just `true` or `false`).
   <br><br>

Make the function outside.

**Methods used**:

- `some()`

  <br><br>

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.).
   <br><br>

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects).
   <br><br>

Get the last element of an array:
<br>

    array.slice(-1);

<br><br>

_HINT 1_: Use many different tools to solve these challenges, you can use the summary lecture to choose between them.
<br>

_HINT 2_: Being within a range 10% above and below the recommended portion means:
<br>

    current > (recommended _ 0.90) && current < (recommended _ 1.10)

<br><br>

- `slice()` >> shallow copy
  <br>

- `sort()` >> sort by some order (default: ascending)

// a, b (keep order ascending) if a < b

<br>

By selecting `a.recommendedFood` and `b.recommendedFood`, you select the element you want to sort.

<br><br>

Basically, the current portion should be between 90% and 110% of the recommended portion.
<br><br>

**TEST DATA:**
<br>

```js
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
```
