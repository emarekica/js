# STRING MANIPULATION LEARNING NOTES

- use replace() + RegEx to replace PATTERNS
- my regex for confidential content pattern: 

     (XXX)\w+(.\s\w+)?(\s\w+)?(XXX)

- replace with [REDACTED]

- have to go through the whole string, each character
- use //g (regex global flag) to help replacements at multiple places




# 1. 

  ## WHY STRING?


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



# 2. 

  ## HOW TO REPLACE A CHARACTER/specific word IN A STRING WITH ANOTHER CHARACTER?


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



@: https://careerkarma.com/blog/javascript-replace/

  ## replace()

  The JavaScript replace() method searches a string for a pattern or regular expression.
  If that pattern is found in the string, it is replaced with a specified value. replace() returns a new string.
  The original string is not changed.

      Our output is a new string because strings cannot be modified in JS!
      
      > Are string objects immutable? YES.

  - accepts two arguments:

      1. The pattern or regular expression for which replace() should search
      2. A string which should replace any instances of the pattern you specified in the first argument

        var name = "Pieter";
        console.log(name.replace("Pi", "P"));


  - replace() method is added to the end of our string  
  - you should not specify the string from which you want to replace values, only the pattern for which you want to search and the text which should replace any instances of that pattern are accepted arguments



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




>> @: https://www.freecodecamp.org/news/javascript-string-replace-example-with-regex/

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


>> replacement at multiple places (use /.../g flag)

        const reg = /\d{3}/g
        const str = "Java323Scr995ip4894545t";
        const newStr = str.replace(reg, "");

        console.log(newStr);
            // JavaScrip5t
            // 5 didn't pass the test :(




# 3. 

 ### WHAT IS THE REGEX FOR MY PATTERN(S)? 
  

>>  @: https://regexr.com/
>>  @: https://www.youtube.com/watch?v=sa-TUpSx1JA



XXXomnisXXX:
XXXarchitectoXXX:

  (XXX)\w+(XXX)

XXXdistinctio, delenitiXXX:

  (XXX)\w+(.\s\w+)?(XXX)

XXXAnim vitae vulputateXXX:

# (XXX)\w+(.\s\w+)?(\s\w+)?(XXX)