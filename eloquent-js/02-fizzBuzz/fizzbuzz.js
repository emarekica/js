// for (var x = 1; x <= 100; x++) {
//   var message = "";

//   if (x % 3 === 0) {
//     message += "fizz";
//   }
//   if (x % 5 === 0) {
//     message += "buzz";
//   }
  
//   if (message === "") {
//     console.log(x);
//   } else {
//     console.log(message);
//   }
// } 


// my take

// for ( var x = 1; x <= 100; x++) {
//   if (x % 3 === 0) {
//         console.log("fizz");
//       } else if (x % 5 === 0) {
//         console.log("buzz");
//       } else {
//         console.log(x);
//       }
// }


// solution: 

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);   // ispisuje ili broj ili riječ
}

// The OR operator || returns true if one or both expressions are true, otherwise it returns false.


// --------------------- ostale varijante

// 1. Ispisuje i brojeve između.

var x = 3;    					            // nije nužno deklarirati
 
for (x = 1; x <= 15; x++) {         // ovime smo napravili petlju
  if (x % 15 === 0) {               // ovo ide prvo jer se inače neće ispisivati FizzBuzz jer će prethodno biti ispunjen uvjet
    console.log("FizzBuzz");
  } else if (x % 3 === 0) {
    console.log("Fizz");
  } else if (x % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(x);                 // u svim drugim slučajevima ispisat će samo taj broj
  }
}


// 2. DODATAK: brojevi djeljivi sa 4 ispisuju Bozz. Ispisuje i sve ostale brojeve između. 

for (var x = 1; x <= 60; x++) {
  var message = "";

  if (x % 3 === 0) {
    message += "Fizz";
  }
  if (x % 4 === 0) {
    message += "Bozz";
  }
  if (x % 5 === 0) {
    message += "Buzz";
  }
    if (message === "") {        // ako se ništa nije upisalo u message, ispisuje se broj  --> ovo ne stavljaš ako želiš da ti se ništa ne ispisuje u slučaju kada je poruka prazna
    console.log(x);
  } else {                       // ako se nešto upisalo, znači da je broj djeljiv i ispisat ćemo poruku
    console.log(message);
  }
}
  

// 2.b skraćena varijanta

for (var x = 1; x <= 60; x++) {
  var message = "";

  if (x % 3 === 0) message += "Fizz";   
  if (x % 4 === 0) message += "Bozz";
  if (x % 5 === 0) message += "Buzz";

  if (message === "") {
    console.log(x);
  } else {
    console.log(message);
  }
}


// 3. Ispisuje samo fizz i buzz

function findFizzBuzz(min, max, mod3Text, mod5Text) {
  var fizzBuzz = [];

  for (var i = min; i <= max; i++) {
    if (i === 0) continue;

    var message = "";

    if (i % 3 === 0) message += "Fizz";
    if (i % 5 === 0) message += "Buzz";

    if (message !== "") fizzBuzz.push(message);
  }

  return fizzBuzz;
}

console.log(findFizzBuzz(20, 40, "Hello", "World"));


// 4. Array methods

4. Iz METODA NAD NIZOVIMA

var fizzBuzz = [];

for (var i = 0; i <= 20; i++) {
  if (i === 0) continue;

  var message = "";

  if (i % 3 === 0) message += "fizz";
  if (i % 5 === 0) message += "buzz";

  if (message !== "") fizzBuzz.push(message);
}


// 5. DOM manipulation

var ul = document.createElement("ul");
ul.appendChild(li);


for (var i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    ul.push(i);
    console.log("Fizz");
  }
  if (i % 5 === 0) {
    ul.push(i);
    console.log("Buzz");
  }
  if (i % 15 === 0) {
    ul.push(i);
    console.log("FizzBuzz");
  }
  else {
    console.log([i]);
  }
}

var fizzBuzz = document.querySelectorAll('li');

for ( var i = 0; 1 < fizzbuZZ; i++) {
  var currentItem = fizzBuzz[i];
  console.log(currentItem);
}
