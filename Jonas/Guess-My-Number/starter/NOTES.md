# DOM and Event fundamentals


## selecting an HTML element through JS 

  - HTML important for class names of elements
  - we select them through JS

    
    document.querySelector()


### querySelector() is a method available on the document object

- you need to pass a SELECTOR into the method > the same one you would use in CSS
- you pass in an element with a class name you want (ex. message)
- you need to add the "..." 


   document.querySelector(".message").textContent;    
  
- result is a selection of the element
- .textContent reads the text content property
- when we have multiple dot operators(.message .textContent), they are executed L > R



## What is the DOM?
## What is DOM manipulation?

  