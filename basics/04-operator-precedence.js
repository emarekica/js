const now = 2026;
const ageMarija = now - 1985;
const ageMatija = now - 1987;
 
console.log(now - 1985 > now - 1987);

// left to right
  console.log(25 - 10 - 5);

// right to left

let x, y;   
x = y = 25 - 10 - 5; 
console.log(x, y);


// calculating average age
  // parentesis makes difference

    const averageAge = ageMarija + ageMatija / 2
    console.log(ageMarija, ageMatija, averageAge); 

    const averageAge = (ageMarija + ageMatija) / 2
    console.log(ageMarija, ageMatija, averageAge); 