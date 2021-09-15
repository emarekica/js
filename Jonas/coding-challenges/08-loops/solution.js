// Jonas's solution

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 88, 52];

const tips = [];
const totals = [];


// calculating the tip 

  for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
          // we create a new tip value with each iteration
          // that is why we can use "const"
          
    tips.push(tip);
    totals.push(tips + bills[i]);
  }

  console.log(bills, tips, totals);


// bonus

const calcAverage = function (arr) {
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  } 
  return sum / arr.length;
}

console.log(calcAverage([2, 3, 7])); 
console.log(calcAverage(totals));
console.log(calcAverage(tips));