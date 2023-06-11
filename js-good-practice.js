// *** Destructuring assignment

// Longhand array destructuring assignment
let numbers = [1, 2, 3];
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];

// Shorthand array destructuring assignment
let numbers2 = [1, 2, 3];
let [x, y, z] = numbers;

// Longhand object destructuring assignment
let person = { name: 'John', age: 30 };
let name = person.name;
let age = person.age;

// Shorthand object destructuring assignment
let person2 = { name: 'John', age: 30 };
let { name2, age2 } = person;


// *** CONST instead of VAR

// *** COMMENTS: don't write what you do, write WHY you do it

// *** "==" vs "==="

// NO
const number = 1;
const string = "1";

console.log(number == string); // true

// YES
const anotherNumber = 2;
const anotherString = "2";
console.log(anotherNumber === anotherString); // false

// *** OPTIONAL CHAINING
// When using optional chaining (?), Javascript will tell us that the property is undefined but will not generate any error

const piano = {
  maker: "Bosendorfer",
  info: {
    model: "150 VC",
    year: 2023,
  },
};

console.log(piano?.info?.model); // 150 VC
console.log(piano.info.model); // error
console.log(piano?.info?.length); // undefined

// *** MAGICAL NUMBERS & STRINGS
// assign them to constants

// NO: With magic numbers
const validatePassword1 = () => {
  if (password.length > 7) console.log("Your password is acceptable.");
};

// YES: Without magic numbers
const MIN_PASS_SIZE = 7;

const validatePassword2 = () => {
  if (password.length > MIN_PASS_SIZE)
    console.log("Your password is acceptable.");
};

// Source: https://blog.gogrow.dev/say-bye-bye-to-bad-javascript-practices-5971688ba80a
