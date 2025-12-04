"strict";


// LOOPING OVER AN ARRAY - backwards

  const mari = [
    "Mari",
    "Stoneman",
    2021 - 1987,
    "artist",
    ["Hana", "Lucy", "Doris", "Theo"]
  ];

  // 4, 3, 2, 1, 0 index


    for(let i = mari.length - 1; i >= 0; i--) {
      console.log(i, mari[i]);
    }

    // (i, mari[i])
    // 4 ["Hana", "Lucy", "Doris", "Theo"]
    // 3 "artist"
    // 2 34
    // 1 "Stoneman"
    // 0 "Mari"



// LOOP INSIDE OF A LOOP

    // we have 3 differente exercises and want to repeat each of them 5x


    for(let exercise = 1; exercise < 4; exercise++) {
      console.log(`-------- Starting exercise ${exercise}!`);

      for(let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}.`);
      }
    }