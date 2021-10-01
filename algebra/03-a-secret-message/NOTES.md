1. string manipulation
2. string methods 
3. string 1 containing ASCII code
4. string 2 containing the message
5. string methods to use (?): split(), replace()



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

>>b) charAt() method to return the character using the index number as a parameter
```
"How are you?".charAt(5);  // r
```

>>**slice()**
-- returns the characters between two index numbers
-- first parameter will be the starting index number, second parameter will be the index number where it should end
-- will return what is between, but not including, the last parameter
```
 "How are you?".slice(8, 11);   // you
```

>>-- if a second parameter is not included, slice() will return everything from the parameter to the end of the string
```
"How are you?".slice(8);   // you?
```


>### Return index numbers based on the provided string character

>>c) **indexOf()** to return the index number by the first instance of a character

    "How are you?".indexOf("o");   // 1

>>d) **lastIndexOf()** is used to find the last instance

    "How are you?".lastIndexOf("o");  // 9



>>**split()**
  -- splitting a string by a character and creating a new array out of the sections
  -- if an empty parameter is given, it will create a comma-separated array with each character in the string
  -- you can determine how many words are in a sentence
  
```js
const originalString = "How are you?";

// Split string by whitespace character
const splitString = originalString.split(" ");

console.log(splitString);    // [ 'How', 'are', 'you?' ]
```


>>**replace()**
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

>>**replace() + RegEx**
-- use the g (global) flag to catch all instances of a value
-- use the i (case insensitive) flag to ignore case
```js
 const originalString = "Javascript is a programming language. I'm learning javascript."

  // Search string for "javascript" and replace with "JavaScript"
  const newString = originalString.replace(/javascript/gi, "JavaScript");
 console.log(newString);  
    // JavaScript is a programming language. I'm learning JavaScript.
```

***



 
* **[Explore the Caesar cipher on Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)**


**Two situations** can be considered:

1. an attacker knows (or guesses) that some sort of simple substitution cipher has been used, but not specifically that it is a Caesar scheme;
2. an attacker knows that a Caesar cipher is in use, but does not know the shift value.

  >2a. Since there are only a limited number of possible shifts (25 in English), they can each be tested in turn in a brute force attack. 
  One way to do this is to write out a snippet of the ciphertext in a table of all possible shifts – a technique sometimes known as "completing the plain component".

  >2b. Another brute force approach is to match up the frequency distribution of the letters. By graphing the frequencies of letters in the ciphertext, and by knowing the expected distribution of those letters in the original language of the plaintext, a human can easily spot the value of the shift by looking at the displacement of particular features of the graph. 



---
* [Explore the String global object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
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

https://theasciicode.com.ar/



--- 

**potencijalna rješenja**

(https://medium.com/suyeonme/js-an-algorithm-a-day-caesar-cipher-77bc58cf3117)

(https://www.codegrepper.com/code-examples/javascript/Caesar+cipher+js)

(https://www.thatsoftwaredude.com/content/11425/implementing-a-caesar-cipher-in-javascript)

(http://codeniro.com/caesars-cipher-algorithm-javascript/)

(https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript)

(https://gist.github.com/EvanHahn/2587465)

(https://learnersbucket.com/examples/algorithms/caesar-cipher-in-javascript/)

(https://www.tutorialspoint.com/encrypting-a-string-using-caesar-cipher-in-javascript)