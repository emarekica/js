"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 88, 52];

const tips = [];
const totals = [];
const totalValue = tips.concat(totals);




  function tip (bills) {

    if (bills >=50 && bills <= 300) {
      return 0.15 * bills
    } else {
      return 0.2 * bills;
    }
  }  

  function calcTip(bills) { 
    const tipCalc = tip(bills);
    return tipCalc;
  }


// for loop for 10 calculations 

  for(let i = 0; i <= bills.length - 1; i++) {
    const totalBill = calcTip(bills[i]);
    totalValue.push(totalBill);
  };

  console.log(totalValue);



// BONUS

  // sum of the bills array

  function calcAverage() {

    let arr = bills.reduce(function(a,b) {
      return a + b;
    }, 0);

    return arr / bills.length -1;
  }

  console.log(calcAverage(bills));



// Jonas's solution

  // adding up all the values in the array 





