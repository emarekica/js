# MODAL WINDOW

**building UI component**

**At the beginning of a project:**

1. select the elements you need
2. store the selections into variables
3. use them repeatedly



In this project, we will work with **classes**.
`class="hidden"` is the main one we will work with

We will not be doing HTML with JS.
We will show/hide the modal window, according to the clicks on the buttons.


**window is currently hidden because:**
    1. in HTML, it has a `class="modal hidden"`
    2. in CSS
        ```
        .hidden { display: none; }
        ```

 ### Main classes we need to select:

- hides/shows the modal window, depending on the clicks on the buttons:     `class="modal-hidden"`

- "x" button to close the modal window: `class="close-modal"`

- dark part that hides the background when the modal window is up: `class="overlay  hidden"`

- buttons: `class="show-modal"`

**We will store those selections in VARIABLES.**


### querySelectorAll

**limitations of `querySelector`**

Whenever we use it with a class that matches multiple elements, only the first one will be selected.
Replace it with **`querySelectorAll`** .

If you log it to the Console, you will get a **node list**.
It is similar to an array, here it works like one.

    ```
    > NodeList(3) [button.show-modal, button.show-modal, button.show-modal]
        > 0: button.show-modal
        > 1: button.show-modal
        > 2: button.show-modal
            length: 3
    
    > [[Prototype]]: NodeList
    ```

If you want to do something with all 3 modal buttons, you need to **loop through the node list**.

    ```
    // looping through "Show modal" buttons
    // logging the text content of each button
    
        for( let i = 0; i < openButtons.length; i++) {
          console.log(openButtons[i].textContent);
        }
    ```


## MANIPULATING CLASSES WITH JS

## MANIPULATING CLASSES WITH JS

Attach an **event handler** to each ShowModal button.
Use **loop over node list** ("array" holding all of the buttons).

`openButtons[i]` is the current button element at each iteration.
Instead of reading the `textContent` property, **add an event listener**.

    ```js
    for(let i = 0; i < openButtons.length; i++) {
          openButtons[i]
            .addEventListener("click", function(){
                console.log("Button clicked!");
              });
    }
    ```

Now each of the buttons has an event handler function attached to it.


### Display the modal window

It is already in the HTML, currently hidden because it has the `hidden` class.
If you remove it, it will be visible on the screen.
That is what we'll do with JS: 

1. add the selected element to the loop (`modal`)
2. read `classList` property
3. methods on this property: `remove()`

```js
    for(let i = 0; i < openButtons.length; i++) {
      openButtons[i]
        .addEventListener("click", function(){
            console.log("Button clicked!");
 
            modal.classList.remove("hidden");
          });
    }
```

**This is the main way to change styles on web sites.**


### The "x" button

-- adding `eventListener` to the button class to make the Modal window close when the "x" button is clicked
-- we are just _defining_ the function, JS engine will call it (`function()`)
-- we want to **add class `hidden` back on**

```js
    closeButton.addEventListener("click", function() {
          modal.classList.add("hidden");
          overlay.classList.add("hidden");  
       });
```
   
   
Close the Modal window not just when we click "x" button, but also when we click on the overlay:

```js
overlay.addEventListener("click", function() {
          modal.classList.add("hidden");
          overlay.classList.add("hidden");
      });  	
```

### DRY version of the code**

-- create a function `closeModal`
-- use it as an argument (just type in the variable), don't call the function

```js
    const closeModal = function() {
      modal.classList.add("hidden");
      overlay.classList.add("hidden");
    }
 
    closeButton.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
```
---

### Important take-away 
- Classes are added or removed in order to change the appearance of the page.
- That way we (de)activate certain styles all at the same time.
- They allow us to aggregate multiple CSS properties in one "container".

---

**DOM ELEMENTS HAVE PROPERTIES & METHODS ON THEM**
[Properties, Methods on DOM element](https://developer.mozilla.org/en-US/docs/Web/API/Element)
   


