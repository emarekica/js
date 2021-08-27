/* const scoreDolphins = (96 + 108 + 89) / 3;  // 97.6666
const scoreKoalas = (88 + 91 + 110) / 3;    // 96.3333
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy!");
} else if(scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy!");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy!");
} */

// BONUS 1
// averages

    const scoreDolphins = (97 + 112 + 81) / 3;  // 97.6666
    const scoreKoalas = (109 + 95 + 86) / 3;    // 96.3333
    console.log(scoreDolphins, scoreKoalas);

    if(scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
      console.log("Dolphins win the trophy!");
    } else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
      console.log("Koalas win the trophy!");
    } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
      console.log("Both win the trophy!");
    } else {
      console.log("No one wins the trophy.");
    }




// BONUS 2