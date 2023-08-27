
1. [AJAX vs ASYNC](#1-ajax-vs-async)
2. [Payload and parameters](#2-payload-and-parameters)
3. [Pagination](#3-pagination)
4. [Parts of HTTP request](#4-parts-of-http-request)
5. [Working with API](#5-working-with-api)
6. [Promise](#6-promise)
7. [Handling rejected promises](#7-handling-rejected-promises)
8. [Manually rejecting promises](#8-manually-rejecting-promises)
9. [Creating a promise](#9-creating-a-promise)
10. [Promisifying Geolocation](#10-promisifying-geolocation)
11. [Async Await](#11-async-await)
12. [Error handling with try...catch](#12-error-handling-with-trycatch-statement)

<br /><hr /><br />

`json()`
<br>

It returns a promise which resolves with the result of parsing the body text as `JSON`.

Note that despite the method being named `json()`, the **result is not JSON** but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.

## 1. AJAX vs ASYNC
<br>

**AJAX (Asynchronous JavaScript and XML)** is a technique used in web development to send and receive data from a server asynchronously without requiring a full page reload. It allows you to update parts of a web page dynamically, providing a smoother and more interactive user experience.

In the context of JavaScript, an **AJAX call** refers to making an HTTP request to a server from the client-side using JavaScript's XMLHttpRequest or Fetch API. This call can be used to retrieve data in various formats like XML, JSON, or plain text. The server processes the request and sends a response back to the client, which can be used to update the web page dynamically without reloading the entire page.
<br><br>

On the other hand, **"async"** in JavaScript relates to asynchronous programming. It is a programming paradigm that allows non-blocking execution of code, meaning that certain operations can be initiated and executed in the background while other code continues to run.

The "async" keyword in JavaScript is used to define an asynchronous function. An asynchronous function returns a promise, which can be resolved with a value or rejected with an error. Within an async function, you can use the "await" keyword to pause the execution of the function until a promise is resolved. This allows you to write asynchronous code in a more sequential and readable manner, resembling synchronous programming.
<br><br>

While AJAX refers specifically to making asynchronous requests to a server and updating parts of a web page, "async" in JavaScript is a broader concept that applies to any asynchronous operation, not limited to AJAX calls. It is commonly used when dealing with operations such as fetching data from APIs, reading/writing files, or executing time-consuming tasks without blocking the main execution thread.
<br>

In summary, AJAX is a technique for making asynchronous requests to a server and updating parts of a web page dynamically, while "async" in JavaScript is a keyword used to define asynchronous functions and enable non-blocking code execution.
<br>

---

<br>

Both XMLHttpRequest and Fetch API are used in JavaScript to make **AJAX requests**, but they have some differences in terms of syntax and functionality.
<br>

XMLHttpRequest (XHR) is the older API that has been around for a long time and is supported in all modern browsers. It provides a way to send and receive data over HTTP or HTTPS. XHR uses event-based callbacks or the "onreadystatechange" event to handle the various stages of the request, such as when the request is sent, when a response is received, and when the request is complete. XHR supports synchronous as well as asynchronous requests.

Fetch API, introduced in modern browsers, provides a more modern and flexible way to make network requests. It is based on promises and provides a simpler and more powerful API compared to XHR. Fetch API is specifically designed for making asynchronous requests and returns a promise that resolves to the response. It offers a chainable syntax using the `.then()` method, allowing for easier handling of response data and error conditions.
<br><br>

Here are a few notable differences between XMLHttpRequest and Fetch API:
<br>

_Syntax_: XMLHttpRequest has a more complex and verbose syntax, while Fetch API has a simpler and more intuitive syntax.

_Promises_: Fetch API uses promises, which makes it easier to handle asynchronous operations and provides a more consistent way of dealing with responses and errors. Promises are represented by the `then()` method.

_Response Object_: Fetch API provides a built-in Response object that represents the response received from the server. It offers methods like `json()`, `text()`, and `blob()` to extract and parse the response data conveniently.

_Cross-Origin Requests_: Fetch API follows the same-origin policy strictly, meaning that it does not send cookies or authentication headers unless specified. XMLHttpRequest, on the other hand, includes cookies and authentication headers by default for requests made to the same origin.
<br><br>

Overall, while both XMLHttpRequest and Fetch API can be used to achieve similar goals, Fetch API is generally considered the preferred choice for making AJAX requests in modern JavaScript due to its simplicity, promise-based approach, and enhanced features.


<br><br>

XMLHttpRequest example:
<br>

```js
// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Configure the request
xhr.open('GET', 'https://api.example.com/data', true);

// Set the response type (optional)
xhr.responseType = 'json';

// Set up event handler for successful request
xhr.onload = function() {
  if (xhr.status === 200) {
    // Request was successful
    var responseData = xhr.response;
    console.log(responseData);
  }
};

// Set up event handler for error
xhr.onerror = function() {
  // An error occurred during the request
  console.log('Error occurred during the request.');
};

// Send the request
xhr.send();
```

<br><hr /><br>

Fetch API example:
<br>

```js
fetch('https://api.example.com/data')
  .then(function(response) {
    if (response.ok) {
      // Request was successful
      return response.json();
    } else {
      // Handle error response
      throw new Error('Request failed.');
    }
  })
  .then(function(data) {
    // Process the response data
    console.log(data);
  })
  .catch(function(error) {
    // Handle error
    console.log(error);
  });
```

<br><hr /><br>

Request with Headers:
<br>

```js
fetch('https://api.example.com/data', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  }
})
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed.');
    }
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
```

<br><br>

POST request:
<br>

```js
// Make a POST request
fetch('https://api.example.com/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'John', age: 30 }) // optional
})
  .then(function(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed.');
    }
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
```

<br><br>

Handling different response type:
<br>

```js
// Make a request and handle different response types
fetch('https://api.example.com/data')
  .then(function(response) {
    if (response.ok) {
      // Check Content-Type header for different response types
      var contentType = response.headers.get('Content-Type');
      if (contentType.includes('application/json')) {
        return response.json();
      } else if (contentType.includes('text/html')) {
        return response.text();
      } else {
        throw new Error('Unsupported response type.');
      }
    } else {
      throw new Error('Request failed.');
    }
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });
```

<br><br>

## 2. Payload and parameters
<br>

**Payload**: In the context of an API request, the payload refers to the data that is sent within the body of the request. It can include various types of data, such as JSON objects, form data, or binary data, depending on the requirements of the API. **Included in the request body.**
<br><br>

**Request Parameters**: Request parameters are additional values or information sent along with the request to provide specific instructions or filter the data being requested. They are typically included in the URL as query parameters (e.g., ?param1=value1&param2=value2). Request parameters can be used to filter data, specify pagination, or provide other instructions to the server. **Part of request headers.**
<br><br>

Both payload and request parameters are methods for sending data to the server, but they differ in where the data is included. Payload is typically included in the request body, while request parameters are included in the URL or as part of the request headers, depending on the API's requirements and conventions.

<br><br>

## 3. Pagination

<br>

In the context of APIs, refers to the technique of dividing a large set of data into smaller, more manageable chunks or pages. It allows you to retrieve data from an API in smaller portions rather than receiving all the data in a single response.

When an API response contains a large amount of data, pagination helps improve performance and reduces the burden on both the client and the server. Instead of retrieving and processing all the data at once, you can request and handle smaller subsets of data incrementally.
<br>

Pagination is typically implemented using parameters in the API request, such as page and limit.
Here's a simplified example of how pagination works:
<br>

1. **Initial Request**:

You send an API request to retrieve the first page of data. The request may look something like this:
<br>

```bash
Copy code
GET /api/data?page=1&limit=10
```
<br>

In this example:

`GET` is the **HTTP method** used in the request. In this case, it is a GET request, which is used to retrieve data from a specified resource.
<br><br>

`/api/data` is the **path or endpoint of the resource you want to access on the server**. In this example, it is /api/data. It represents the specific resource or data you are requesting from the API.
<br><br>

`?` The question mark is the **delimiter** that separates the base URL or path from the query string. It indicates that the query string is about to start.
<br><br>

`page=1` indicates that you want the first page, and limit=10 specifies that you want to retrieve 10 items per page.
<br><br>

2. **API Response**:

The API responds with the requested data, containing the first 10 items. Along with the data, the response may include additional information, such as the total number of items available and the number of pages.
<br>

3. **Handling the Response**:
You process the received data, display it, or perform any necessary operations. Additionally, you can extract information from the response, such as the total number of items or the number of pages, to build a pagination UI for the user.
<br>

4. **Requesting Next Page**:
If the user wants to see the next page of data, you send another request with an incremented page number, like this:
<br>

```bash
GET /api/data?page=2&limit=10
```
<br>

The API responds with the next set of data (items 11-20), and the process repeats.
<br><br>

By using pagination, you can control the amount of data retrieved at a time, reducing the response size and improving the overall performance of your application. It also allows users to navigate through large data sets more easily.

It's important to note that pagination implementations may vary across different APIs. Some APIs may use different parameter names, such as offset and limit, or provide additional parameters for sorting or filtering the data. Always refer to the API documentation for the specific pagination approach and parameters supported by the API you're working with.

<br><br>

## 4. Parts of HTTP request
<br>

`data?page=2&limit=10` is known as the **query string** or **query parameters**.
<br>

In a URL, the query string is the portion that follows the question mark (?) and consists of one or more key-value pairs separated by ampersands (&). **Each key-value pair represents a query parameter**, where the key is the parameter name and the value is its corresponding value.
<br>

In the example you provided, page and limit are query parameters. The page parameter is set to 2, indicating that you want to retrieve the second page of data, and the limit parameter is set to 10, specifying that you want to retrieve 10 items per page.

Query parameters are commonly used in APIs for various purposes, such as filtering, sorting, pagination, or specifying additional options for the requested data. They allow you to pass information to the server and customize the API's behavior based on your requirements.
<br><br>

It's worth noting that the handling and interpretation of query parameters are specific to the API you're working with. The API documentation should provide details on the supported parameters, their names, and their expected values.
<br><br>

## 5. Working with API
<br>

Here are a few key aspects to consider when working with an API:
<br>

- **API Documentation**: Always refer to the API documentation provided by the API provider. It typically contains information about the endpoints, request and response formats, authentication requirements, supported query parameters, and any specific guidelines for interacting with the API.
<br>

- **Response Format**: APIs may provide responses in various formats, such as JSON, XML, or even plain text. Understanding the expected response format is crucial for correctly parsing and extracting the desired information from the API response.
<br>

- **Data Structures**: APIs often have defined data structures for request payloads and response bodies. You need to be aware of these structures to properly format your requests and extract the relevant data from the responses.
<br>

- **Authentication and Authorization**: Some APIs require authentication or API keys to access protected resources. You should familiarize yourself with the authentication methods and any required headers or tokens needed to interact with the API.
<br><br>

By studying the API documentation and understanding the specifics of the API you are working with, you'll gain the necessary insights to construct requests, handle responses, and parse the data effectively. It allows you to write code that can properly interact with the API and extract the desired information for your application or use case.
<br><br>

## 6. Promise
<br>

Object used as placeholder for future result of async operation.

- remove the need for events and callbacks to handle async results

- can be **chained** instead of nesting >> avoiding _callback hell_

<br><br>

**Lifecycle of a promise**

- time sensitive (change over time)
- can be in different states (impossible to change it)
- only **settled once**

<br>

1. _pending_ (async task still in the background, no result value available)

2. _settled_: _fulfilled_ (successfully resulted in value), _rejected_ (error during async task)
<br><br>

**consuming a promise**
<br>

`fetch()` function builds a promise and returns it to us to consume the promise (we don't build them ourselves)
<br><hr /><br>


**Common error**
<br>

Chaining promise directly onto new nested promise.

<br>

Error:
<br>

```js
  .then(data => {
    renderCountry(data[0]);

    const neighbor = data[0].borders?.[0];

    if(!neighbor) return;

    return fetch(`https://restcountries.com/v3.1/name/${neighbor}`);

    // Error
    fetch(`https://restcountries.com/v3.1/name/${neighbor}`).then(response => response.json()
  );
  });
```

<br><br>

Correct:
<br>

```js
.then(data => {
    renderCountry(data[0]);

    const neighbor = data[0].borders?.[0];

    if(!neighbor) return;

    return fetch(`https://restcountries.com/v3.1/name/${neighbor}`);
  })
  .then(response => response.json())
  .then(data => renderCountry(data, 'neighbor')
);


```

<br><br>

## 7. Handling rejected promises
<br>

- 1st callback function is always called for the fulfilled promise
- 2nd callback called when the promise is rejected

```js
const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)

  .then(
    response => response.json(),
    error => alert(err)
    )
  .then(data => {
    renderCountry(data[0]);

    const neighbor = data[0].borders?.[0];

    if(!neighbor) return;

    // Country 2
    return fetch(`https://restcountries.com/v3.1/name/${neighbor}`);
  })
  .then(response => response.json())
  .then(data => renderCountry(data, 'neighbor'));

};
```

<br><br>

Errors propagate down the chain until they are caught.
If they are not, we get "uncaught error" in the Console.
<br>

Error is an object and can be created with a constructor.

<br><br>

## 8. Manually rejecting promises
<br>

Promise returned by this handler will be a **rejected promise**.
<br>

```js
  .then( response => {
    console.log(response);

    // manually throwing error/rejecting promise
    if(!response.ok) {
      throw new Error(`Country not found (${response.status})`);
    }

    response.json(); // for fulfilled promise
  })
```

<br>

It will propagate to the `catch()`handler.

<br>

```js
  .catch(error => {
    console.log(`${error}`);
    renderError(`Something went wrong: ${error.message}. Try again! `);
  })
```

<br><br>

Whole function:
<br>

```js
const getCountryData = function(country) {

  // Country 1
  fetch(`https://restcountries.com/v3.1/name/${country}`)

  .then( response => {
    console.log(response);

    // manually throwing error/rejecting promise
    if(!response.ok) {
      throw new Error(`Country not found (${response.status})`);
    }

    response.json(); // for fulfilled promise
  })

  // returns new promise
  .then(data => {
    renderCountry(data[0]);

    // const neighbor = data[0].borders?.[0];
    const neighbor = "asdfasdf";

    if(!neighbor) return;

    // Country 2
    // Whatever is returned from this promise becomes fulfilled value of this promise
    return fetch(`https://restcountries.com/v3.1/name/${neighbor}`);
  })

  // receives value of the promise of the previous then() method = RESPONSE
  // response is fulfilled value of a fetch
  // it becomes body = data stored in the body
  .then(response => response.json())

  // handles data stored in the body from previous then()
  .then(data => renderCountry(data, 'neighbor'))

  // ERROR handling
  .catch(error => {
    console.log(`${error}`);
    renderError(`Something went wrong: ${error.message}. Try again! `);
  })

  // its callback function is called no matter what happens with the promise
  .finally(() => {
    countriesContainer.style.opacity = 1;
  });
};

// Call the function whenever the user clicks on a button
btn.addEventListener('click', function() {
  getCountryData('portugal');
});

getCountryData("asdfasdfasdf");
```

<br><br>

## 9. Creating a promise
<br>

Promise can be created with:

1. `fetch()` function

2. constructor `new Promise(function(){resolve, reject})` function

<br><br>

**syntax:**

```js
new Promise(executor)
```
<br>

`executor`
> A function to be executed by the constructor. It receives two functions as parameters: `resolve()` and `reject()`. Any errors thrown in the executor will cause the promise to be rejected, and the return value will be neglected.
<br>

`resolve()`
> used to set the promise as fulfilled >>> the result is available in `then()` handler
<br>

`reject()`
> used to set the promise as rejected >>> the result is available in `catch()` handler

<br><br>

The `executor` is custom code that ties an outcome in a callback to a promise. You, the programmer, write the executor. Its signature is expected to be:

```js
function executor(resolveFunc, rejectFunc) {
  // Typically, some asynchronous operation that accepts a callback,
}
```

**Example:**
<br>

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // Expected output: "foo"
});

console.log(promise1);
// Expected output: [object Promise]
```
<br><br>

If your task is already promise-based, you likely do not need the `Promise()` constructor.
<br>

[MDN Promise constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

<br><hr /><br>

### "Promisifying"
<br>

Converting callback-based async behavior to promise based.

**Pattern:**
<br>

```js
const lotteryPromise = new Promise(function(resolve, reject){

  console.log('Lottery draw is happening...');

  // async part
  setTimeout(function() {
    if(Math.random() >= 0.5) {
      resolve('You win! :)');
    } else {
      reject(new Error('You lost. :('));
    }
  }, 2000);
});

// consuming promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
```

<br><br>

In practice, most of the time we consume promises.

Promises are **built to wrap old callback-based functions into promises.**

A function is created that creates and returns a promise. It encapsulates the async behavior further.
<br><br>

Similar to `fetch()`, this creates and returns a promise.
<br>

```js
const wait = function(seconds) {

  // create & return promise
  // timer cannot fail >> no need for "reject"
  return new Promise(function(resolve) {
    setTimeout(resolve, seconds * 1000)
  });
};

// creates promise that waits 2 secs and resolves
// does not receive resolved value
wait(2).then(() => {
  console.log('I waited for 2 secs')

  // returns new promise; just like fetch()
  return wait(1);
  })

  // handles newly created promise
  .then(() => console.log('I waited for 1 second'));
```

<br>

### Create fulfilled / rejected promise immediately
<br>

- with [static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#specifications) on Promise constructor

```js
Promise.resolve('Resolved again!').then(res => console.log(res));
Promise.reject(new Error('Problem!')).catch(err => console.error(err));
```

<br><br>
## 10. Promisifying Geolocation
<br>

## 11. Async Await
<br>

Only about consuming promises.

<br><br>

Async function performs in the background while performing the code inside of it.
When it is done, **it automatically returns a promise**.

Inside `async` function there can be 1 or more `await` functions.

`await` stops code execution at its point until promise is fulfilled, but because `await` is running in the background, it is not blocking the call stack.

Removes the need for `then()`.
But it is **syntactic sugar over `then()` in promises.** They are still used, but in a different way.
<br>

This is the same...

```js
const whereAmI = async function(country) {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${country}&format=json`);
}
```

<br>

As this:

```js
const whereAmI = async function(country) {
  fetch(`https://nominatim.openstreetmap.org/search?q=${country}&format=json`).then(result => console.log(result));
}
```

<br><br>

## 12. Error handling with `try...catch` statement
<br>

Has nothing to do with `async` / `await`, but can be used to handle errors in `async` functions.

Simple example:

```js
try {
  let y = 1;
  const x = 2;

  x = 3;
} catch(error) {
  alert(error.message);
}
```

<br>

Handle errors in `async` functions:

```js
const myAsyncFunction = async function() {
  try {
    // function body
  }
  catch(err) {
    console.log(err);
  }
}
```

