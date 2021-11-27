# How JavaScript Works Behind the Scenes

* An High-Level Overview of JavaScript
* The JavaScript Engine and Runtime
* Execution Contexts and The Call Stack
* Scope and the Scope Chain
* Scoping in practice

___ 

## An High-Level Overview of JavaScript


**GARBAGE COLLECTION** 

- algorithm inside JS engine
- automatically removes old unused objects from computer memory
- powerful tools for memory management


**HIGH LEVEL**

-- in low-level languages (C) you have to manage resources (ask the computer for memory to create a new variable)
-- in high-level languages (JS, Python) have **abstractions** that handle the memory, everything happens automatically

-- easier to learn
-- program is never as optimised as program written in low-level language


**INTERPRETED OR JUST-IN-TIME COMPILED LANGUAGE**

-- computer processor only understands 0 and 1 (machine code, not practical)
-- no one writes it manually
-- we write human-readable JS code

-- it is abstraction over machine code
-- it has to be **translated back to machine code: COMPILING or INTERPRETING**
-- necessary step in every programming language
-- happens inside JS engine


**MULTI PARADIGM LANGUAGE**

_PARADIGM_ = approach & mindset of structuring code, directs coding style & technique 

**3 popular paradigms:**

  1. PROCEDURAL PROGRAMMING
      -- organising code in linear way
      -- having functions in between

  2. OBJECT-ORIENTED PROGRAMMING (OOP)
  3 .FUNCTIONAL PROGRAMMING (FP)

Paradigms can be:

  **imperative**
  **declarative**


**PROTOTYPE-BASED OBJECT-ORIENTED**

-- almost everything in JS is an object (except primitive values)


**prototypal inheritance**

-- **we create from a blueprint, which is called PROTOTYPE**
-- prototype contains all the object methods
-- objects created from the prototype inherit all the methods from it


Prototype examples:

  `array.prototype.push()`
  `array.prototype.indexOf()`

  Array made from it:

  `const arr = [1, 2, 3];`
  `arr.push(4);`
  `const hadZero = arr.indexOf(0) > -1;`


**FIRST-CLASS FUNCTIONS**

-- those functions are treated as variables
-- we can pass functions in & return functions from other functions
-- extremely powerful
-- allows functional programming

example of passing the function into another function:

  `btnNew.addEventListener("click", init);`


**DYNAMIC LANGUAGE**

-- meaning: **dynamically typed (type of variables can easily be changes ad we reassign them)**

-- we don't assign data types to variables
-- data types become known when JS engine executes code
-- no data types --> data type become known at runtime

(Typescript - for JS written with types, _strongly typed_)

  _A strongly-typed programming language is one in which each type of data (such as integer, character, hexadecimal, packed decimal, and so forth) is predefined as part of the programming language and all constants or variables defined for a given program must be described with one of the data types._


**SINGLE-THREADED**
**NON-BLOCKING EVENT LOOP concurrency model**

-- complex topic


**Concurrency model:**

-- how JS engine handles multiple tasks happening at the same time
-- we need it because JS runs in one single thread = it can only do one thing at a time
-- therefore we need a way of handling multiple things happening at the same time

**Thread:**

-- set of instructions executed in computers CPU (_central processing unit_, processor)
-- **thread is where our code is executed in the machine's processor**

-- long running tasks (i.e: fetching data from a remote server) don't block the single thread because of the **event loop**

Event loop:
-- takes long-running tasks
-- executes t hem in the "background"
-- puts them back in the main thread once they are finished


(All of this is a huge over-simplification.)

___

## The JavaScript Engine and Runtime

**JS ENGINE**

-- computer program that executes JS code
-- every browser has its own JS engine
-- most known is Google's V8 (written in C++) > it powers Chrome & Node.js (for building server side apps with JS outside of any browser)


**JS engine COMPONENTS**

**CALL STACK:** where the code is executed using execution contexts
**HEAP (hrpa):** unstructured memory pool which stores all the objects the app needs


**HOW JS engine WORKS**

How is the code compiled to machine code so it can be executed?


### Compilation

  -- **entire code is converted into machine code at once**, then written to a portable (binary) file that can be executed on any computer

      _source code > **step 1: compilation > portable file** (machine code) > **step 2: execution** > program running  in the CPU_

  -- execution can happen way after the compilation
  -- any app on our computers have been compiled before


### Interpretation

  -- **there is an interpreter that runs through the code and executes it line by line**
  -- the code is **read and executed at the same time**
  -- source code is still converted to machine code, but right before it is executed, not ahead of time

      _source code > **step 1: execution line by line** > program running_

  **JS used to be only interpreted language.**
  Problem: it is slower than compiled languages.



## HOW MODERN JS ENGINE WORKS

Modern JS engine uses mix between compilation & interpretation: 

**JIT compilation (just-in-time compilation)**
Entire code is compiled into machine code at once and executed right away.

      _source code > step 1: compilation > machine code (without portable file) > step 2: execution > Program running_


As the JS code enters the JS engine...

### 1. Parsing = reading the code

  -- code is parsed into **AST** (abstract syntax tree, data structure; **has nothing to do with DOM tree**)
  -- splits each line of code into pieces meaningful to the language (const, function ... )
  -- saves those pieces into the tree in a structured way
  -- checks for syntax errors
  -- resulting AST is later used to generate machine code

### 2. Compilation

  -- takes generated AST and compiles it into machine code

### 3. Execution

  -- machine code gets executed right away
  -- it happens in JS engine Call Stack

**Parsing, compilation and optimisation happen in special threads in CPU that are not accessible from the code.**
They are separated from the main thread that is executing the code.


**JS engines have optimisation strategies**

-- at the beginning, they create unoptimised machine code
-- it starts as fast as possible

-- in the background, the code is being optimised and re-compiled during the already running program execution
-- can be done multiple times
-- old code is swapped with the new optimised code without stopping executions

**This process makes modern JS engines fast.**



## JS RUNTIME

****RUNTIME IN THE BROWSER (mostly used)****

**Runtime is a container including all the things we need to use JS** 
(1, 2, 3, 4)

- Heart of every JS Runtime is **JS engine (1)**.

- In order for it to work properly, we need access to **Web API's (2)** (_DOM, console.log(), timers, fetch API..._).

  Those are functionalities provided to the browser, but are not part of JS language.
  They are accessible in the global `window` object, through JS gets access to them.

- **Callback queue (3)** is data structure containing all callback functions ready to be executed.


* **callback function** = _function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action (example: event handler functions)_

Example of CALLBACK QUEUE: callback function from DOM event listener

- **EVENT LOOP (4)**

  1. event happens
  2. callback function is put onto the callback queue by the event loop
  3. when the call stack is empty, the callback function is passed to the stack by the event loop
  4. execution of the callback function

-- essential for JS non-blocking concurrency model


**JS RUNTIME IN Node.js**

  - JS ENGINE
  - C++ & THREAD POOL
  - CALLBACK QUEUE
  - EVENT LOOP


  ___

## Execution Contexts and The Call Stack

How it JS code executed?
Where? 

**In the call stack, in the JS Engine.**

compilation > creation of GLOBAL EXECUTION CONTEXT for top-level code

1. step: **Creation of global execution context (EC)**

  = environment in which piece of JS is executed
  = like a box that stores all necessary info for code to be executed (local variables, arguments passed into a function... )

  - JS code always runs inside execution context
  - for every JS project there is only one EC (default), where top level code will execute


2. step: **Execution of top-level code**

  = only the code outside functions (because functions should only be executed when called)

  -computer CPU processes received machine code



3. step: **Execution of functions, waiting for callbacks**

  One execution context per function call/method (they're functions attached to objects).

      GLOBAL EXECUTION CONTEXT + EXECUTION CONTEXT PER FUNCTION/method = **JS engine's CALL STACK**


When all functions are executed, JS Engine waits for callback functions to arrive.
Callback loop provides them.



### WHAT IS EXECUTION CONTEXT MADE OF?

**1. variable environment**

  - let, const, var declarations
  - functions
  - arguments object - all the arguments passed into the function that the current execution context belongs to


**2. scope chain**

  - consists of references to variables located outside of the current function


**3. this keyword**

  Content is generated during creation phase, right before the execution.


__Exception: arrow functions () => {}__

    - no argument object
    - no `this` keyword
    - can use them from their closest regular function parent.


**Technically, values only become known during execution phase.**


### When there are a lot of function execution contexts:

  How does the engine keep track of the order in which the functions are called?
  How will it know where it currently is in the execution?



  **CALL STACK**

  = "place" where execution contexts get stacked on top of each other, to keep track of where we are in the execution

  - execution context on the top is the on that is running
  - after it finishes, it is removed
  - the one "underneath" starts running

  **Call stack is like a "map" for the order of the execution of the code.**


Program stays in the state with the global execution context forever, until it is actually finished.
= closing of the browser tab/window

Only then is the global execution context popped off the JS engine call stack.


___ 

## Scope and the Scope Chain

**VARIABLE ENVIRONMENT**
How the variables are created

**EXECUTION CONTEXT is made of: **

  - variable environment
  - scope chain
  - `this` keyword


WHAT IS SCOPE CHAIN?
WHY IS IT SO IMPORTANT?
HOW DOES IT WORK?



### SCOPING

  Where do variables live?
  Where can we access a certain variable and where not?
  Answers the question how our program's variables are organised and accessed.

**Lexical scoping**

Scoping is controlled/ way variables are organised and accessed is entirely controlled by the placement of functions and blocks in the code.

  example: _Function written inside another function has access to the variables of the parend function._


**Scope**

= space/environment in which a variable is **declared**

- in case of functions, the function itself is a variable environment, stored in the function execution context


**Scope of a variable**

= entire region of the code where a certain variable can be accessed

	
**Difference between scope and variable environment**

In case of functions, it is the same because functions are just values stored in variables.


* GLOBAL SCOPE
* FUNCTION SCOPE
* BLOCK SCOPE (ES6)

    #### Global scope

    - for top level code
    - outside of any function or block
    - variables declared in GS are accessible everywhere in the program (in all functions or blocks)

    ```js
    const me = "Mari";
    const job = "programmer";
    const year = "2021";
    ```


    #### Functions scope

    - each function creates a local scope.
    - variables are accessible only inside function, not outside

    ```js
    function calcAge(birthYear) {
      const now = 2037;
      const age = now - birthYear;
      return age;
    }
    
    console.log(now); // Reference error - variable is inside of local scope, can't be reached
    console.log(calcAge);
    ```


    #### Block scope (ES6)

    - variables are accessible only inside block
    - only applies to let, const variables
    - LET, CONST are BLOCK SCOPED

    - **var is FUNCTION SCOPED**

        - they only care about functions
        - they ignore blocks

    - in _strict mode_, functions are block scoped (from ES6)
    - functions declared inside a block are only accessible inside of this block

    ```js
    if(year >= 1981 && year <= 1996) {
      const millenial = true;
      const food = "Avocado toast";
    }
    
    console.log(millenial); // Reference error
    ```


  ### SCOPE CHAIN 

  **Every scope has access to the variables from all the outer scopes.**

  **Variable lookup**

  If one scope can't find the variable in its parent scope, it will look up the scope chain to see if it can find it in other parent scopes.

  In this process, variables are **not copied from one scope to another**, only used.

  **It doesn't work the other way around:**

      child scope can use parent scope,
      parent scope can't use child scope.

  **Sibling scopes** don't have access to one another.
  Scope chain does not work SIDEWAYS nor DOWN, only UP.

  *Works the same for function arguments.

**global variables** = variables in the global scope



**Scope chain vs call stack**

  Scope chain is the order in which functions are written in the code.
  It has nothing to do with order in which functions are called and executed in the call stack.


___

## Scoping in practice
