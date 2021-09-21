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


2. HOW TO REPLACE A CHARACTER IN A STRING WITH ANOTHER CHARACTER?


