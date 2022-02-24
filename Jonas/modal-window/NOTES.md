# MODAL WINDOW

**building UI component**

**At the beginning of a project:**

1. select the elements you need
2. store the selections into variables
3. use them repeatedly



In this project, we will work with **classes**.
`class="hidden"` is the main one we will work with.

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
   

...

## KEYPRESS EVENTS
**(keyboard events)**

There are 3 ways to close this Modal window:

1. clicking "x" button = click event
2. clicking the background = click event
3. **hitting ESC button** = keypress event


**They are global events**, don't happen on one specific element.
For those events, **we usually listen on the whole document**.
No matter where the event happens on the page, it is always going to trigger the handler we'll specify.
This is for **any key**.

    `document.addEventListener("keydown", function() {
           console.log("A key was pressed (we don't know which).");
      });` 


**3 types of keyboard events**

- key down
- key press
- key upp



### LOOKING AT AN EVENT OBJECT
**We only want to act when ESC key is pressed.**

The information about the key that is pressed will be stored in the event that is going to occur as soon as any key is pressed.
As soon as we press a key, _keydown_ event is generated, the event listener (handler function) is waiting for it to happen.

**Every time an keypress happens, JS creates an object that contains info about the event itself.** We can access that object in the event handler function.


**You can access an event object by giving the handler function a parameter.**
As the event occurs, JS will call the handler function with the event object as argument.

  ```
  document.addEventListener("keydown", function(e){
      console.log(e);
  });
```

**This works because we don't call the function ourselves, we only define it. JS engine calls it upon the event.**


Once the event object is created, you can search under the properties which key was pressed. `key: "7"`
So, if you hit the ESC key, it will show up in the event object.

To see only the pressed, key, write this: `console.log(e.key);`


**keyboard event object generated by JS engine**
You can see it in the Console.

  `KeyboardEvent {isTrusted: true, key: 'b', code: 'KeyB', location: 0, ctrlKey: false, …}`

We can see the key we pressed under the **key property**: `key: "7"`


Next step: write **if statement** to close the Modal window whenever the ESC key is pressed & when the modal is visible. 


### Checking if an element has a certain class

Then we will add that as the condition:

_If the pressed key is _escape_  and the modal **does not contain** the class "hidden", close the modal._


  ```js
  if(e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
  }
  ```
