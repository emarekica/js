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

- dark part that hides the background when the modal window is up: `class="overlay        hidden"`

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