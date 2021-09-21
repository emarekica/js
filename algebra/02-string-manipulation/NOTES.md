## string manipulation 

https://www.digitalocean.com/community/tutorials/how-to-work-with-strings-in-javascript

https://www.digitalocean.com/community/tutorials/how-to-index-split-and-manipulate-strings-in-javascripts




1. WHY STRING?

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


2. HOW TO REPLACE A CHARACTER/specific word IN A STRING WITH ANOTHER CHARACTER?


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

    - Regular expression, or regex(p), defines a search pattern
    - regexp objects give us more control over our replace() function, so we can do more replacements

    ## example: replace "e" with "f"

      var ourInterestingString = “This string is interesting.”;
      var ourNewString = ourInterestingString
        .replace(“This”, “Our”)
        .replace(“string”, “code”)
        .replace(“interesting.”, “amazing!);

      console.log(ourNewString);  // "This string is interesting."


      https://www.freecodecamp.org/news/javascript-string-replace-example-with-regex/
      https://stackoverflow.com/questions/1162529/javascript-replace-regex
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
      