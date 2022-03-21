"use strict";

const friend1 = "Matija";
const friend2 = "Martina";
const friend3 = "Dijana"; 

// array 

    // literal sintax, more common

      const friends = ["Matija", "Martina", "Dijana"];
      console.log(friends);

    // writing it without parenthesis - using array() function
    
      const ys = new Array(1985, 1987, 2011, 2016, 2021);
      console.log(ys);



// getting the data out of the array

    // getting elements from the array

        console.log(friends[0]);   // Matija
        console.log(friends[2]);   // Dijana

     
    // getting the number of elements in the array  (with PROPERTY length)
    
        console.log(friends.length);  // 3


    // getting the last element in the array

      // number of elements is 3, but it is 0 based so we count: 0, 1, 2
      // the last element is 2
      // length - 1 = 3 - 1 = 2

      console.log(friends [friends.length - 1]);  // Dijana



// adding elements to the array

    // replacing elements

      friends [2] = "Ivana";
      console.log(friends);

      // can't replace the whole array 
      // friends = ["Ivan", "Jospipa"];



// holding different types of values

    const myName = "Marija";
    const mari = [ myName, "Croatia", 2021 - 1985, "developer", friends];

    console.log(mari);
    console.log(mari.length);

      


// Exercise

    // we have an array of birh years
    // want to calculate ages for first, second and last element

      const calcAge = function (birthYear) {
        return 2021 - birthYear;
      }

      const years = [1987, 1982, 1986, 1985, 1993];

      const age1 = calcAge(years[0]);
      const age2 = calcAge(years[2]);
      const age3 = calcAge(years[years.length - 1]);

      console.log(age1, age2, age3);

      
      // another way
        
        // you can place FUNCTION CALLS into an array because they produce a value

      const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[years.length - 1])];
      
      console.log(ages);
        





