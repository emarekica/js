"use strict";

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);

  tips.push(tip);
  totals.push(tips + bills[i]);
}

  console.log(bills, tips, totals);



  
// bonus

  // sum of the bills array

  function calcAverage() {

    let arr = bills.reduce(function(a,b) {
      return a + b;
    }, 0);

    return arr / bills.length;
  }

  console.log(calcAverage(totals));