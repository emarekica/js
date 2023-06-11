
1. [AJAX vs ASYNC](#1-ajax-vs-async)
2. [Payload and parameters](#2-payload-and-parameters)
3. [Pagination](#3-pagination)
4. [Parts of HTTP request](#4-parts-of-http-request)
5. [Working with API](#5-working-with-api)

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

Syntax: XMLHttpRequest has a more complex and verbose syntax, while Fetch API has a simpler and more intuitive syntax.

Promises: Fetch API uses promises, which makes it easier to handle asynchronous operations and provides a more consistent way of dealing with responses and errors. Promises are represented by the `then()` method.

Response Object: Fetch API provides a built-in Response object that represents the response received from the server. It offers methods like `json()`, `text()`, and `blob()` to extract and parse the response data conveniently.

Cross-Origin Requests: Fetch API follows the same-origin policy strictly, meaning that it does not send cookies or authentication headers unless specified. XMLHttpRequest, on the other hand, includes cookies and authentication headers by default for requests made to the same origin.

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

---

Fetch API example:
<br>

```js
 // Make a GET request using Fetch API
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
// Make a GET request with custom headers
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

<br><hr /><br>

## 2. Payload and parameters
<br>

**Payload**: In the context of an API request, the payload refers to the data that is sent within the body of the request. It can include various types of data, such as JSON objects, form data, or binary data, depending on the requirements of the API. **Included in the request body.**
<br><br>

**Request Parameters**: Request parameters are additional values or information sent along with the request to provide specific instructions or filter the data being requested. They are typically included in the URL as query parameters (e.g., ?param1=value1&param2=value2). Request parameters can be used to filter data, specify pagination, or provide other instructions to the server. **Part of request headers.**
<br><br>

Both payload and request parameters are methods for sending data to the server, but they differ in where the data is included. Payload is typically included in the request body, while request parameters are included in the URL or as part of the request headers, depending on the API's requirements and conventions.

<br><hr /><br>

## 3. Pagination

<br>

In the context of APIs, refers to the technique of dividing a large set of data into smaller, more manageable chunks or pages. It allows you to retrieve data from an API in smaller portions rather than receiving all the data in a single response.

When an API response contains a large amount of data, pagination helps improve performance and reduces the burden on both the client and the server. Instead of retrieving and processing all the data at once, you can request and handle smaller subsets of data incrementally.
<br>

Pagination is typically implemented using parameters in the API request, such as page and limit.
Here's a simplified example of how pagination works:
<br>

1. Initial Request:

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

2. API Response:

The API responds with the requested data, containing the first 10 items. Along with the data, the response may include additional information, such as the total number of items available and the number of pages.
<br>

3. Handling the Response:
You process the received data, display it, or perform any necessary operations. Additionally, you can extract information from the response, such as the total number of items or the number of pages, to build a pagination UI for the user.
<br>

4. Requesting Next Page:
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

<br><hr /><br>

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
<br><hr /><br>

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
<br><hr /><br>






