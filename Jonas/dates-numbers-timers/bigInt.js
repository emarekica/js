'use strict';

// calculate largest number that JS can safelly represent

console.log(2 ** 53 - 1); // 45035996273704991

console.log(Number.MAX_SAFE_INTEGER);

// unsafe / incorrectly represented
console.log(2 ** 53 + 1); // 9007199254740992
console.log(2 ** 53 + 2); // 9007199254740994

// --- BigInt

console.log(230693456343049568904345667976896788567);
// 2.3069345634304955e+38

console.log(230693456343049568904345667976896788567n);
// 230693456343049568904345667976896788567n == BigInt

console.log(BigInt(23069345634));
// 23069345634n = BigInt

// --- OPERATIONS

console.log(10000n + 10000n); // 20000n

console.log(2344567050695609704596049567n * 100000000000n);
// 234456705069560970459604956700000000000n

// can't mix bigInt with regular number

const hugeNum = 345665938592039345786938475063n;
const regularNum = 49;

// console.log(hugeNum + regularNum); // Error: Cannot mix BigInt and other types

// convert so it works
console.log(hugeNum * BigInt(regularNum)); // 16937630991009927943559985278087n

//console.log(Math.sqrt(16n)); // error

// exceptions:
// 1. comparison operator
console.log(20n > 15); // true

console.log(20n === 20); // false; === does no type coercion
console.log(20n == 20); // true
console.log(20n == '20'); // true

console.log(typeof 20n); // bigint
console.log(typeof 20); // number

// 2. string concatenation
console.log(hugeNum + ' is really BIG!');
// 345665938592039345786938475063 is really BIG!

// --- DIVISIONS

console.log(10n / 3n); // 3n, cuts decimal part
console.log(10 / 3); // 3.3333333333333335
