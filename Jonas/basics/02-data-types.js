// VALUE TYPES

    // every value is either an object or a primitive 


    // object

        let me = { 
          name: "Marija"
        };


    // primitive (everything that is not an object)

        let yourName = "Marija";
        let age = 36;
        

        /*  7 primitive data types 

            1. NUMBERS
            2. STRINGS
            3. BOOLEANS

            4. undefined
            5. null 
            6. symbol (ES2015)
            7. BigInt (ES2020)
        
        */
          

          // 1 - NUMBERS

            // floating point numbers
            // used for decimals and integers

            let age2 = 23;


          // 2 - STRINGS 

            // sequence of characters
            // used for text

            let myName = "Mare";


          
          // 3 - BOOLEAN 

            // logical type that can only be TRUE or FALSE 
            // used for taking decision

            let fullAge = true;

            true;                  // it is automatically a boolean value
            console.log(true);

            // you can store booleans in variables
            // the VALUE holds the data type, not the variable
              
              let javascriptIsFun = true;
              console.log("JavaScript is fun?", javascriptIsFun);

              console.log(typeof true);
              console.log(typeof javascriptIsFun);
              console.log(typeof 23);
              console.log(typeof "Mare");
        



          // 4 - undefined

            // value taken by a variable that is not yet defined (means "empty value") - declared without asignin a value
            // you may define a varible without a value
            // it is both the value and the type of the value

            
            let children; 
            let year;

            console.log(children);
            console.log(typeof children);

            console.log(year);
            console.log(typeof year);







          // 5 - null

            // also means "empty value"
            // used in different circumstances than "undefined"


            console.log(typeof null);  // a bug which gives the data type of OBJECT, and should give UNDEFINED; never corrected for legacy reasons


          // 6 - symbol

            // from ES2015
            // defines a value that is unique and cannot be changed


          // 7 - BigInt

            // larger integers than the Number type can hold



// DYNAMIC TYPING

  // we can easily change the type of a value that is hold by a variable

        /* reasigning the value: 
              1. type the name of the variable
              2. =
              3. type in a new value

            ** DO NOT WRITE LET AGAIN ** 
              without let you just asign a new value
              with let you declare a new variable
        */

              javascriptIsFun = "YES!";
              console.log(typeof javascriptIsFun);


              let htmlIsBoring = false;
              console.log(htmlIsBoring);

              htmlIsBoring = "If you don't learn!";
              console.log(typeof htmlIsBoring);
