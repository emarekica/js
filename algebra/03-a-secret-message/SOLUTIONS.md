**decription only**

1. loop through the encoded text (each character) *UPPERCASE ONLY*
2. get unicode number for each letter (if not a letter, let through)
3. decode with given shift

---

[Check & study the Cipher](https://www.xarg.org/tools/caesar-cipher/)

---

### 1

```js
var caesarShift = function (str, amount) {
  // Wrap the amount
  if (amount < 0) {
    return caesarShift(str, amount + 26);
  }

  // Make an output variable
  var output = "";

  // Go through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {
      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if (code >= 65 && code <= 90) {
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      }
    }

    // Append
    output += c;
  }

    // All done!
  return output;
};


console.log(caesarShift("HOWAMIDOINGSOFAR", 4));
console.log(caesarShift("MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX", -4));
```

---

### 2 - fali "Y"

```js
//check if letter is uppercase
function isUpperCase(str) {
  return str === str.toUpperCase();
}

//decipher the string
let ceaserCipher = (str, key) => {
let decipher = '';

//decipher each letter
for(let i = 0; i < str.length; i++){
  
  //if letter is uppercase then add uppercase letters
  if(isUpperCase(str[i])){
    decipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
  }
}


return decipher;
}

console.log(ceaserCipher('HOWAMIDOINGSOFAR', 4));
console.log(ceaserCipher('MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX', -4));
```

---

### 3 - fali "Y"

```js
function caesarCipher(str, key) {
  return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
};

//Input:
console.log(caesarCipher("HOWAMIDOINGSOFAR", 4));
console.log(caesarCipher("MJCSYGERVIEHXLMWCSYEVIHSMRKKVIEX", -4));
```