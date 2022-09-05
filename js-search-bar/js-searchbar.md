# JS Search bar

<br>

## Resource

[YT tutorial](https://www.youtube.com/watch?v=TlP5WIxVirU)

<br><hr /><br>

**JS**

Use [API with fake data](https://jsonplaceholder.typicode.com) to pull in user cards.

Copy fake users JSON URL from [here](https://jsonplaceholder.typicode.com/users) and use it to make a request to this web page. For that, use [fetch() API](https://youtu.be/cuEtnrL9-H0).

Convert the response to JSON. Then chain to get `data`.
<br>

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {});
```

<br><br>

Then we want to display the data on the page via [HTML template](https://blog.webdevsimplified.com/2020-06/template-tag/).
<br>

    <template data-user-template>
      <div class="card">
        <div class="header" data-header></div>
        <div class="body" data-body></div>
      </div>
    </template>

<br><br>

This will return a document fragment.

To use the data in it, we need to get the 1st child, which will be the card itself.
<br>

```js
  .then((data) => {
    // get the content of the template
    // clone that content and all the content inside of it
    const card = userCardTemplate.content.cloneNode(true).children[0];
  });
```

<br><br>

Returned content:
<br>

      <div class="card">
        <div class="header" data-header></div>
        <div class="body" data-body></div>
      </div>

<br><br>

Add the info you want to it with a loop.
<br>

```js
data.forEach((user) => {
  const card = userCardTemplate.content.cloneNode(true).children[0];
});
```

<br><br>

To be able to work with `header` and `body`, add attributes in the HTML to those elements.
<br>

    <div class="header" data-header></div>
    <div class="body" data-body></div>

<br><br>

Then, select those attributes in the JS.
<br>

      const header = document.querySelector("[data-header]");
      const body = document.querySelector("[data-body]");

<br><br>

Next, set the content.
<br>

      header.textContent = user.name;
      body.textContent = user.email;

<br><br>

Now that the HTML is populated with data, add it to the `user cards` section of HTML with the attribute `data-user-cards-container`.

Make it a global variable.
<br>

      const userCardContainer = document.querySelector("[data-user-cards-container ]");

<br><br>

Take the container and append the card inside of it.
<br>

      userCardContainer.append(card);

<br><br>

**Handling input**
<br>

Add `data-search` attribute in HTML.
<br>

In JS: `const searchInput = document.querySelector("[data-search]");`

<br>

Add event listener on `input` and get the value from the `event`:
<br>

```js
searchInput.addEventListener("input", (event) => {
  const value = event.target.value;
});
```

<br><br>

Now, loop through users in the event listener and hide the ones that don't match the input we typed in.

<br>

Make an user object to get all the user info. Start with an empty array:
<br>

    let users = [];

<br><br>

Inside `fetch()` method, change `forEach()` into `map()` and set `user` to whatever is returned from `data.map()`.

The main difference between map and forEach is that the map method returns a new array by applying the callback function on each element of an array, while the forEach method doesn't return anything.
<br>

    user = data.map((user) => {...}

<br><br>

Return an object that is going to contain data about the user. `element` associated with the user is `card`.
<br>

    return {
      name: user.name,
      email: user.email,
      element: card,
    };

<br><br>

In event listener, inside of a loop, chech for each user if the name and the email from the returned object matches with what we typed in.

Check if the user is supposed to be visible.
<br>

```js
searchInput.addEventListener("input", (event) => {
  const value = event.target.value;
  console.log(users);

  // hide all users that don't match what we type in
  users.forEach((user) => {
    // does the name match the input/does it have the input inside of it
    const isVisible = user.name.includes(value);
  });

  // hides the element if the value doesn't match
  user.element.classList("hide", !isVisible);
});
```

<br><br>

**Removing case sensitivity**
<br>

Convert event (input) value to lower case and do the same with `name` and `email`.
<br>

```js
searchInput.addEventListener("input", (event) => {
  const value = event.target.value.toLowerCase();
  console.log(users);

  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);

    user.element.classList("hide", !isVisible);
  });
});
```

<br><br>
