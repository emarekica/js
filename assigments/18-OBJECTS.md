# OBJECTS

## Introduction to Objects

[x] Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and 'neighbours' (an array like we used in previous assignments).



## Dot and Bracket Notation

[x] Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

[x] Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

    ### PSEUDOCODE

    objectName.key += 2;

    objectName["key"] -= 2;




## Object Methods

[x] Add a method called 'describe' to the 'myCountry' object.
This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

[x] Call the 'describe' method.

3. Add a method called 'checkIsland' to the 'myCountry' object.
This method will set a new property on the object, called 'isIsland'. 
'isIsland' will be true if there are no neighbouring countries, and false if there are.
Use the ternary operator to set the property.

  ## PSEUDOCODE

  if(neighbours.length = 0) isIsland = true;

  else isIsland = false;

  this.isIsland = this.neighbours.length === 0 ? true : false;