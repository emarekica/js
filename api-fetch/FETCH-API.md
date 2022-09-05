# FETCH API

<br>

How to use fetch API built into the browser to make asynchronous request to different network resources by using `GET` , `POST`, `PUT` etc.

<br><hr /><br>

## Concepts:

<br>

1. [What is the fetch API](#1-what-is-the-fetch-api)

2. [How to use the fetch API](#2-how-to-use-the-fetch-api)

3. [How to handle API response errors](#3-how-to-handle-api-response-errors)

4. [How to use JSON data with fetch](#4-how-to-use-json-data-with-fetch)

<br><hr /><br>

## 1. What is the fetch API

<br>

We will be using fake API that will give back fake info about users or a single user.
<br>

    https://reqres.in/api/users
    https://reqres.in/api/users/1

<br>

For that purposes, [JSON placeholder website](https://jsonplaceholder.typicode.com/) is useful.

<br><hr /><br>

## 2. How to use the fetch API

<br>

1st property is URL.
<br>

2nd property is optional and it is a callback function.

It can be POST or GET request.
<br>

    fetch("https://reqres.in/api/users", { callback function})

<br><br>

If you log it to the console, you get `promise`.
<br>

    Promise {<pending>}
      [[Prototype]]: Promise
      [[PromiseState]]: "fulfilled"
      [[PromiseResult]]: Response

<br><br>

That means that **fetch() is promise-based**.

- use async/await

- use `.then()` / `catch()`
  <br><br>

Log the response object to see how it looks like.
<br>

    fetch("https://reqres.in/api/users").then((response) => console.log(response));

<br>

    Response {type: 'cors', url: 'https://reqres.in/api/users', redirected: false, status: 200, ok: true, …}
      body: (...)
      bodyUsed: false
      headers: Headers {}
      ok: true
      redirected: false
      status: 200
      statusText: ""
      type: "cors"
      url: "https://reqres.in/api/users"
      [[Prototype]]: Response

<br><br>

This means it was successful.
<br>

    ok: true
    status: 200

<br><br>

`Body` is going to be data, but it is inaccessible directly from the `Response` object.

We need to call a method on it to convert the response to JSON (we are using JSON data).

It is then going to return another promise.

<br>

    fetch("https://reqres.in/api/users")
      .then((response) => response.json());

<br><br>

Use `.then()` again for the actual `data`. See it in the console.
<br>

    fetch("https://reqres.in/api/users")
      // converts inaccessible data from the Response into JSON
      .then((response) => response.json())

      .then((data) => console.log(data));

<br>

    {page: 1, per_page: 6, total: 12, total_pages: 2, data: Array(6), …}
      data: Array(6)
        0: {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg'}
        1: {id: 2, email: 'janet.weaver@reqres.in', first_name: 'Janet', last_name: 'Weaver', avatar: 'https://reqres.in/img/faces/2-image.jpg'}
        2: {id: 3, email: 'emma.wong@reqres.in', first_name: 'Emma', last_name: 'Wong', avatar: 'https://reqres.in/img/faces/3-image.jpg'}
        3: {id: 4, email: 'eve.holt@reqres.in', first_name: 'Eve', last_name: 'Holt', avatar: 'https://reqres.in/img/faces/4-image.jpg'}
        4: {id: 5, email: 'charles.morris@reqres.in', first_name: 'Charles', last_name: 'Morris', avatar: 'https://reqres.in/img/faces/5-image.jpg'}
        5: {id: 6, email: 'tracey.ramos@reqres.in', first_name: 'Tracey', last_name: 'Ramos', avatar: 'https://reqres.in/img/faces/6-image.jpg'}
        length: 6
        [[Prototype]]: Array(0)
      page: 1
      per_page: 6
      ...

<br><br>

<hr /><br>

## 3. How to handle API response errors

<br>

What to do when you ask for a user that doesn't exist?

It gives back `status 404`. The `GET` request happened and we ran succesfully `then()` code, although 404 got returned.
<br>

    fetch("https://reqres.in/api/users/23")
      // converts inaccessible data from the Response into JSON
      .then((response) => response.json())

      .then((data) => console.log(data));

<br>

    GET https://reqres.in/api/users/23 404
    {}

<br><br>

That is because fetch always succeeds unless there is some form of network error or the browser has problems with connection to the internet. Failure happens only with the fetch itself, not with the API you're calling.
<br>

Check inside of the response if the response is OK.
<br>

    .then((response) => {
        // check if the response is OK
        if (response.ok) {
          console.log("Successful response.");
        } else {
          console.log("Response not successful.");
        }

        response.json();
      })

<br><hr /><br>

## 4. How to use JSON data with fetch

<br>

We can:

- GET

- POST

- UPDATE

- DELETE

... data from the server.
<br>

Inside of the `fetch` method, create a new user with `POST` method in the 2nd argument.
<br>

    fetch("https://reqres.in/api/users", {
      // creating new user
      method: "POST",
    }

<br><br>

`data` for the new user goes inside of the body of the Response object passed as **JSON** with **`JSON.stringify()`**.
<br>

    fetch("https://reqres.in/api/users", {

    method: "POST",

    body: JSON.stringify({
      name: "User 1 ",
    }),

<br><br>

We also need to set the **headers** to the correct content type . This tells `fetch` that you will be passing JSON.
<br>

    headers: {
      "Content-Type": "application/json",
    },

<br><br>

Now we are gettin an object with newly created user.
<br>

    {name: 'User 1 ', id: '543', createdAt: '2022-09-05T12:41:23.884Z'}
      createdAt: "2022-09-05T12:41:23.884Z"
      id: "543"
      name: "User 1 "
      [[Prototype]]: Object

<br><br>

<br><hr /><br>

## Full code

<br>

```js
"use strict";

fetch("https://reqres.in/api/users", {
  // creating new user
  method: "POST",

  // tell fetch you'll be passing in JSON
  headers: {
    "Content-Type": "application/json",
  },

  // data for the new user goes inside of the body of the Response object passed as JSON with JSON.stringify()
  body: JSON.stringify({
    name: "User 1 ",
  }),
})
  // converts inaccessible data from the Response into JSON
  .then((response) => {
    // check if the response is OK
    if (response.ok) {
      console.log("Successful response.");
    } else {
      console.log("Response not successful.");
    }

    return response.json();
  })

  .then((data) => console.log(data))
  .catch((error) => console.log("error"));
```

<br><hr /><br>

## Resources

<br>

- [YT tutorial](https://www.youtube.com/watch?v=cuEtnrL9-H0&list=WL&index=12)

- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_APIs)

- [YT tutorial PROMISES](https://www.youtube.com/watch?v=DHvZLI7Db8E)

- [YT tutorial ASYNC/AWAIT](https://www.youtube.com/watch?v=V_Kr9OSfDeU)
