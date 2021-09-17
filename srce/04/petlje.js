iA = 94;
iB = 54;
sOperacija = "+";
iRazlika = iA - iB;


function ispis(sPoruka) {
  document.write(sPoruka);
}


if (iA > iB) {
  console.log("iA je veći od iB");
} else {
  console.log("iA je manji od iB");
};

switch (sOperacija) {
  case "+":
    console.log("Zbrajanje");
    break;
  
  case "-":
    console.log("Oduzimanje");
    break;
  
  case "*":
    console.log("Množenje");
    break;

  case "/":
    console.log("Dijeljenje");
    break;
  default:
    console.log("Nepoznato");
}


// 8

if (iA > iB) {
  console.log(iA - iB);
} else {
  console.log(iB - iA);
}; 

// uvjetni operator = tertiary (conditional) operator

  // syntax: condition ? exprIfTrue : exprIfFalse

  iRazlika = iA > iB ? iA - iB : iB - iA;
  console.log(iRazlika); 
  

  // ekvivalentno je ovome: 

      function iRazlika() {
      return iA > iB ? iA - iB
          : iB - iA;
      }

console.log(iRazlika);

/*  


function example(…) {
    return condition1 ? value1
         : condition2 ? value2
         : condition3 ? value3
         : value4;
}


Equivalent to:

function example(…) {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }
}

*/


// 9

for (var i = 1; i <=10; i++) {
  console.log("redak:" + i);
}

// 10 

/* 

prethodna petlja, pomoću petlje WHILE

  let n = 0;

  while (n < 3) {
    n++;
  }

  console.log(n);
  
*/

let redak = 1;

while (redak <= 10) {
  console.log("redak: " + redak);
  redak++;
}
