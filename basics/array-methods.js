"use strict";

const friends = ["Matija", "Martina", "Dijana"];



// BASIC ARRAY METHODS


  // ADDING ELEMENTS

      // push()

        // adds elements to the end 

        const newLength = friends.push("Tihana");
                // push is a function, it recieves arguments and returns value - here it is the length: 4

        console.log(friends);
        console.log(newLength);  



      // unshift()

          // adds elements to the beginning

          friends.unshift("Tin");
          console.log(friends);


  // REMOVING ELEMENTS

      // pop()

        // removes the last element
        // no arguments needed

        friends.pop();
        console.log(friends);

        // returns the removed element
            const popped = friends.pop();
            console.log(friends);
            console.log(popped);


      // shift()
       
        // removes the first element

        friends.shift();
        console.log(friends);   // (2) ["Matija", "Martina"];


// indexOf()

    // tells us in which position an element is in the array

        console.log(friends.indexOf("Martina"));  // 1
        console.log(friends.indexOf("Tin"));      // -1, because the element is not there


// includes()

    // from ES6
    // returns "true" if the element is in the array, "false" if it is not

        console.log(friends.includes("Matija"));    // true
        console.log(friends.includes("Hans"));      // false


    // uses strict equality for the check - doesn't do type coercion

        friends.push(23);
        console.log(friends.includes("23"));   // false, it is a string
        console.log(friends.includes(23));     // true, it is a number


    // useful to write CONDITIONALS

        if (friends.includes("Tihana")) {
          console.log("You have a friend called Tihana.");  // noting happens
        }

        if (friends.includes("Matija")) {
          console.log("You have a friend called Matija.");  
        }