# Functions challenge

<br><br>

```js
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],

  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};
```

<br><br>

---

## Part I

<br>

Create a method called `registerNewAnswer` on the `poll` object.
<br>

- a: Display a prompt window for the user to input the number of the selected option, "What is your favourite programming language?", write option number

- b: Based on the input number, update the `answers` array property. Make sure to check if the input is a number and if the number makes sense

<br><br>

Call this method whenever the user clicks the "Answer poll" button
<br><br>

Create a method `displayResults` which displays the poll results. The method takes a string as an input (called `type`), which can be either `string` or `array`. If type is `array`, simply display the results array as it is, using `console.log()`. This should be the default option. If type is `string`, display a string like "Poll results are 13, 2, 4, 1".
<br><br>

Run the `displayResults` method at the end of each 'registerNewAnswer' method call
<br><br>

Use the `displayResults` method to display the 2 arrays in the test data. Use both the `array` and the `string` option. Do not put the arrays in the poll object! So what should the this keyword look like in this situation?

      test data 1: [5, 2, 3]
      test data 2: [1, 5, 3, 9, 6, 1]

<br><br>

---

## Part II

<br>

This is more of a thinking challenge than a coding challenge.

<br>

```js
// IIFE
(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
})();
```

<br><br>

1. Take the IIFE and at the end of the function, attach an event listener that changes the color of the selected `h1` element (`header`) to blue, each time the body element is clicked. Do not select the `h1` element again!

<br><br>

2. Explain to yourself (or someone around you) why this worked! Take all the time you need. Think about when exactly the callback function is executed, and what that means for the variables involved in this example.
   <br><br>

**Explanation**

The event listener is a method that receives a function as parameter, a callback one.

At the time the event listener was created, there were other variables, as `header` in the IIFE function. They belong to the same variable environment as the event listener.

Since IIFE are functons that execute only once and never again, the `header` variable is also gone for us to access it from our code, but it stays preserved inside of the Closure of the event listener and is available to it, forever.

That is possible, since event listeners are methods that receive callback functons as parameters/arguments, and closures are intrinsic values of functions. Therefore, that callback has a Closure.
