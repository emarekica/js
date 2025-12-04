// -------------- RADIX

// The radix or base is the number of unique digits, including the digit zero, used to represent numbers. For example, for the decimal/denary system (the most common system in use today) the radix (base number) is ten, because it uses the ten digits from 0 through 9.

// Use the parseInt Function with a Radix
// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.

// The function call looks like:
// parseInt(string, radix);

// And here's an example:
// const a = parseInt("11", 2);

// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.

// EXAMPLE
// Use parseInt() in the convertToInteger function so it converts a binary number to an integer and returns it.
function convertToInteger(str) {
  return parseInt(str, 2);
}

console.log(convertToInteger("1001100010101"));
