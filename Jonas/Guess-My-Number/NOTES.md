# DOM and Event fundamentals


## selecting an HTML element through JS 

-- HTML important for class names of elements
-- we select them through JS

    
    document.querySelector()


**querySelector() is a method available on the document object**

-- you need to pass a SELECTOR into the method > the same one you would use in CSS
-- you pass in an element with a class name you want (ex. message)
-- you need to add the "..." 


`document.querySelector(".message").textContent;`
  
-- result is a selection of the element
-- .textContent reads the text content property
-- when we have multiple dot operators(.message .textContent), they are executed L > R
-- there are another methods for selecting DOM elements



## What is the DOM?

  **= DOM (document object model)**
  **= structured representation of HTML documents**

-- allows JS to access HTML elements & styles and manipulate them (change txt, HTML attributes, CSS styles...)
-- connection point between HTML documents and JS code


**The browser automatically creates DOM upon the loading of a webpage.**
-- it is stored in a tree-like structure.
-- each tree HTML element is an object


 ### DOM structure
>    -- each element is an object
    -- for each HTML element there is an element NODE in the DOM tree
    -- we can access each element node using JS

**DOCUMENT is a special object that we have access to in JS.**
 > -- the DOM always starts with the document object
  -- it serves as an entry point into the DOM (we need it to start selecting elements)

    document.querySelector()

  >-- `<html>` element is child element of document
  -- a root element in HTML documents
  -- adjacent elements in the DOM are called "siblings" 
    ( `<head>` and `<body>` )
  -- the DOM has **nodes** also for text, comments and other stuff
  **Whatever is in the HTML document, also has to be in the DOM.**



  ### DOM !== JavaScript
  -- properties and methods that can be used to manipulate the DOM are not part of JS.
  -- JS is just a dialect of the Ecmascript specification


  ### DOM & methods & properties are part of WEB API's
  -- web API's are like libraries that browsers implement
  -- accessible through JS code

            API = application programming interface

  **= libraries written in JS**
  -- automatically available for us to use
  -- it all happens behind the scenes, we don't have to import nor manipulate anything
  -- there are many more API's

## DOM manipulation

  **= making JS interact with a webpage**

  -- [official DOM specification](https://dom.spec.whatwg.org/) that browsers implement is why DOM manipulation works the same in all browsers



**emojis: CMND + CONTROL + SPACE**


## SETTING THE CONTENT OF AN ELEMENT

**_textContent_ property**

-- to change the the content (text) of an element
-- select the class, then add textContent

```js
document.querySelector(".message").textContent = "Correct number!";
console.log(document.querySelector(".message").textContent = "Correct number!");

// Correct number!

document.querySelector(".number").textContent = 4;
document.querySelector(".score").textContent = 9;
```

**_value_ property**

-- getting / setting the value on an Input field

```js
// getting the value
    console.log(document.querySelector(".guess").value);

// setting the value
    console.log(document.querySelector(".guess").value = 23;
```

---

## HANDLING CLICK EVENTS

**= making the code react to something that happens in the DOM**
**--use event listeners**

[List of HTML/DOM events](https://developer.mozilla.org/en-US/docs/Web/Events)

1. **Select the element** where the event should happen.

2. **Call `addEventListener()` method** on that element.
   -- (there are more ways to listen to events in JS, but this method is the best and most used one)

3. Pass in the **type of the event** into the event listener method.

  -- it is an argument that we pass into the event listener function
  -- it is a special kind of function because it expects the event handler as a second function

4. **Specify the reaction** to the event (tell the event listener what to do):

     -- define a function that contains the code that should be executed whenever the event happens on that element
     -- that function is called **the event handler**
     -- `addEventListener()` method expects the **event handler function** as a second argument after the event type
     -- we don't call the function, we only define it and pass it into the event handler - **JS engine will call this function as soon as the event happens**

      **function = value, can be passed to another function as an argument**

      ```js
      document.querySelector(".check").addEventListener("click", function(){
        console.log(document.querySelector(".guess").value)
      });
      ```

5. Specify what should happen:
              
    -- log to the console value in the input field

    `console.log(document.querySelector(".guess").value);`

6. Store the value from the input field into a variable and log it.

```js
document.querySelector(".check")
  .addEventListener("click", function() {
  
    const guess = document.querySelector(".guess").value;
    console.log(guess);
    console.log(typeof guess);

    // DOM manipulation, visible after clicking on the button
    document.querySelector(".message").textContent = "Nice pick!";

  });
```
7. **Convert the string into a number**

    -- eventually, you will have to compare the input field value with a random number later
    -- whenever we get something from the UI (for example, an input field), it is usually a string
    -- we need a to convert that string to a number

    ```js
      document.querySelector(".check")
        .addEventListener("click", function() {
  
          const guess = Number(document.querySelector(".guess").value);
          console.log(guess);
          console.log(typeof guess);

          // DOM manipulation, visible after clicking on the button
          document.querySelector(".message").textContent = "Nice pick!";

        });
    ```

[JS event types](https://data-flair.training/blogs/javascript-event-types/)

---

## IMPLEMENTING GAME LOGIC

**= implementing how the game works**

When you work with an **app with user input**...

**1st scenario: There is no input.**

... **Check if there is a value**.

   If there is no value, print something to the console as a response.

   We want the argument to be TRUE.

* when the input field is empty, it is zero = falsey > the argument is false --> we used NOT operator (!guess) to convert it to true so we can make the block of code execute.


```js
    if(!guess) {
      document.querySelector(".message").textContent = "💔 No number!";
    }
```




**3 scenarios:**

1. what happens when the guess is correct (equal to the secret number)

2. what happens when the guess is too low

3. what happens when the guess is too high



**DEFINING THE SECRET NUMBER**


Start with this.
Otherwise you have nothing to compare the guess to.

**Define it outside of the event handler function** because you want it defined only once, when the app starts.
(If you define it inside the event handler function, with each click we would get a new secret number and the game would make no sense.)

`const secretNumber = Math.trunc(Math.random() * 20) + 1;`




**_Math_ object**

-- a built-in object that JS gives us
-- has properties and methods for mathematical constants and functions
-- it’s not a function object
-- `random()` will give us number between 0-1

  **decimal** number between 0-50:

    `Math.random()*50`


  **`trunc()`** will remove decimals:
  integer between 0-19:

    `Math.trunc(Math.random()*20)`


  integer between 0-20:

    `Math.trunc(Math.random()*20)+1`


[MDN Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)



**COMPARE THE SECRET NUMBER TO USERS' GUESS**


(inside event handler function)

_if the guess is correct:_

```js
    else if(guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct number!";
    }
```

_if the guess is too high:_

```js
    else if(guess > secretNumber) {
      document.querySelector(".message").textContent = "Too high!"; 
    }
```

_if the guess is too low:_

```js
    else if(guess < secretNumber) {
      document.querySelector(".message").textContent = "Too low!";
    }
```
    
### Decrease the score

Each time there is a wrong guess, the score should decrease by 1.
  -- we start with 20
  -- in scenarios where the guess is too high/low, we want to decrease the score by 1
  
**How?**
-- create a variable for the score
-- update / decrease it
    `score = score - 1;`
    `score--;`
-- display the variable in the score label
    `document.querySelector(".score").textContent = score;`

    ```js
    const score = 20;
    
    // if the guess is too high
        else if(guess > secretNumber) {
          document.querySelector(".message").textContent = "⬆️ Too high!"; 
          score = score - 1;
          document.querySelector(".score").textContent = score;
        }
    
    // if the guess is too low
        else if(guess < secretNumber) {
          document.querySelector(".message").textContent = "⬇️ Too low!";
          score--;
          document.querySelector(".score").textContent = score;
        } 
    ```

### It is better to store the value in a variable than to rely on the DOM to hold the data.
It is a **state variable** because the score is part of **the application state** = all the data relevant to the application.

Instead of keeping the score in the DOM, reading it from there, decreasing it and returning back to the DOM, we are storing the value in the variable (in the code) and decreasing it each time the guess is wrong.

**We want all the data to be always available in the code, not just in the DOM.**

### Checking the score should happen while the score is above 0.
When the score reaches 0, we should **get a message**.

We need to add another **_if statement_** inside else if blocks for wrong guesses.
Change score > 1, else the game will not end when the score reaches 0.

    ```js
    if (score > 1) {
        only then execute the code
    }
    ```

    Add **_else statement_** when the score comes to 0.
    Also, change the score to 0.
    ```js
    else { 
            document.querySelector(".message")
                .textContent = "😭 You've lost the game. Try again!";
            document.querySelector(".score").textContent = 0;
          }
    ```
---

### MANIPULATING CSS with JS

**DOM includes CSS styles.**


  ### Change the background color
  Change the background to green whenever the player guesses the right number. 
In this scenario: 

    ```js
    else if(guess === secretNumber) {
          document.querySelector(".message").textContent = "Correct number!";
    }
    ```

**Steps:**

1. Select the element that you want to manipulate ( the whole <body> of the page).

    `document.querySelector("body")`

2. To change CSS, access style property and then the name of the property you want to change.
Properties that have multiple words are written in camelCase.

    `document.querySelector("body").style.backgroundColor`

3. Set the value.
It has to be a string.

    `document.querySelector("body").style.backgroundColor = "#60b347";`


**Whenever we are manipulating a style, we need to specify a string.**

### Increase the width of the central number.

    document.querySelector(".number").style.width = "30rem";

Both changed styles are going to be **inline styles**.
We are not changing the CSS file with JS.

---

[Dillinger](https://dillinger.io/?ref=tiny-helpers)
