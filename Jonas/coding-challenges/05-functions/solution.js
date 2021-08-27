const calcAverage = (a, b, c) => (a + b + c) / 3;


// Test 1

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoala = calcAverage(65, 54, 49);

console.log(scoreDolphins, scoreKoala);


const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! ${avgDolphins} vs. ${avgKoalas}`);

  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! ${avgKoalas} vs. ${avgDolphins}`);

  } else {
    console.log("No team wins.");
  }
}

// call the function with the arguments - scores that you calculated before

checkWinner(scoreDolphins, scoreKoala);



// Test 2

// remove LET because you are REASIGNING VALUES to a variable, not creating a new one
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);