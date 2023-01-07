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
  if (passwort.length > 7) console.log("Your password is acceptable.");
};

// YES: Without magic numbers
const MIN_PASS_SIZE = 7;

const validatePassword2 = () => {
  if (passwort.length > MIN_PASS_SIZE)
    console.log("Your password is acceptable.");
};

// Source: https://blog.gogrow.dev/say-bye-bye-to-bad-javascript-practices-5971688ba80a
