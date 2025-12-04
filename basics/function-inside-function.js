"use strict";


// fruit processor that can make juice only with smaller fruit pieces
    // function inside of a function = another food processor that cuts fruit into multiple smaller pieces

    function cutFruitPieces (fruit) {
      return fruit * 4;
    }

    function fruitProcessor (apples, oranges) {

      const applePieces = cutFruitPieces(apples);    // calling the function and capturing the result in a variable
      const orangePieces = cutFruitPieces(oranges);

      const juice =  `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
      return juice;
    }

    console.log(fruitProcessor(2, 3));