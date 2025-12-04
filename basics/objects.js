"use strict";

const mariArray = [
  "Mari",
  "Liebman",
  2021 - 1986,
  "developer",
  ["Matija", "Martina", "Dijana"]
];

const mariObject = {
  firstName: "Mari",
  lastName: "Liebman",
  birthYear: 2021 - 1986,
  job: "developer",
  friends: ["Matija", "Martina", "Dijana"]
};

console.log(mariObject);




// Dot vs. bracket notation

    // retireving from and changing data in objects


    // dot notation
        // use only key name

        console.log(mariObject.firstName);
    

    // bracket notation
        // you can put a computed property name
        // retrieves any expression that produces value

        console.log(mariObject["lastName"]);


        const nameKey = "Name";

        console.log(mariObject["first" + nameKey]);
        console.log(mariObject["last" + nameKey]);


        // const question = prompt("What do you want to know about Mari? Choose between last name, birth year, job and friends.");
        
        // console.log(mariObject[question]);
              // retrieves info that user puts after the question pops up from the prompt (question) on the page > job = developer


    // creating a custom string that prints when user ties to access a property that doens't exist in the object

/*          if(mariObject[question]) {
          console.log(mariObject[question]);
        } else {
          console.log("Wrong request! Choose between last name, birth year, job and friends.");
        } */



    // ADDING NEW PROPERTIES to the object

        mariObject.location = "Ključić brdo";
        mariObject["twitter"] = "@emarekica";

        console.log(mariObject);




// Chalenge

// "Mari has 3 friends, and her best friend is called Matija."

        // my solution

    console.log(mariObject.firstName);
    console.log(mariObject.friends.length);
    console.log(mariObject.friends[0]);

    console.log(`${mariObject.firstName} has ${mariObject.friends.length} friends, and her best friend is called ${mariObject.friends[0]}.`);




// OBJECT METHODS

        // functions attached to objects
        // it has to be an expression, not function declaration

        // objects hold different types of VALUES
        // can hold [arrays], {objects} and functions ( = values )



        const mariObject2 = {
          firstName: "Mari",
          lastName: "Liebman",
          birthYear: 1986,
          job: "developer",
          friends: ["Matija", "Martina", "Dijana"],
          hasDriversLicence: true,

          calcAge: function(birthYear) {
            return 2021 - birthYear;
          }
        };


        /* regular function expression
        
         const calcAge = function(birthYear) {
            return 2021 - birthYear;
          }
        
        the value part of key-value pair is the function expression

            function(birthYear) {
            return 2021 - birthYear;
            }

        */



        // accessing the method (function) in an object

        mariObject2.calcAge(1986);    // dot notation
        // mariObject2["calcAge"](1986);   // bracket notation


        console.log(mariObject2.calcAge(1986));
        console.log(mariObject2["calcAge"](1986));




        // this

        const mariObject3 = {
          firstName: "Mari",
          lastName: "Liebman",
          birthYear: 1986,
          job: "developer",
          friends: ["Matija", "Martina", "Dijana"],
          hasDriversLicence: true,

          calcAge: function() {
            // console.log(this);              // will log the whole object
            return 2021 - this.birthYear;
          }
        };

        console.log(mariObject3.calcAge());
        
        console.log(mariObject3.calcAge());
        console.log(mariObject3.calcAge());
        console.log(mariObject3.calcAge());
        


        // retrieving one property multiple times 

            // 1. calculate it once
            // 2. store it in the object
            // 3. when you need it, retrieve it as a property from the object


            const mariObject4 = {
              firstName: "Mari",
              lastName: "Liebman",
              birthYear: 1986,
              job: "developer",
              friends: ["Matija", "Martina", "Dijana"],
              hasDriversLicence: true,
    
              calcAge: function() {
                this.age = 2021 - this.birthYear;
                          // creating a new property on the current object (using dot notation)

                return this.age;
                          // not a neccessary step, you can just calculate it
              }
            };

            // console.log(mariObject3.calcAge());   instead of this...

            /// ... we use this 

            console.log(mariObject4.calcAge());

            console.log(mariObject4.age);
            console.log(mariObject4.age);
            console.log(mariObject4.age);



// Chalenge

/* Write a methog getSummary() that should return a string that sumarizes the data about Mari. 

example: "Mari is a 35 year old developer and she has a/no driver's licence."

*/

// return stops the function and exits; console.log() does not

    const myBoyfriend = {
      firstName: "Matija",
      lastName: "Basic",
      job: "manager",
      hoby: "cycling",
      birthYear: 1986,
      hasDriversLicence: true,
      friends: ["Ivan", "Marija"],

      calcAge: function() {
        this.age = 2021 - this.birthYear;
        return this.age;
      },

       getSummary: function() {
        this.age = this.calcAge();
        if(this.hasDriversLicence === true) {
          return `${this.firstName} is a ${this.age} years old ${this.job} and he has a driver's licence.`;
        } else {
          return `${this.firstName} is a ${this.age} years old ${this.job} and he has no driver's licence.`;
        }
      } 

/* Jonas's solution

     // use TERNARY OPERATOR to make it shorter

      getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${this.hasDriversLicence ? "a" : "no"} driver's licence.`
      }
*/
};
 
    console.log(myBoyfriend.getSummary());


    


