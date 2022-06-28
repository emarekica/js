// "use strict";

// 1.
console.log("1. answer: " + (true + false)); // 1

// 2.
console.log("2. answer: " + [, , ,].length); // 3

// 3.
console.log("3. answer: " + [1, 2, 3] + [4, 5, 6]); // 1,2,34,5,6

// 4.
console.log("4. answer: " + (0.2 + 0.1 === 0.3)); // false

// 5.
console.log("5. answer: " + (10, 2)); // 2

// 6.
console.log("6. answer: " + !!""); // false

// 7.
console.log("7. answer: " + +!![]); // 1

// 8.
console.log("8. answer: " + !!!true); // false

// 9.
console.log("9. answer: " + (true == "true")); // false

// 10.
console.log("10. answer: " + (010 - 03)); // 5

// 11.
console.log("11. answer: " + ("" - -"")); // 0

// 12.
console.log("12. answer: " + (null + 0)); // 0

// 13.
console.log("13. answer: " + 0 / 0); // NaN

// 14.
console.log("14. answer: " + (1 / 0 > 10 ** 1000)); // false

// 15.
// console.log("15. answer: " + true++); // syntax error

// 16.
console.log("16. answer: " + ("" - 1)); // -1

// 17.
console.log("17. answer: " + (null - 0) + "0"); // "00"

// 18.
console.log("18. answer: " + (true + ("true" - 0))); // NaN

// 19.
console.log("19. answer: " + (!5 + !5)); // 0

// 20.
console.log("20. answer: " + ([] + [])); // "" (empty)

// 21.
console.log("21. answer: " + (1 + 2 + "3")); // "33"

// 22.
console.log("22. answer: " + typeof NaN); // "number"

// 23.
console.log("23. answer: " + (undefined + false)); // NaN

// 24.
console.log("24. answer: " + ("" && -0)); // ""

// 25.
console.log("25. answer: " + (+!!NaN * "" - -[,])); // 0
