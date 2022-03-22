# WORKING WITH ARRAYS

<br>

1. [Simple array methods](#1-simple-array-methods)

<br>

---

## 1. Simple array methods

<br>

What we know from before:

- `push()`

- `unshift()`

- `pop()`

- `shift()`

- `indexOf`

- `includes`

<br><br>

New ones:

- `slice()`

- `splice()`

- `reverse()`

- `concat()`

- `join()`

### Why arrays have methods

<br>

Methods are functions we can call on objects. They are attached to objects.

If there are array methods, it means **arrays are also objects. They get access to built-in methods.**

<br><br>

`slice()`

<br>

Copies a portion of an array to a new array.

You can extract part of the original array, without changing it.

Accessor method.
<br><br>

**parameters**

1: start with the index number of the first element we want

2: end with the index number following the last element we want (this parameter is not included in the output)
<br>

```js
let array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.slice(2)); // (3) ['c', 'd', 'e']
console.log(array.slice(2, 4)); // (2) ['c', 'd']
```

<br><br>

Length of a new array will be `parameter2 - parameter1` .
<br><br>

**Negative parameter copies from the end.**

This took last two parameters.
<br>

```js
console.log(array.slice(-2)); // (2) ['d', 'e']
```

<br>

Last element of any array: `array.slice(-1);`
<br><br>

Negative last parameter extracts everything **except that**.
<br>

    console.log(array.slice(1, -2)); // (2) ['b', 'c']

<br><br>

**Create shallow copy**

A matter of preference if you use `slice()` or spread operator.

`Slice()` is necessary if you want to **chain methods**.
<br>

```js
console.log(array.slice()); // (5) ['a', 'b', 'c', 'd', 'e']

console.log([...array]); // (5) ['a', 'b', 'c', 'd', 'e']
```

<br><br>

`splice()`
<br>

**Mutator method** = mutates original array.

Can add or remove an item from any position in an array or add and remove simultaneously.

**For deleting one or more elements from the array.**
<br><br>

**parameters**

1: the index number to start at

2: the number of items to remove

3: items to add (optional).
<br>

```js
let array = ['a', 'b', 'c', 'd', 'e'];

console.log(array.splice(2)); // (3) ['c', 'd', 'e'] = what we extracted (gone)

console.log(array); // (2) ['a', 'b'] = what is left from the original array
```

<br><br>

**common use case**

Remove last element.
<br>

```js
console.log(array.splice(-1)); // ['e'] = removed element
console.log(array); // (4) ['a', 'b', 'c', 'd'] = what is left from the original array

// starting from position 1, take out 2 elements

console.log(array.splice(1, 2)); // (2) ['b', 'c'] = deleted
```

<br><br>

`reverse()`
<br>

**Mutator method.**

Reverses the order of the elements in an array: last element will be first, and the first element will be last.
<br><br>

```js
const arr = ['j', 'i', 'h', 'g', 'f'];
console.log(arr.reverse());
// (5) ['f', 'g', 'h', 'i', 'j']
```

<br><br>

`concat()`
<br>

Accessor method.

Merges two or more arrays to a new array. Can take multiple arguments, effectively allowing you to concatenate many arrays.
<br><br>

**parameters**
<br>

1: array on which the method is called

2: array we pass into the method
<br><br>

```js
const array = let array = ['a', 'b', 'c', 'd', 'e'];
const arr = ['f', 'g', 'h', 'i', 'j'];

const letters = array.concat(arr);

console.log(letters); // (7) ['a', 'd', 'f', 'g', 'h', 'i', 'j']
```

<br><br>
Another way of doing this.
Gives the same result, no mutation of arrays.
<br>

    console.log([...array, ...arr]); // (7) ['a', 'd', 'f', 'g', 'h', 'i', 'j']

<br><br>

`join()`
<br>

Accessor method.

Converts all the elements of an array into a new string.
<br>

If no argument is given, the output of `join()` will be a comma-separated string with no extra whitespace.

In order to include whitespace or another separator, you can add a string of your separator as a parameter to the `join()` method. This parameter will contain the separator you would like between each array element.
<br><br>

```js
join(', ');
join(' - ');

console.log(letters.join('-')); // a-d-f-g-h-i-j
```

<br><br>

---

**Resources**

<br>

- [Accessor methods](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-accessor-methods)

- [Mutator methods](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-mutator-methods)

- [Iteration methods](https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods)
