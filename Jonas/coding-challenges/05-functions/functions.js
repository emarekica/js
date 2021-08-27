"use strict";

// data 1

let scoreDolphins1 = 44;
let scoreDolphins2 = 23;
let scoreDolphins3 = 71;

let scoreKoalas1 = 85;
let scoreKoalas2 = 54;
let scoreKoalas3 = 41;

const calcAverage = (a, b, c) => (a + b + c) / 3;

    const avgDolphins = calcAverage (44, 23, 71);
    const avgKoalas = calcAverage (85, 54, 41);

    console.log(avgDolphins, avgKoalas);  // 46, 60


// data 2

/* let scoreDolphins4 = 85;
let scoreDolphins5 = 54;
let scoreDolphins6 = 41;

let scoreKoalas4 = 23;
let scoreKoalas5 = 34;
let scoreKoalas6 = 27;

const avgDolphins = calcAverage (85, 54, 41);
const avgKoalas = calcAverage (23, 34, 27);

console.log(avgDolphins, avgKoalas);  // 60, 28 */


function checkWinner (avgDolphins, avgKoalas) {

  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}).`);

  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}).`);

  } else {
    console.log("No team wins.");
  }
}

checkWinner (avgDolphins, avgKoalas); // No team wins
checkWinner (60, 28);  // Dolphins win (60 vs. 28).



