- use replace() + RegEx to replace PATTERNS




## string manipulation 

https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript

https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascripts




## 1. 

    WHY STRING?


### String

  - used to represent and manipulate a sequence of characters
  - useful for holding data that can be represented in text form

  - a sequence of one or more characters that may consist of letters, numbers, or symbols


### Most used methods:

  - to check their length
  - to build and concatenate them using the + and +=
  - checking for the existence or location of substrings with the indexOf()
  - extracting substrings with the substring()


### Creating strings (primitives and objects): 

  const string1 = "A string primitive";
  const string2 = 'Also a string primitive';
  const string3 = `Yet another string primitive`;

  const string4 = new String("A String object");   // string constructor

  * JS automatically converts primitives to String objects, so that it's possible to use String object methods for primitive strings


### Accessing character in a string: 

  1. charAt()

    return 'cat'.charAt(1) // returns "a"

  2. to treat the string as an array-like object, where individual characters correspond to a numerical index (ECMA5)

    return 'cat'[1] // returns "a"

  * not recommended as the properties involved are neither writable nor configurable




## 2. 

    HOW TO REPLACE A CHARACTER/specific word IN A STRING WITH ANOTHER CHARACTER?


  ### Replace a word in a string

  const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

  console.log(p.replaceAll('dog', 'monkey'));

  // expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


  ### replace a word in a sentence

  function replaceAll(str, find, replace) {
    var escapedFind = find.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    return str.replace(new RegExp(escapedFind, 'g'), replace);
  }

  var sentence = "How many shots did Bill take last night? That Bill is so crazy!";
  var blameSusan = replaceAll(sentence,"Bill","Susan"); 


                                  ****** 



@https://stackoverflow.com/questions/5558613/replace-words-in-the-body-text

  1. 

  To replace a string in your HTML with another use the replace method on innerHTML:

    document.body.innerHTML = document.body.innerHTML.replace('hello', 'hi');

  Note that this will replace the first instance of hello throughout the body, including any instances in your HTML code (e.g. class names etc..), so use with caution - for better results, try restricting the scope of your replacement by targeting your code using document.getElementById or similar.

  To replace all instances of the target string, use a simple regular expression with the global flag:

    document.body.innerHTML = document.body.innerHTML.replace(/hello/g, 'hi');


  2. 

  function replaceInText(element, pattern, replacement) {
      for (let node of element.childNodes) {
          switch (node.nodeType) {
              case Node.ELEMENT_NODE:
                  replaceInText(node, pattern, replacement);
                  break;
            case Node.TEXT_NODE:
                node.textContent = node.textContent.replace(pattern, replacement);
                break;
            case Node.DOCUMENT_NODE:
                replaceInText(node, pattern, replacement);
            }
        }
    }


  3. 

  function replaceText(selector, text, newText, flags) {
    var matcher = new RegExp(text, flags);
    var elems = document.querySelectorAll(selector), i;

    for (i = 0; i < elems.length; i++)
      if (!elems[i].childNodes.length)
        elems[i].innerHTML = elems[i].innerHTML.replace(matcher, newText);
  }



@: https://careerkarma.com/blog/javascript-replace/

  ## replace()

  The JavaScript replace() method searches a string for a pattern or regular expression.
  If that pattern is found in the string, it is replaced with a specified value. replace() returns a new string.
  The original string is not changed.   (????)

      Our output is a new string because strings cannot be modified in JS!
      
      > Are string objects immutable? YES.

  - accepts two arguments:

      1. The pattern or regular expression for which replace() should search
      2. A string which should replace any instances of the pattern you specified in the first argument

        var name = "Pieter";
        console.log(name.replace("Pi", "P"));

  - replace() method is added to the end of our string
  
  - you should not specify the string from which you want to replace values, only the pattern for which you want to search and the text which should replace any instances of that pattern are accepted arguments


  ## example: We want to replace "interesting" with "intriguing" in a string. 

    var ourInterestingString = "This string is interesting.";
    var ourIntriguingString = ourInterestingString.replace("interesting", "intriguing");
    
    console.log(ourIntriguingString);  // "This string is intriguing."

  
  ## example: We want to replace multiple parts of our string (substrings).

    chaining our replace() functions

    var ourInterestingString = "This string is interesting.";
    var ourNewString = ourInterestingString
      .replace("This", "Our")
      .replace("string", "code")
      .replace("interesting.", "amazing!");

    console.log(ourNewString);  // "Our code is amazing!"



  ## JS String replace() Using Regex

    WHAT IS REGEX?

    @: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions


       - patterns used to match character combinations in strings
       - in JS, regular expressions are also objects
       - used with methods: 

            RexExp: exec(), test()
            String:  match(), matchAll(), replace(), replaceAll(), search(), split()


    - defines a search pattern
    - when you want to know whether a pattern is found in a string, use the test() or search() methods
    - regexp objects give us more control over our replace() function, so we can do more replacements

    ## example: replace "e" with "f"

      var ourInterestingString = “This string is interesting.”;
      var ourNewString = ourInterestingString
        .replace(“This”, “Our”)
        .replace(“string”, “code”)
        .replace(“interesting.”, “amazing!);

      console.log(ourNewString);  // "This string is interesting."




@: https://www.freecodecamp.org/news/javascript-string-replace-example-with-regex/

  - replace() used on strings in JavaScript to replace parts of string with character
  - accepts two arguments: 
        a) the string to be replaced
        b) what the string would be replaced with

          const str = 'JavaScript';
          const newStr = str.replace("ava", "-");

          console.log(newStr);  // J-Script

--> replace() + RegEx to replace PATTERNS

    // matches a number, some characters and another number

        const reg = /\d.*\d/
        const str = "Java3foobar4Script"
        const newStr = str.replace(reg, "-");

        console.log(newStr);  // "Java-Script"


    ## replacement at multiple places

        const reg = /\d{3}/g
        const str = "Java323Scr995ip4894545t";
        const newStr = str.replace(reg, "");

        console.log(newStr);
            // JavaScrip5t
            // 5 didn't pass the test :(





@: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace

## string.prototype.replace()

  - returns a new string with some or all matches of a pattern replaced by a replacement
    - the pattern can be a string or a RegExp
    - replacement can be a string or a function to be called for each match
    - if pattern is a string, only the first occurrence will be replaced

  - returns a new string, doesn't change the calling string object


    ### syntax

      replace(regexp, newSubstr)
      replace(regexp, replacerFunction)

      replace(substr, newSubstr)
      replace(substr, replacerFunction)

        replacerFunction (replacement)
      A function to be invoked to create the new substring to be used
      to replace the matches to the given regexp or substr.



  ##  Using an inline function that modifies the matched characters

-->        ** dodavanje praznog prostora
-->        ** zamjena svih određenih elemenata u tekstu


  In this example, all occurrences of capital letters in the string are converted to lower case, and a hyphen is inserted just before the match location. The important thing here is that additional operations are needed on the matched item before it is given back as a replacement.

  The replacement function accepts the matched snippet as its parameter, and uses it to transform the case and concatenate the hyphen before returning.


    function styleHyphenFormat(propertyName) {
      function upperToHyphenLower(match, offset, string) {
        return (offset > 0 ? '-' : '') + match.toLowerCase();
      }
      return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
    }

    console.log(styleHyphenFormat('borderTop'));  // border-top



## 3. 

      WHAT IS THE REGEX FOR MY PATTERN? 

  '== CONFIDENTIAL ==\n\n::content::\n\n == CONFIDENTIAL =='
  XXXdolor sitXXX

  @: https://regexr.com/
  @: https://www.youtube.com/watch?v=sa-TUpSx1JA

  