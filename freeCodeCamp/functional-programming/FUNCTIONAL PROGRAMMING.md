# Functional programming

<br>

1. [Introduction to Functional Programming](#1-introduction-to-functional-programming)
2. [Hazards of Imperative Code]()
3. []()
4. []()
5. []()

<br><br>

---

<br>

## 1. Introduction to Functional Programming

<br>

Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: `INPUT -> PROCESS -> OUTPUT`
<br><br>

Functional programming is about:

- **Isolated functions** - there is no dependence on the state of the program, which includes global variables that are subject to change

- **Pure functions** - the same input always gives the same output

- **Functions with limited side effects** - any changes, or mutations, to the state of the program outside the function are carefully controlled
  <br><br>

<br><br>

A **side effect** is when a function relies on, or modifies, something outside its parameters to do something. For example, a function which reads or writes from a variable outside its own arguments, a database, a file, or the console can be described as having side effects.

<br><br>

### TERMINOLOGY

<br>

_Callbacks_ are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.
<br><br>

Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called _first class_ functions. In JavaScript, all functions are first class functions.
<br><br>

The functions that take a function as an argument, or return a function as a return value are called _higher order_ functions.
<br><br>

When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a _lambda_.

<br><br>

---

<br>

## 2. Hazards of Imperative Code

<br>

Functional programming is a good habit. It keeps your code easy to manage, and saves you from sneaky bugs. But before we get there, let's look at an imperative approach to programming to highlight where you may have issues.
<br><br>

In English (and many other languages), the imperative tense is used to give commands. Similarly, an **imperative style in programming is one that gives the computer a set of statements to perform a task**.
<br>

Often the statements change the state of the program, like updating global variables. A classic example is writing a `for` loop that gives exact directions to iterate over the indices of an array.
<br>

In contrast, **functional programming is a form of declarative programming**. You tell the computer what you want done by calling a method or function.
<br>

JavaScript offers many predefined methods that handle common tasks so you don't need to write out how the computer should perform them. For example, instead of using the `for` loop mentioned above, you could call the `map` method which handles the details of iterating over an array. This helps to avoid semantic errors, like the "Off By One Errors" that were covered in the Debugging section.
<br><br>

Consider the scenario: you are browsing the web in your browser, and want to track the tabs you have opened. Let's try to model this using some simple object-oriented code.
<br>

A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open. Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.
<br>

The code editor shows an implementation of this functionality with functions for `tabOpen()`, `tabClose()`, and `join()`. The array `tabs` is part of the Window object that stores the name of the open pages.

<br><br>

```js
// tabs is an array of titles of each site open within the window
const Window = function (tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push("new tab"); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  // a: slice()
  // this does not create side effects and should be preferred over splice()
  const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.slice(index + 1);

  // b: splice()
  // this creates side effects(changes to the original array) and should be avoided in practice.
  // const tabsAfterIndex = this.tabs.splice(1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  return this;
};

// Let's create three browser windows
const workWindow = new Window([
  "GMail",
  "Inbox",
  "Work mail",
  "Docs",
  "freeCodeCamp",
]); // Your mailbox, drive, and other work sites
const socialWindow = new Window([
  "FB",
  "Gitter",
  "Reddit",
  "Twitter",
  "Medium",
]); // Social sites
const videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]); // Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

<br><br>

`splice()` should be always used carefully as it modifies the contents it is working on.

<br><br>

---

<br>

## 3.

<br>

<br><br>

---

<br>

## 4.

<br>

<br><br>

---

<br>

## 5.

<br>

<br><br>

---

<br>

## 6.

<br>

<br><br>

---

<br>

## 7.

<br>

<br><br>

---
