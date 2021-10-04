1. string manipulation
2. string methods 
3. string 1 containing ASCII code
4. string 2 containing the message
5. string methods to use (?): split(), replace()

6. **uppercase letters only (65-90 ASCII), RegEx /A-Z/g**

7.
  **Methods**
  - **`string.charCodeAt()`** : Convert string to unicode.
  - **`string.fromCharCode()`** : Convert unicode to string.

8. [most helpful link](https://www.thatsoftwaredude.com/content/11425/implementing-a-caesar-cipher-in-javascript)

9. [ASCII table](https://theasciicode.com.ar/)

---

[Digital Ocean - On manipulating string](https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascript)

---

  ## Accessing characters in a string

  **INDEXING STRINGS**

  -- each character in a JavaScript string can be accessed by an index number
  -- each of the characters in a string correspond to an index number, starting with 0
  -- the whitespace characters also have an index
  
**a) using square bracket notation**
```
const string = "How are you?";
"How are you?"[5]; // r
```

>### Return string value based on the index number 

b) charAt() method to return the character using the index number as a parameter
```
"How are you?".charAt(5);  // r
```

**slice()**
-- returns the characters between two index numbers
-- first parameter will be the starting index number, second parameter will be the index number where it should end
-- will return what is between, but not including, the last parameter
```
 "How are you?".slice(8, 11);   // you
```

-- if a second parameter is not included, slice() will return everything from the parameter to the end of the string
```
"How are you?".slice(8);   // you?
```


>### Return index numbers based on the provided string character

c) **indexOf()** to return the index number by the first instance of a character

    "How are you?".indexOf("o");   // 1

d) **lastIndexOf()** is used to find the last instance

    "How are you?".lastIndexOf("o");  // 9



**split()**
  -- splitting a string by a character and creating a new array out of the sections
  -- if an empty parameter is given, it will create a comma-separated array with each character in the string
  -- you can determine how many words are in a sentence
  
```js
const originalString = "How are you?";

// Split string by whitespace character
const splitString = originalString.split(" ");

console.log(splitString);    // [ 'How', 'are', 'you?' ]
```


**replace()**
  -- search a string for a value, and replace it with a new value
  -- only affects the first value
  -- it takes 2 parameters: 
          1. the value to be found
          2. the value to replace it with
          
```js
  const originalString = "How are you?"

  // Replace the first instance of "How" with "Where"
  const newString = originalString.replace("How", "Where");

  console.log(newString);  // Where are you?
```

**replace() + RegEx**
-- use the g (global) flag to catch all instances of a value
-- use the i (case insensitive) flag to ignore case

```js
 const originalString = "Javascript is a programming language. I'm learning javascript."

  // Search string for "javascript" and replace with "JavaScript"
  const newString = originalString.replace(/javascript/gi, "JavaScript");
 console.log(newString);  
    // JavaScript is a programming language. I'm learning JavaScript.
```


**map()**

Creates a new array populated with the results of calling a provided function on every element in the calling array

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```


**charCodeAt()**

**Return the Unicode** of the first character in a string (the Unicode value for "H"):

```js
let str = "HELLO WORLD";
str.charCodeAt(0)    // Returns 72
```


**join()**

- creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string


```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```
---




 
* **[Explore the Caesar cipher on Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)**


**Two situations** can be considered:

1. an attacker knows (or guesses) that some sort of simple substitution cipher has been used, but not specifically that it is a Caesar scheme;
2. an attacker knows that a Caesar cipher is in use, but does not know the shift value.

  >2a. Since there are only a limited number of possible shifts (25 in English), they can each be tested in turn in a brute force attack. 
  One way to do this is to write out a snippet of the ciphertext in a table of all possible shifts – a technique sometimes known as "completing the plain component".

  >2b. Another brute force approach is to match up the frequency distribution of the letters. By graphing the frequencies of letters in the ciphertext, and by knowing the expected distribution of those letters in the original language of the plaintext, a human can easily spot the value of the shift by looking at the displacement of particular features of the graph. 


---
* [Explore the ASCII character encoding standard](https://en.wikipedia.org/wiki/ASCII)

= American Standard Code for Information Interchange

-- character encoding standard for electronic communication
-- ASCII codes represent text in computers, telecommunications equipment, and other devices. 
-- most modern character-encoding schemes are based on ASCII, although they support many additional characters


>**character order**
definira kodove za 33 kontrolna znaka, kojima se utječe na način ispisa teksta, te sljedećih 95 znakova za sam prikaz teksta (prvi znak je razmak)

 !"#$%&'()*+,-./0123456789:;<=>?
@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_
`abcdefghijklmnopqrstuvwxyz{|}~

[ASCII table](https://theasciicode.com.ar/)



--- 

**potencijalna rješenja**

(https://medium.com/suyeonme/js-an-algorithm-a-day-caesar-cipher-77bc58cf3117)


**The easiest way** to solve it uses ASCII.
ASCII codes represent text in computers.
Every key on the keyboard has its ASCII number.

  You have to create a function(str, num) and return string pushed as input number.

  *pseudocode*

  Input string: “AB”
  Input number: 1
  output: “BC”
  Input string: “z”
  Input number: 1
  output: “a”

  ```js
  function solution(s, n) {
    return s
      .split('')
      .map(c => {
        const ascii = c.charCodeAt(0);
        if (' ' == c) return c;

    return c.toUpperCase().charCodeAt(0) + n > 90
          ? String.fromCharCode(ascii + n - 90 + 64)
          : String.fromCharCode(ascii + n);
      })
      .join('');
  }
  ```
  
  1. Select all alphabets both of uppercase and lowercase.
  2. Loop strings and check unicode of each of them. In unicode, Alphabet starts at 65. Uppercase is between 65 and 90. Lowercase is between 97 and 122.
  3. Convert ASCII to string and return it

  **Methods**
  - `string.charCodeAt()` : Convert string to unicode.
  - `string.fromCharCode()` : Convert unicode to string.

  [Unicode list](https://en.wikipedia.org/wiki/List_of_Unicode_characters)

---

(https://www.codegrepper.com/code-examples/javascript/Caesar+cipher+js)

```js
function rot13(str) {
  var charcode = [];
  var words = [];

  for(let i = 0; i < str.length; i++){
    
    var asc = str.charCodeAt(i)
    
    charcode.push(asc)
  }

  var converted = charcode.map(function(a){
    return a-13
  })
  
  console.log(converted)
  
  converted.forEach((letter)=>{
    if(letter >= 65){
      var final =String.fromCharCode(letter)
      words.push(final)
    }
    else if(letter>=52){
      final = String.fromCharCode(letter+26)
      words.push(final)
    }
    else {
      final = String.fromCharCode(letter+13)
      words.push(final)
    }
  
  })
  return words.join("")
}

console.log(rot13("SERR YBIR?"));
```

```js
var myCipher = [];
var myArray = []; 
      
      for (i=0; i < str.length; i++) {
        // convert character - or don't if it's a punctuation mark.  Ignore spaces.
        if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
             myArray.push(String.fromCharCode(str.charCodeAt(i) + 13));
         } else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) { 
             myArray.push(String.fromCharCode(77 - (90 - str.charCodeAt(i))));
         } else if (str.charCodeAt(i) > 32 && str.charCodeAt(i) < 65) {
             myArray.push(str.charAt(i));
         }
       
        // push word onto array when encountering a space or reaching the end of the string
        
        if (str.charCodeAt(i) == 32) {
          myCipher.push(myArray.join(''));
          myArray.length = 0;      
        }
        
        if (i == (str.length - 1)) {
           myCipher.push(myArray.join(''));
        }
      }
      return myCipher.join(" ");
    }
```

---

(https://www.thatsoftwaredude.com/content/11425/implementing-a-caesar-cipher-in-javascript)

-- involves shifting the letters of the alphabet by 'n' amount ether to the **left or right**
-- single character replacement mechanism

**method** 

We create the new shifted alphabet ahead of time and perform a 1 to 1 lookup to find the new character to replace.

Start by creating 2 different variables.
  1. represents the original alphabet in the original language, stored as one large string. 
  2. represents the new shifted alphabet based on the 'n' shift parameter. That value will be empty by default.

  ```js
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var newalpha = "";
  ```

Next, setup a **function to create the newly shifted alphabet**.
The algorithm essentially looks ahead by 'n' characters and it wraps around back to the beginning once it reaches the end of the alphabet.

This will give you the new alphabet to work with for the encoding phase.

```js
function shift(n){
	for (let i = 0; i < alphabet.length; i++){
		let offset = (i + n) % alphabet.length;
		newalpha += alphabet[offset];
	}
}
```

#### encoding phase

Create the actual **encoding function**.
Take each of the letters in a given message and find its replacement character in the new alphabet
See it in action with a n = 1 shift to the righ.

```js
function encode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = alphabet.indexOf(message[i]);
        result += newalpha[index];
    }
    return result;
}
```

#### decoding phase

You have to work backwards to decode the new message.
The process is essentially identical to the encoding, only the **new alphabet will be used as the lookup table**.

```js
function decode(message){
    let result = "";
    message = message.toLowerCase();
    for (let i = 0; i < message.length; i++){
        let index = newalpha.indexOf(message[i]);
        result += alphabet[index];
    }
    return result;
}
```

---

**(http://codeniro.com/caesars-cipher-algorithm-javascript/)**

```js
var mode = "ceaser";
var shift;
function encrypt(text, shift) {
    var result = "";
    if (mode == "ceaser"){
 
        //loop through each caharacter in the text
        for (var i = 0; i < text.length; i++) {
              
             //get the character code of each letter
            var c = text.charCodeAt(i);
 
            // handle uppercase letters
            if(c >= 65 && c <=  90) {
               result += String.fromCharCode((c - 65 + shift) % 26 + 65); 
 
            // handle lowercase letters
            }else if(c >= 97 && c <= 122){
                result += String.fromCharCode((c - 97 + shift) % 26 + 97);
 
            // its not a letter, let it through
            }else {
                result += text.charAt(i);
            }
        }
    }
    return result;
}
 
function decrypt(text,shift){
    var result = "";
    shift = (26 - shift) % 26;
    result = encrypt(text,shift);
    return result;
}   
```

---

(https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript)

```js
function rot13(str) {

var alphabets =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'," ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

var alphabets13 = ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M', " ", "-", "_", ".", "&","?", "!", "@", "#", "/"];

var resultStr = [];
for(let i=0; i<str.length; i++){
    for(let j =0; j<alphabets.length; j++){
        if(str[i] === alphabets[j]){
        resultStr.push(alphabets13[j]);
        }
    }
}
return resultStr.join("");
};

rot13("SERR CVMMN!");
```


---

(https://gist.github.com/EvanHahn/2587465)


"Encrypt" like this:

```js
caesarShift('Attack at dawn!', 12);    // Returns "Mffmow mf pmiz!"
````

And "decrypt" like this:

```js
caesarShift('Mffmow mf pmiz!', -12);    // Returns "Attack at dawn!"
```

-- only works with ASCII characters
-- 65 and 95 is for ascii range of lowercase and uppercase characters

>There is only 26 characters in ascii, if you don't mod encrypt string by 26, encyrpted string will fall outside ascii range. for example ç => % or z = İ etc.
>If you mod it by 26, encrypted string will be only ascii too, so it is guarentied it'll be human-readable

>You want to move it to the left by 65 so A is no code 65 but 0 so you have
  0 A
  1 B
  2 C ...
  so then you can easily go to the begining of alphabet when you go past 25th letter which has code 90 - Z (when moved to the left by 65 it's code is 25)
  But then at the end you have to add again this 65 so you have your letter code and not the position in alphabet.

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

      // Lowercase letters
      else if (code >= 97 && code <= 122) {
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }

    // Append
    output += c;
  }

    // All done!
  return output;
};

```

in ES:

```js
const caesar = (text, shift) => {
  return String.fromCharCode(
    ...text.split('').map(char => ((char.charCodeAt() - 97 + shift) % 26) + 97),
  );
};
```

---
**one-liner using `array.prororype.replace()`**

```js
function shift(letter, k, code) {
    return String.fromCharCode(((letter.charCodeAt() - code + k) % 26) + code);
}

function caesarCipher(s, k) {
    return s.replace(/[a-z]/g, char => shift(char, k, 97)).replace(/[A-Z]/g, char => shift(char, k, 65));
}
```

or

```js
function isCharacterAMinLetter(char) {
  return (/[a-z]/).test(char)
}

function isCharacterAMajLetter(char) {
  return (/[A-Z]/).test(char)
}

function shift(letter, k, code) {
   return String.fromCharCode(((letter.charCodeAt() - code + k) % 26) + code);
}

return s.replace(/[A-Za-z]/g, char => {
  // check if min letter
  if (isCharacterAMinLetter(char)) {
      return shift(char, k, 97);
  } 
  // check if maj letter
  else if (isCharacterAMajLetter(char)) {
      return shift(char, k, 65);
  }
});
```
---

(https://learnersbucket.com/examples/algorithms/caesar-cipher-in-javascript/)

*pseudocode*

```
Input:
text = ABCD , Key = 13
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
13 shift to A is N
13 shift to B is O
13 shift to C is P
13 shift to D is Q

Output:
NOPQ
```

-- use different keys or dynamic keys and mathematical calculation
-- use string inbuilt methods and **RegEx**

```js
let caesarCipher => (str, key) {
  return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
}

Input:
console.log(ceaserCipher('ATTACKATONCE', 13));
console.log(ceaserCipher('PRASHANTYADAV', 13));

// Output:
// "NGGNPXNGBAPR"
// "CENFUNAGLNQNI"
```

-- loop through each letter of the string and check if its uppercase or lowercase
-- then decipher each letter of the string using mathematical computation
-- use constant space

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
    }else{
      //else add lowercase letters
      decipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
    }
  }
  
  
  return decipher;
}

Input:
console.log(ceaserCipher('ATTACKATONCE', 13));
console.log(ceaserCipher('prashantyadav', 13));

// Output:
// "NGGNPXNGBAPR"
// "cenfunaglnqni"
```





---

(https://www.tutorialspoint.com/encrypting-a-string-using-caesar-cipher-in-javascript)

```js
const str = 'thisIsAString';
const getMap = (legend, shift) => {
   return legend.reduce((charsMap, currentChar, charIndex) => {
      const copy = { ...charsMap };
      let ind = (charIndex + shift) % legend.length;
      if (ind < 0) {
         ind += legend.length;
      };
      copy[currentChar] = legend[ind];
      return copy;
   }, {});
};
const encrypt = (str, shift = 0) => {
   const legend = 'abcdefghijklmnopqrstuvwxyz'.split('');
   const map = getMap(legend, shift);
   return str
   .toLowerCase()
   .split('')
   .map(char => map[char] || char)
   .join('');
};

console.log(encrypt(str, 6));
```

---