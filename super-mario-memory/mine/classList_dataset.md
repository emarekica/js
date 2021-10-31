# Element.classList

- read-only property
- you can modify it by using the `add()` and `remove()` methods

- returns the class name(s) of an element, as a DOMTokenList object
- useful to add, remove and toggle CSS classes on an element

examples: 

    ```
    // use the classList API to remove and add classes
    div.classList.remove("foo");
    div.classList.add("anotherclass");
    ```


# HTML data-* attributes

- used to store custom data private to the page or application
- for custom data attributes on all HTML elements

**HTML**
  ```
  <article
    id="electric-cars"
    data-columns="3"
    data-index-number="12314"
    data-parent="cars">
  ...
  </article>
  ```

**JS**
- reading the values fron these attributes
  a - `getAttribute()` with their full HTML name to read them

  b - read out via a dataset property

  ```js
  const article = document.querySelector('#electric-cars');

  article.dataset.columns // "3"
  article.dataset.indexNumber // "12314"
  article.dataset.parent // "cars"
  ```

# PARENT NODE

- parentNode property returns the parent node of the specified node, as a Node object
- read-only

`parentNode = node.parentNode`

---

`.class1.class2`  --->	Selects all elements with both class1 and class2 set within its class attribute

`.class1 .class2`	 ---> Selects all elements with class2 that is a descendant of an element with class1 

In out example, these will work: 

  `.match .front` ---> matched element and its front
  `.match.front` ---> every element with both .match and .front classes

This won't:

  `.match, .front` ---> every matched element and every element with class front

[CSS Selectors](https://www.w3schools.com/cssref/css_selectors.asp)