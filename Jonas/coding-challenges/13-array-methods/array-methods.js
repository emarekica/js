"use strict";

// 5 dogs >> 5 arrays
// puppy ( < 3y )or adult ( >= 3y )?

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia = [9, 16, 6, 8, 3];
const dogsKate = [10, 5, 6, 1, 4];

const checkDogs = function (dogsJulia, dogsKate) {
  // create a shallow copy of Julia's array, and remove the cat ages (last two) from that copied array

  // const dogsJuliaNew = dogsJulia.slice();
  const dogsJuliaNew = [...dogsJulia];
  dogsJuliaNew.splice(0, 1);
  dogsJuliaNew.splice(-2);

  // also valid, no need for splice:
  // dogsJulia.slice(1, 3);

  // create array with both Julia's (corrected) and Kate's data
  const dog = dogsJuliaNew.concat(dogsKate);

  // for each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old.") or a puppy ("Dog number 2 is still a puppy.")

  dog.forEach(function (dog, i) {
    if (dog < 3) {
      console.log(`Dog number ${i + 1} is a puppy and it is ${dog} years old.`);
    } else if (dog >= 3) {
      console.log(
        `Dog number ${i + 1} is an adult and it is ${dog} years old.`
      );
    }
  });
};

checkDogs(dogsJulia, dogsKate);

// ----------------------------------- 2

// map
// retruns array of all resutls of applying an operation on the original array

// filter
// returns array of elements that passed a certain test condition
// uses callback, returns boolean, access to el/i/arr

// reduce
// boils down the array to one single value

// --- Create a function `calcAverageHumanAge`, which accepts an arrays of dog's ages (`ages`), converts dog ages to human ages and calculates the average age of the dogs

// 1: calculate the dog age in human years using the following formula (map):

//        if the dog is <= 2 years old, humanAge = 2 * dogAge
//        if the dog is > 2 years old, humanAge = 16 + dogAge * 4

// 2: exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old) (filter)

// Calculate the average human age of all adult dogs

//        add all the numbers, then divide by their number: (a + b + c) / 3

const ages1 = [5, 2, 4, 1, 15, 8, 3];
const ages2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  // convert dog ages to human ages
  const humanAge = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAge);

  const adultDogs = humanAge.filter((age) => (age >= 18 ? true : false));
  console.log(adultDogs);

  // calculate the average age of the dogs
  const averageDogHumanAge = adultDogs.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  return averageDogHumanAge;
};

const avgDogAge1 = calcAverageHumanAge(ages1);
const avgDogAge2 = calcAverageHumanAge(ages2);

console.log(avgDogAge1);
console.log(avgDogAge2);
