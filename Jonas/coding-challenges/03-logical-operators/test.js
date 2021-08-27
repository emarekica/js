let Dolphins1 = [96, 108, 89];    // avg = 97.6666
let Koalas1 = [88, 91, 100];      // avg = 93

let Dolphins2 = [97, 112, 101];    // avg = 103.3333
let Koalas2 = [109, 95, 123];      // avg = 109

let Dolphins3 = [97, 112, 101];    // avg = 103.3333
let Koalas3 = [109, 95, 106];      // avg = 103.3333


// concatenating strings

/* const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2) */

let DolphinsX = Dolphins1.concat(Dolphins2);
let Dolphins = Dolphins3.concat(DolphinsX);
console.log(Dolphins);

let KoalasX = Koalas1.concat(Koalas2);
let Koalas = Koalas3.concat(KoalasX);
console.log(Koalas);