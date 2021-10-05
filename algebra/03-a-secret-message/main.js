function caesarCipher(input, shift) {
  // Wrap the shift
  if (shift < 0) {
    return caesarCipher(input, shift + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < input.length; i++) {
    // Get the character we'll be appending
    var c = input[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = input.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }
    }

    // Append
    output += c;
  }

    // All done!
  return output;
}

console.log(caesarCipher("HOWAMIDOINGSOFAR", 4));  
console.log(caesarCipher("MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX", -4));

// LSAEQMHSMRKWSJEV
// IFYOUCANREADTHISYOUAREDOINGGREAT




// * `input` - string, uppercase A-Z letters only.
// * `shift` - number, how many letters to shift each input character by.

// The function requirements are:

// 1. The function must return a string result for valid input arguments.
// 1. The `shift` parameter must be an integer (both positive and negative values must be supported). 
// 1. The `input` parameter must be a valid string of one or more uppercase letters of the English alphabet (A-Z).
