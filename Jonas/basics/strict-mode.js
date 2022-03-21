"use strict";

// 1 - activating STRICT MODE

/* 

    written at the very beginning of the script
    can be (de)activated

    makes it easier to write secure JS code ( = it is easier to avoid accidental errors)

        > forbids us to do certain things
        > creates visible errors in the Console where otherwise JS would fail silently
*/



      let hasDriversLicense = false;
      const passTest = true;

      if (passTest) hasDriverLicense = true;
      if (hasDriversLicense) console.log("I can drive");


/* 
    Strict mode introduces a shortlist of reserved variable names that are reserved for the features that might be introduced to the language later.

    You can't use these words for variables.

             implements
            interface
            let
            package
            private
            protected
            public
            static
            yield
*/


    const interface = "audio";  // Uncaught SyntaxError: Unexpected strict mode reserved word
    const private = 345;
    const if = 32;              // Unexpected token;