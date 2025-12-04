'use strict';

// // -------- SCOPE


// // top level code function
// // defines its own scope = variable environment of its execution context
// function calcAge(birthYear) {
//   const age = 2021 - birthYear;
//   //console.log(firstName);

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}.`
//     console.log(output)

//     //block scope
//     if(birthYear >=1981 && birthYear <= 1991) {
//       var millennial = true;

//       // Creating a new variable with the same name as outer scope's variable
//       const firstName = 'Jonas';

//       // Reassigning value to outer scope's variable
//       output = "New output!";

//       const str = `Oh, and you are a millennial, ${firstName}.`
//       console.log(str);

//       // functions are block-scoped (>= ES6)
//       function add(a, b) {
//         return a+b;
//       }

//     }
//     // console.log(str);  // reference error
//     console.log(millennial); // accessible, VAR is pre-ES6 variable 
//     // add(2, 3); // reference error, not accessible in STRICT MODE

//     console.log(output);  // Prints reassigned value
//   }
//   printAge();
//   return age;
// }

// // global variable
// const firstName = "Mari";
// calcAge(1985);

// // reference error - cannot access scope
// //console.log(age);
// //printAge();



// ---------------------------------------------------------------------------------- //

// -------- HOISTING

// declaration
// var x;

// initialisation - assigning a value
// var x = 10;



// -------- variables

// console.log(me);     // undefined
// console.log(job);    // ReferenceError: Cannot access before initialization
// console.log(birthYear);   // ReferenceError: Cannot access before initialization

// var me = " Mari";
// let job = "programmer";
// const birthYear = 1987;


// // -------- functions

// console.log(addDeclaration(2, 3));
// // console.log(addExpression(1, 2));
// console.log(addArrow(3, 4));

// function addDeclaration(a, b) {
//   return a + b;
// }

// const addExpression = function (a, b) {
//   return a + b;
// }

// const addArrow =  (a, b) => {
//   return a + b;
// }





// console.log(addDeclaration(2, 3));  // 5
 
// console.log(addExpression(1, 2));
// ReferenceError: Cannot access 'addExpression' before initialization
 
// console.log(addArrow(3, 4));
// ReferenceError: Cannot access 'addArrow' before initialization
 
 
// function addDeclaration(a, b) {
//   return a + b;
// }
 
// const addExpression = function (a, b) {
//   return a + b;
// }
 
// var addArrow =  (a, b) => {
//   return a + b;
// }

// ---------------- Example (a mistake you should avoid):

// console.log(numProducts);

// deletes the shopping cart whenever the number of products is 0
// zero is falsy value
// if(!numProducts) {
//   deleteShoppingCart();
// }

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// all products get deleted because of the hoisting


// ---------------- Difference between VAR and CONST/LET

// var x = 1;
// let y = 2;
// const z = 3;

// testing if x, y and z are properties of Window object
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false


/////////////////////////////////////////////////////////////////////////////

// ---------------------------------- .this KEYWORD

// Calling function as a method

// const mari = {
//   name: "Mari",
//   year: 1987,
//   calcAge: function() {
//     return 2021. - this.year;
//   }
// };
// console.log(mari.calcAge()); 


// .this outside of any function
// console.log(this);  // points to Window object


// .this inside of a function
// const calcAge = function(birthYear) {
//   console.log(2021 - birthYear);
//   // console.log(this);
// }

// calcAge(1987);  // 34; undefined


// in arrow function
// const calcAgeArrow = birthYear => {
//   console.log(2021 - birthYear);
//   // console.log(this);
// }

// calcAgeArrow(1987); // points to Window object


// inside a method

// const jonas = {
//   year: 1987,
//   calcAge: function() {
//     console.log(this);
//     console.log(2021 - this.year);
//   },
// };

// jonas.calcAge(); // points to "jonas" object

// const matilda = {
//   year: 2017,
// };

// ------------------------------------- METHOD BORROWING
// because function is a value, we can do this

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();


// taking the function out of the object, copying it into a new variable
// const f = jonas.calcAge;
// f();



/////////////////////////////////////////////////////////////////////////////

// ---------------------- Regular functions VS arrow functions


// object literals don't define their own scope, are not code blocks - they belong to the GLOBAL scope
// const jonas = {
//   firstName: "Jonas",
//   year: 1987,
//   calcAge: function() {
//     console.log(this);
//     console.log(2021 - this.year);
//   },

//   greet: () => {
//     console.log(`Hey, ${this.firstName}.`);
//   }
// };

// jonas.greet();  // Hey, undefined.


// dangerous if we compine declaring variables with VAR + using .this in arrow functions

// var firstName = "Matilda";

// const jonas = {
//   firstName: "Jonas",
//   year: 1987,
//   calcAge: function() {
//     console.log(this);
//     console.log(2021 - this.year);
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey, ${this.firstName}.`);
//   }
// };

// jonas.greet();  // Hey, Matilda.



// function inside of a method

// const jonas = {
//   firstName: "Jonas",
//   year: 1987,
//   calcAge: function() {
//     console.log(this);
//     console.log(2021 - this.year);

    // Solution 1
    // pre ES6 solution with SELF/THAT extra variable
    //   const self = this;
    //   const isMillenial = function() {
    //     console.log(self.year <= 1996 && self.year >= 1981);
    //   }
    //   isMillenial();
    // },

    // Solution 2
//     const isMillenial = () => {
//       console.log(this.year <= 1996 && this.year >= 1981);
//     }
//     isMillenial();
//   },

//   greet: function() {
//     console.log(this);
//     console.log(`Hey, ${this.firstName}!`);
//   }
// };


// jonas.calcAge();  // TypeError: Cannot read properties of undefined (reading 'year')

// with solution 1 & 2
  // jonas.calcAge();
  // 34
  // script.js:177 true



// "arguments" keyword

 
// const addExpression = function (a, b) {
//   console.log(arguments);
//   return a + b;
// }

// addExpression(2, 5);
 
// var addArrow =  (a, b) => {
//   console.log(arguments);
//   return a + b;
// }
// addArrow(2, 6);

/////////////////////////////////////////////////////////////////////////////

// ---------------------- Primitives VS objects

// Primitives
let age = 30;
let oldAge = age;
age = 31;

console.log(age);       // 31 
console.log(oldAge);    // 30


// Object
const me = {
  name: "Mari",
  age: 30, 
}

const friend = me;
friend.age = 27; 

console.log("Friend:", friend);  // Friend: {name: 'Mari', age: 27}
console.log("Me:", me);          // Me: {name: 'Mari', age: 27}





// ---------------------------------------- Primitives VS Objects


// Mutating primitive types

  // initial value
  let lastName = "Williams";

  // person is getting married so we save the old last name
  let oldLastName = lastName;

  // at this point in the code, the person is married and has new last name
  lastName = "Davis";

  console.log(lastName, oldLastName); // Davis, Williams



// Mutating reference types (objects)

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 32,
};

// Jessica is getting married and will change her last name
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";

console.log("Before marriage:", jessica);         // "Davis"
console.log("After marriage:", marriedJessica);   // "Davis"


// doesn't work because marriedJessica is declared in the call stack with CONST, you can't change its value > you can't assign it a new reference to a new object > you can't assign it a new object

// marriedJessica = {};  // TypeError: Assignment to constant variable



// Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 32,
  family: ["Tina", "Jon"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

// changing the array in copied object = manipulating object within an object
jessicaCopy.family.push("Bey");
jessicaCopy.family.push("How");

console.log('Before marriage:', jessica2);
console.log('After marriage', jessicaCopy);