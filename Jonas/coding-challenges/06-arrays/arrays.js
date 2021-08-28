"use strict";

/*
 
20% x value = 0.2 x value

let bill = 275;

let tip = bill >= 50 && bill <=300 ? 0.15 * bill : 0.2 * bill;

let final = bill + tip;

*/


const bills = [125, 555, 44];

// function calculating the tip by percentage

    function tip (bill) {

      if (bill >=50 && bill <= 300) {
        return 0.15 * bill
      } else {
        return 0.2 * bill;
      }
    }  
 

function calcTip(bill) { 
  const tipCalc = tip(bill);
  return tipCalc;
}

// console.log(calcTip(100));


const tips = [
  calcTip(bills[0]), 
  calcTip(bills[2]), 
  calcTip(bills[2])
];
console.log(tips);  // [ 18.75, 111, 8.8 ]

const total = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];
console.log(total);  // [ 143.75, 666, 52.8 ]
