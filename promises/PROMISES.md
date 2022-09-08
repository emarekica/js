# PROMISES

<br>

The `Promise` object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

**Promises are used for asynchronous handling of events and synchronous http requests.**

Great for when you want to do something that takes a long time to do in the background (downloading an img from a different server) so you can do something else while it is downloading, instead of waiting.

You can catch it if it is failed so you can retry it or give the user an error message.
<br><br>

Just like in real life, in JS a promise is that it is going to be done. Then, a promise has two results:
<br>

- completed / **resolved**

- failed / **rejected**
  <br><br>

**Benefits of Promises**
<br>

- Improves Code Readability

- Better handling of asynchronous operations

- Better flow of control definition in asynchronous logic

- Better Error Handling
  <br><br>

**4 promise states**
<br>

- `fulfilled`: Action related to the promise succeeded
- `rejected`: Action related to the promise failed
- `pending`: Promise is still pending i.e. not fulfilled or rejected yet
- `settled`: Promise has fulfilled or rejected
  <br><br>

![promise states](./img/promise%20states.png)

<br><hr /><br>

### **Syntax**

<br>

```js
// with promise constructor

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]
```

<br><br>

- promise constructor takes only one argument which is a callback function (and that callback function is also referred as anonymous function, too)

- callback function takes two arguments, `resolve` and `reject`

- perform operations inside the callback function and if everything went well then call resolve

- if desired operations do not go well then call reject
  <br><br>

_example_
<br>

```js
let promise = new Promise(function (resolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are a GEEK");
  })
  .catch(function () {
    console.log("Some error has occurred");
  });

// output: Success, You are a GEEK
```

<br><br>

**INTERACTION WITH A PROMISE: Promise consumers**
<br>

Promises can be consumed by registering functions using `then()` and `catch()` methods.
<br><br>

1. `then()`
   <br>

Invoked when a promise is either **resolved** or **rejected**. It may also be defined as a career which takes data from promise and further executes it successfully.
<brr>

_Parameters:_
<br>

- `then()` method takes two functions as parameters

  - 1st function is executed **if promise is resolved** and a result is received

  - 2nd function is executed **if promise is rejected** and an error is received. (It is optional and there is a better way to handle error using .catch() method)

<br><br>

**syntax**
<br>

```js
.then(function(result){
        //handle success
    }, function(error){
        //handle error
    })
```

<br><br>

_Example:_ promise resolved
<br>

```js
let promise = new Promise(function (resolve, reject) {
  resolve("Geeks For Geeks");
});

promise.then(
  function (successMessage) {
    //success handler function is invoked
    console.log(successMessage);
  },
  function (errorMessage) {
    console.log(errorMessage);
  }
);

// output: Geeks For Geeks
```

<br><br>

_Example:_ promise rejected
<br>

```js
let promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected");
});

promise.then(
  function (successMessage) {
    console.log(successMessage);
  },
  function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  }
);

// output: Promise Rejected
```

<br><br>

2. `catch()`
   <br>

Invoked when a promise is either rejected or some error has occurred in execution. It is used as an **error handler** whenever at any step there is a chance of getting an error.
<br><br>

_Parameters:_
<br>

- `catch()` method takes one function as parameter

  - function to handle errors or promise rejections

  - `catch()` method internally calls `.then(null, errorHandler)`
    <br><br>

**`catch()` is just a shorthand for `.then(null, errorHandler)`**

<br><br>

**syntax**
<br>

```js
.catch(function(error){
        //handle error
    })
```

<br><br>

_example:_ promise rejected
<br>

```js
let promise = new Promise(function (resolve, reject) {
  reject("Promise Rejected");
});

promise
  .then(function (successMessage) {
    console.log(successMessage);
  })
  .catch(function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  });

// output: Promise Rejected

let promise = new Promise(function (resolve, reject) {
  throw new Error("Some error has occurred");
});

promise
  .then(function (successMessage) {
    console.log(successMessage);
  })
  .catch(function (errorMessage) {
    //error handler function is invoked
    console.log(errorMessage);
  });

// output: Error: Some error has occurred
```

<br><hr /><br>

## REPLACING CALLBACKS WITH PROMISES

<br>

Promises are meant to replace callbacks (to avoid _callback hell_).
<br><br>

Callback variant:
<br>

```js
let userLeft = true;
let userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "WebDevSimplified < Cat",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

watchTutorialCallback(
  (message) => {
    console.log(`Success: ${message}`);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
```

<br><br>

Promise variant:
<br>

```js
let userLeft = true;
let userWatchingCatMeme = false;

function watchTutorialPromise() {
  // create a promise
  return new Promise((resolve, reject) => {
    // this code was previously calling callbacks
    // "callback" >> "resolve", "errorCallback" >> "reject"
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}

// it takes no parameters
watchTutorialPromise()
  .then((message) => {
    console.log(`Success: ${message}`);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
```

<br><br>

You no longer have callbacks in the `watchTutorialPromise()`.

Instead of nesting and entering _callback hell_, we add another `then()`.

<br><hr /><br>

## USE CASES OF PROMISES

<br>

**`Promise.all()`**
<br><br>

[Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) takes an iterable of promises as an input, and returns a single `Promise` that resolves to an array of the results of the input promises.

This returned promise will **fulfill** when all of the input's promises have fulfilled, or if the input iterable contains no promises.

It **rejects** immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

<br><br>

**syntax**
<br>

    Promise.all(iterable);

<br><br>

We want to record 3 videos all at the same time.
<br>

```js
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 recorded.");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 recorded.");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 recorded.");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]);

// output:
// (3) ['Video 1 recorded.', 'Video 2 recorded.', 'Video 3 recorded.']
```

<br><br>

`Promise.all()` recieves an array of all promises we want to run.

Depending on if the promises passed in resolve or fail, `Promise.all()` is going to call `then()` or `catch()` method.

`then()` is going to send an array of all successful messages containing all of the messages (_"Video 1 recorded."_, _"Video 2 recorded."_, _"Video 3 recorded."_) and print them on the screen.

**The are all running at the same time.** If some of them are quicker, they don't have to wait for the rest to finish.
<br><hr /><br>

**`Promise.race()`**
<br><br>

[`The Promise.race()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race) method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise.

It returns a pending Promise that asynchronously yields the value of the first promise in the given iterable to fulfill or reject.
<br><br>

**syntax**
<br>

    Promise.race(iterable)

<br><br>

```js
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
  (message) => {
    console.log(message);
  }
);

// output: Video 1 recorded.
```

<br><br>

`Promise.race()` will return just one message, the one of the promise fulfilled.

<br><hr /><br>

## Resources

<br>

- [YT tutorial](https://www.youtube.com/watch?v=DHvZLI7Db8E&list=WL&index=14)

- [Geeks for Geeks promises](https://www.geeksforgeeks.org/javascript-promises/)

- [MDN Using promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

- [MDN Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

- [MDN Promise constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

- [JS info: Promise basics](https://javascript.info/promise-basics)
