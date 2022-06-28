# JavaScript Quirks

<br>

Taken from a ["JS is weird"](https://jsisweird.com/) quiz, 25 quirky expressions are shown and you have to guess the output. Most of this syntax is probably not used in a developer's daily life.

<br><br>

1. `true + false`

2. `[, , ,].length`

3. `[1, 2, 3] + [4, 5, 6]`

4. `0.2 + 0.1 === 0.3`

5. `10, 2`

6. `!!""`

7. `+!![]`

8. `!!!true`

9. `true == "true"`

10. `010 - 03`

11. `"" - -""`

12. `null + 0`

13. `0 / 0`

14. `1 / 0 > 10 ** 1000`

15. `true++`

16. `"" - 1`

17. `null - 0) + "0"`

18. `true + ("true" - 0)`

19. `!5 + !5`

20. `[] + []`

21. `1 + 2 + "3"`

22. `typeof NaN`

23. `undefined + false`

24. `"" && -0`

25. `+!!NaN * "" - -[,]`

<br><br>

<hr />
<br>

## 1. `true` + `false`

<br>

**answer:**

    1 + 0; // -> 1

<br><br>

According to the ECMAScript Language Specification, the two boolean values are type coerced into their numeric counterparts.
<br>

    Number(true); // -> 1
    Number(false); // -> 0

    1 + 0; // -> 1

<br><br>

<hr />
<br>

## 2. `[,,,].length`

<br>

**answer:** `3`

<br><br>

`[,,,]` outputs an array with three empty slots. The last comma is a **trailing comma**.
A trailing comma symbol that is typed after the last item of a list of elements.
<br>

If you don't think this is weird enough yet, then take a look at this:
<br>

    [,] + [,]; // -> ""
    [] + [] === [,] + [,]; // -> true
    [,,,] + [,,,]; // -> ",,,,"
    ([,,,] + [,,,]).length === [,,,,].length; // -> true

<br><br>

To find resources that explain the addition operator with arrays, take a look at the explanation for question 3, directly below this.

<br><br>

<hr />
<br>

## 3. `[1, 2, 3] + [4, 5, 6]`

<br>

**answer:** `1,2,34,5,6`

<br><br>

The extremely simplified answer is that the arrays are converted to strings and are then concatenated. See [Denys Dovhan's explanation](https://github.com/denysdovhan/wtfjs#adding-arrays) for how this happens. To learn more about this behavior, visit this [StackOverflow answer](https://stackoverflow.com/questions/9032856/what-is-the-explanation-for-these-bizarre-javascript-behaviours-mentioned-in-the) for a mid-level explanation or this blog post for a more detailed one.
<br>

Adding a trailing comma doesn't change anything, by the way:
<br>

    [1, 2, 3,] + [4, 5, 6]; // -> "1,2,34,5,6"

<br><br>

But, I suppose, if you really want to convert your arrays to comma-separated strings and combine them, you could write something stupid like this:
<br><br>

    [1, 2, 3] + [, 4, 5, 6]; // -> "1,2,3,4,5,6"

<br><br>

Or, even dumber, this:
<br>

    [1, 2, 3, ""] + [4, 5, 6]; // -> "1,2,3,4,5,6"

<br><br>

Probably best not to use the addition operator together with arrays, though. If you do want to combine two arrays for real, this is a better approach:
<br>

    [...[1, 2, 3], ...[4, 5, 6]];

<br><br>

<hr />
<br>

## 4. `0.2 + 0.1 === 0.3`

<br>

**answer**: `false`

<br><br>

This is a standard dilemma of comparing floating-point values. Instead of comparing two floating points directly, one should compare the floating points with some level of tolerance.

This [StackOverflow answer](https://stackoverflow.com/questions/588004/is-floating-point-math-broken) explains the problem in greater detail.
<br>

    0.2 + 0.1; // -> 0.30000000000000004;
    0.2 + 0.1 > 0.3; // -> true

<br><br>

<hr />
<br>

## 5. `10,2`

<br>

**answer**: `2`

<br><br>

The [comma operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator) simply returns the value of the last operand.
<br>

    10, 2; // -> 2
    1, 2, 3, 4; // -> 4
    42, "pineapple", true; // -> true

<br><br>

<hr />
<br>

## 6. `!""`

<br>

**answer**: `false`

<br><br>

You can add two exclamation marks before any value to get its corresponding boolean primitive. The technical term for this is [double NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT#double_not_!!) (yes, really, Borat would love it). The conversion is based on the [truthyness](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) or [falsyness](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) of the value.
<br><br>

    !!""; // -> false
    !!0; // -> false
    !!"Pineapple"; // -> true
    !!42; // -> true

<br><br>
This same conversion can be done by using the Boolean function.
<br>

    Boolean(""); // -> false

<br><br>

<hr />
<br>

## 7. `+!![]`

<br>

**answer**: `1`

<br><br>

Arrays are truthy, hence the double NOT operator will output true. The plus character then converts true to its numeric representation: 1.
<br>

    !![]; // -> true
    +true; // -> 1

<br><br>

This expression might become clearer if written explicitly.

    Number(Boolean([])); // -> 1

<br><br>

<hr />
<br>

## 8. `!!!true`

<br>

**answer**: `false`

<br><br>

It's incredibly unusual to put three or more exclamation marks in a row, so you may not realize that it is something you can even do.

But why stop at only three when you could write amazingly unreadable code?
<br>

    !!!!!!!!!!!!true; // -> true

<br><br>

<hr />
<br>

## 9. `true == "true"`

<br>

**answer**: `false`

<br><br>

According to the rules of [abstract equality comparison](https://262.ecma-international.org/11.0/#sec-abstract-equality-comparison), both of these values are converted to numbers when compared.
<br>

    Number(true); // -> 1
    Number("true"); // -> NaN
    1 == NaN; // -> false

<br><br>

<hr />
<br>

## 10. `010 - 03`

<br>

**answer**: `5`

<br><br>

010 is treated as an octal number by JavaScript. Thus, its value is in base 8. The MDN Web Docs provides a brief explanation of [octal numbers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#octal_numbers).
<br>

    010; // -> 8
    03; // -> 3
    8 - 3; // -> 5

<br><br>

You can go all out with octal numbers, if you'd like:
<br>

01111111111111111; // -> 40210710958665
<br><br>

By the way, the number of leading zeroes doesn't matter:
<br>

    010 === 0000000010; // -> true

<br><br>

<hr />
<br>

## 11. `"" - - ""`

<br>

**answer**: `0`

<br><br>

These two empty strings are both converted to 0.
<br>

    Number(""); // -> 0
    0 - - 0; // -> 0

<br><br>

The expression might become a bit clearer if I write it like this:
<br>

    +"" - -"";
    +0 - -0;

<br>

Please note that, while I put the space between the minus sign and the empty string simply to attempt to confuse you, the space between the minus signs themselves is important:
<br> - -""; // -> 0
--""; // -> SyntaxError

<br><br>

<hr />
<br>

## 12. `null + 0`

<br>

**answer**: `0`

<br><br>

Null converts to its numeric representation: `0`.
<br>

    Number(null); // -> 0
    0 + 0; // -> 0

<br><br>

This also means that while...
<br>

    null === false; // -> false

<br><br>

... this is true:
<br>

    +null === +false; // -> true

<br><br>

<hr />
<br>

## 13. `0/0`

<br>

**answer**: `NaN`

<br><br>

As there is no meaningful numerical answer to the equation `0/0`, the output is simply `NaN`.
<br>

    isNaN(0/0); // -> true

<br><br>

<hr />
<br>

## 14. `1/0 > 10 ** 1000`

<br>

**answer**: `false`

<br><br>

JavaScript treats both of these values as infinite, and infinity is equal to infinity. Learn more about [infinities](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Infinities).
<br>

    1/0; // -> Infinity
    10 ** 1000; // -> Infinity
    Infinity > Infinity; // -> false

<br><br>

The exponentiation operator \*\* is [basically](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) the same thing as the Math.pow function.
<br>

    10 ** 1000; // -> Infinity
    Math.pow(10, 1000); // -> Infinity

<br><br>

<hr />
<br>

## 15. `true++`

<br>

**answer**: `SynatxError`

<br><br>

Our first and only syntax error. I put SyntaxError as an option on a lot of the questions, hoping that some users would find some syntax so bizarre that it could not possibly be allowed. So, I felt that I had to add at least one expression that actually does result in a SyntaxError.
<br>

Some global variables and functions won't throw syntax errors, by the way:
<br>

    true++; // -> SyntaxError
    1++; // -> SyntaxError
    "x"++; // -> SyntaxError
    null++; // -> SyntaxError
    undefined++; // -> NaN
    $++; // -> NaN
    console.log++; // -> NaN
    NaN++; // -> NaN

<br><br>

And, of course, just to be completely clear, this is valid syntax:
<br>

    let _true = true;
    _true++;
    _true; // -> 2

<br><br>

<hr />
<br>

## 16. `"" - 1`

<br>

**answer**: `-1`

<br><br>

<br><br>

<hr />
<br>
## 14. ```

<br>

**answer**: `NaN`

<br><br>

While the addition operator (`+`) is used both for numbers and strings, the subtraction operator (`-`) has no use for strings, so JavaScript interprets this as an operation between numbers. An empty string is type coerced into `0`.
<br>

    Number(""); // -> 0
    0 - 1; // -> -1;

<br><br>

This would still be true even if the string had a space (or more) inside of it:
<br>

    " " - 1; // -> -1;

<br><br>

However, if we use the addition operator, then string concatenation takes priority:
<br>

    "" + 1; // -> "1";

<br><br>

<hr />
<br>

## 17. `(null - 0) + "0"`

<br>

**answer**: `00`

<br><br>

`null` is coerced into `0`.
<br>

    Number(null); // -> 0
    0 - 0; // -> 0
    0 + "0"; // -> "00"

<br><br>

If the question had used only the subtraction operator, the result would have been different:
<br>

    (null - 0) - "0"; // -> 0

<br><br>

<hr />
<br>

## 18. `true + ("true" - 0)`

<br>

**answer**: `NaN`

<br><br>

You might suspect that JS is so bananas that it would convert the string literal "true" into the numeric representation of the boolean true. It's not quite that bananas, however. What actually happens is that it tries to convert the string to a number and fails.
<br>

    Number("true"); // -> NaN

<br><br>

<hr />
<br>

## 19. `!5 + !5`

<br>

**answer**: `0`

<br><br>

Putting a solemn exclamation mark, also known as the logical NOT operator, before a non-Boolean value will convert it to a boolean value opposite of what the Boolean function would convert it into.
<br>

5 is truthy:
<br>

    Boolean(5); // -> true
    !!5; // -> true

<br><br>

The opposite of true is, of course, false, which in turn is coerced into 0:
<br>

    !5; // -> false
    +false; // -> 0
    0 + 0; // -> 0

<br><br>

<hr />
<br>

## 20. `[] + []`

<br>

**answer**: `""`

<br><br>

This question is closely tied to question 3. Again, the extremely simplified answer is that JavaScript converts the arrays to strings. Scroll up to question 3 to find resources that explain this behavior.
<br>

    [].toString(); // -> ""
    "" + ""; // -> ""

<br><br>

Also, like I mentioned in the explanation for question 2, these expressions are equal, due to trailing commas:
<br>

    [] + [] === [,] + [,]; // -> true

<br><br>

Even though these arrays are different, they are both converted to empty strings:
<br>

    [].length; // -> 0
    [,].length; // -> 1
    [].toString() === [,].toString(); // -> true

<br><br>

Of course, this is also true:
<br>

    Number([]) === Number([,]); // -> true

<br><br>

<hr />
<br>

## 21. `1 + 2 + "3"`

<br>

**answer**: `"33"`

<br><br>

JavaScript will execute these operations from left to right. String concatenation will take priority when the number three is added with the string three.
<br>

    1 + 2; // -> 3
    3 + "3"; // -> "33"

<br><br>

Since the operations are executed from left to right, the expressions will give a signficantly different output if the first operation were to contain a string:
<br>

    "1" + 2 + 3; // -> "123"
    1 + "2" + 3; // -> "123"

<br><br>

<hr />
<br>

## 22. `typeof NaN`

<br>

**answer**: `number`

<br><br>

The [ECMAScript Language Specification](https://262.ecma-international.org/5.1/#sec-4.3.23) explains NaN as a number value that is a IEEE 754 “Not-a-Number” value. It might seem strange, but this is a common computer science principle.
<br>

There are some odd issues surrounding NaN in JavaScript, however. For instance, this is one of the very few instances where the Object.is function disagrees with triple equal.
<br>

    NaN === NaN; // -> false
    Object.is(NaN, NaN); // -> true

<br><br>

Another such rare instance can be seen in question 24.

This legacy issue was later remedied with the isNaN function.
<br>

    isNaN(NaN); // -> true

<br><br>

<hr />
<br>

## 23. `undefined + false`

<br>

**answer**: `NaN`

<br><br>

While `false` can be converted to a number, `undefined` cannot.
<br>

    Number(undefined); // -> NaN
    Number(false); // -> 0
    NaN + 0; // -> NaN

<br>

However, `undefined` is represented by `false`:
<br>

    !!undefined === false; // -> true

<br><br>

Which means that we can add `undefined` and `false` like so:
<br>

    !!undefined + false; // -> 0

<br><br>

<hr />
<br>

## 24. `"" && -0`

<br>

**answer**: `""`

<br><br>

The [logical AND operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND) is usually used with Boolean values in if-statements, but it actually returns the value of one of the operands. If the first expression can be converted to true, then it returns the second. Otherwise, it returns the first. An empty string is falsy, hence it returns the first operand.
<br>

    "" && -0; // -> ""
    -0 && ""; // -> -0
    5 && 3; // -> 3
    0 && 3; // -> 0

<br><br>

<hr />
<br>

## 25. `+!!NaN * "" - - [,]`

<br>

**answer**: `0`

<br><br>

The finale combines some of the bizarre syntax that I've covered in this quiz. I've explained all of this behavior already in the explanations above, except for the multiplication operator `*`, which will coerce the empty string into its numeric equivalent: `0`.
<br>

    +!!NaN; // -> 0
    +""; // -> 0
    -[,]; // -> -0

<br><br>

Add it all together:
<br>

    0 * 0 - -0; // -> 0

<br><br>

<hr />
<br>
