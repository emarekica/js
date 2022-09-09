# ASYNC / AWAIT

<br>

Syntactical sugar wrapped around promises to make them easier to work with.

<br><hr/><br>

Starting code:
<br>

```js
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}.`);

    if (location === "Google") {
      resolve("Google says 'Hi!'.");
    } else {
      reject("We can only talk Google.");
    }
  });
}

// will always resolve
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response...");
    resolve(`Extra information + ${response}`);
  });
}
```

<br><br>

## **Variant with promises**

<br>

Use promises to call these functions.
<br>

```js
// calling these functions using promises
makeRequest("Google")
  .then((response) => {
    console.log("Response received.");

    // needs to be returned so it can be used in the next chained event
    return processRequest(response);
  })
  // gets the response from processRequest
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((error) => console.log(error));

//

// OUTPUT:

// Making request to Google.
// Response received.
// Processing response...
// Extra information + Google says 'Hi!'.
```

<br><br>

This means that all the code is executing in the order it should and each block of code is waiting for the previous one to finish before it executes.
<br><br>

If you _query_ Facebook instead of Google, it gives this output:
<br>

    Making request to Facebook.
    We can only talk Google.

<br><br>

## **Variant with Async/Await**

<br>

Making the code easier to understand, without `then()` and nesting inside of it.
<br><br>

1.  We need a function that awaiting code is inside of.

2.  Tell JS that the function is asynchronous so that it knows how to handle the code inside of it.
    <br>

        async function doWork () {}

    <br><br>

3.  Call different methods inside.

4.  Passing in keyword `await` means that the code should wait until the `makeRequest()` is finished. It will execute the next thing afterwards. Without it, it will just return the promise without the result of that promise being executed.
    <br><br>

```js
async function doWork() {
  await makeRequest("Google");
}
```

<br><br>

The `await makeRequest("Google");` part will return the same thing as `resolve()` section of the Promise so we can say that the `response` is going to be the same as awaiting for the `makeRequest()` function.
<br><br>

```js
async function doWork() {
  const response = await makeRequest("Google");
}
```

<br><br>

When JS comes to the `await` part, it starts it, does other things and as soon as the code finishes, comes back and returns the result into the `response` variable.
<br><br>

5. Do the same with `processRequest()`.
   <br>

```js
const processedResponse = await processRequest(response);
console.log(processedResponse);
```

<br><br>

6. Call the async function.
   <br>

```js
async function doWork() {
  const response = await makeRequest("Google");
  console.log("Response received.");

  const processedResponse = await processRequest(response);
  console.log(processedResponse);
}

doWork();

// Output:

// Making request to Google.
// Response received.
// Processing response...
// Extra information + Google says 'Hi!'.
```

<br><br>

`doWork()` works exactly like promises.

<br><hr /><br>

## **HANDLING ERRORS**

<br>

Instead of `catch()`, use the **try/catch block**.
<br><br>

Use `try` keyword. Put all the code that could potentially fail inside of the brackets.

Afterwards, use `catch` that takes a parameter (`error`) and do what you want with it.
<br><br>

```js
async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response received.");

    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}
```

<br><hr /><br>

**Key takeaways:**
<br>

- wrap your code inside of a function

- use `async` keyword before the function definition

- use `await` keyword before all asynchronous code that is going to be executed

- use `thy/catch` to handle errors

<br><hr /><br>

**Full code:**
<br>

```js
function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}.`);

    if (location === "Google") {
      resolve("Google says 'Hi!'.");
    } else {
      reject("We can only talk Google.");
    }
  });
}

// will always resolve
function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response...");
    resolve(`Extra information + ${response}`);
  });
}

async function doWork() {
  try {
    // will return the same thing as resolve() section of the Promise
    const response = await makeRequest("Google");

    // we will see this as soon as await finishes executing
    console.log("Response received.");

    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork();
```

<br><hr/><br>

## Resources

<br>

- [YT tutorial](https://www.youtube.com/watch?v=V_Kr9OSfDeU&list=WL&index=14)

- [Async/Await Function in JavaScript](https://www.geeksforgeeks.org/async-await-function-in-javascript/)

- [MDN Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

- [MDN Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
