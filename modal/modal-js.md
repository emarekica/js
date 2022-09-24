# MODAL WITH JS + CSS

<br>

## Creating HTML markup dynamically

<br>

1.  Remove:
    <br>

- `modal` and `backdrop` variables

- `display:none` from `closeModal()`

- `display:none` from CSS for `.modal`

- `display: block` from `editValueButton[2].addEventListener()`

<br><br>

2.  Create global variables `backdrop` and `modal`, uninitialized.
    <br>

        let backdrop;
        let modal;

<br><br>

3. Add `backdrop` upon a click of `Edit value` button (`buttons[2]`) that opens the modal.
   <br>

- use `createElement("tagName")` to create new HTML element
  <br><br>

4. Add event listener on `backdrop` in the same place where it is initialized.
   <br>

```js
editValueButton.addEventListener("click", function () {
  // create backdrop in the memory
  backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");

  // add it to the DOM before "demo-container" / render it
  document.body.insertBefore(backdrop, demoContainer);

  // closes backdrop
  backdrop.addEventListener("click", closeModal);

  // qoute we start with
  editedQuote = quote;
});
```

<br><br>

5.  Change button selection >> **now we only have 1 button**.
    <br>

        const editValueButton = document.querySelector("button");

    <br><br>

    - this will run only once at the start of the script

    - `querySelector` gives STATIC NODE LIST

    - won't mess with buttons later added programatically
      <br><br>

6.  Comment out `cancel`, `confirm` and `textEdit` buttons.
    <br>

7.  Remove `display:none` from `.backdrop` in CSS.
    <br>

8.  Create `demoContainer` variable.
    <br>

9.  Add `backdrop` to the DOM in the `editValueButton[2].addEventListener()` before `demoContainer`.
    <br>

         document.body.insertBefore(backdrop, demoContainer);

<br><br>

9. Fill in `closeModal()` function.
   <br>

```js
function closeModal() {
  // check if backdrop exists >> remove it
  if (backdrop) {
    backdrop.remove();
  }
}
```

<br><br>

10. Create modal in the same place where backdrop is created.
    <br>

11. While creating modal, create children elements. Add listeners.
    <br>

        setAttribute(name, value)

<br><br>

HTML structure:
<br>

      <div class="modal">
        <h1>Edit your Statement</h1>
        <div class="modal-input">
          <textarea rows="3"></textarea>
        </div>
        <div class="modal-actions">
          <button type="button" class="btn-cancel">Cancel</button>
          <button type="button" class="btn-confirm">Confirm</button>
      </div>

<br><br>

Creating it with ES5:
<br>

```js
editValueButton.addEventListener("click", function () {
  // create BACKDROP in the memory
  ...

  // create MODAL
  modal = document.createElement("div");
  modal.classList.add("modal");

  // child elements
  const modalHeading = document.createElement("h1");
  modalHeading.textContent = "Edit your Statement";
  modal.appendChild(modalHeading);

  const modalInput = document.createElement("div");
  modalInput.classList.add("modal-input");
  modal.appendChild(modalInput);

  const modalTextArea = document.createElement("textarea");
  modalTextArea.rows = "3";
  // registers and loads user input changes
  modalTextArea.addEventListener("input", function () {
    editedQuote = textEdit.value;
  });
  modalInput.appendChild(modalTextArea);

  const modalActions = document.createElement("div");
  modalActions.classList.add("modal-actions");
  modal.appendChild(modalActions);

  const cancelButton = document.createElement("button");
  cancelButton.setAttribute("type", "button");
  cancelButton.classList.add("btn-cancel");
  cancelButton.textContent = "Cancel";
  cancelButton.addEventListener("click", closeModal);
  modalActions.appendChild(cancelButton);

  const confirmButton = document.createElement("button");
  confirmButton.setAttribute("type", "button");
  confirmButton.classList.add("btn-confirm");
  confirmButton.textContent = "Confirm";
  confirmButton.addEventListener("click", function () {
    closeModal();

    if (editedQuote.trim().length > 0) {
      quote = editedQuote;
      updateParagraph();
    }
  });
  modalActions.appendChild(confirmButton);

});
```

<br><br>

Creating it with ES6 template literal:
<br>

```js

```

<br><br>

12. Add the modal to the page inspide `editValueButton.addEventListener("click", function () {}`. Insert it before demo container runs, after the backdrop .
    <br>

```js
document.body.insertBefore(modal, demoContainer);
```

<br><br>

13.
