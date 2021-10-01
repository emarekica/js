# DOM and Event fundamentals
---

### selecting an HTML element through JS 
> 
  -- HTML is important for class names of elements
  -- we select them through JS

    
        document.querySelector()
    


**querySelector() is a method available on the document object**
    -- you need to pass a SELECTOR into the method > the same one you would use in CSS
    -- you pass in an element with a class name you want (ex. message)
    -- you need to add the "..." 


    document.querySelector(".message").textContent;    
  
-- result is a selection of the element
-- `.textContent` reads the text content property
-- when we have multiple dot operators(`.message .textContent`), they are executed **L > R**

---

## What is the DOM?

**DOM (document object model)**
  = structured representation of HTML documents

-- allows JS to access HTML elements & styles and manipulate them (change txt, HTML attributes, CSS styles...)
-- connection point between HTML documents and JS code


**The browser automatically creates DOM upon the loading of a webpage.**
-- it is stored in a tree-like structure.
-- each tree HTML element is an object



 ### DOM structure

-- each element is an object
-- for **each HTML element** there is an element **NODE in the DOM tree**
-- we can access each element node using JS

**DOCUMENT is a special object that we have access to in JS.**

  -- the DOM always starts with the document object
  -- it serves as an entry point into the DOM (we need it to start selecting elements)

     document.querySelector()

  -- `<html>` element is child element of document
  -- a root element in HTML documents
  -- adjacent elements in the DOM are called **"siblings"**
    ( `<head>` and `<body>` )
  -- the DOM has nodes also for text, comments and other stuff
  
  **Whatever is in the HTML document, also has to be in the DOM.**



 **DOM !== JavaScript**
  -- properties and methods that can be used to manipulate the DOM are not part of JS.
  -- JS is just a dialect of the Ecmascript specification


**DOM & methods & properties are part of WEB API's**
 -- web API's are like libraries that browsers implement
 -- accessible through JS code

**API = application programming interface**
**= libraries written in JS**
  -- automatically available for us to use
  -- it all happens behind the scenes, we don't have to import nor manipulate anything
  -- there are many more API's

***

## What is DOM manipulation?
**= making JS interact with a webpage**

 -- official DOM specification that browsers implement is why DOM manipulation works the same in all browsers

[DOM specs](https://dom.spec.whatwg.org/)

  