// tip calculator


/* 

    1. How to calculate percentage depending on the bill value?
        20% x value = 0.2 x value
        15% x value = 0.15 x value
    

*/

  

  let bill = 275;

  let tip = bill >= 50 && bill <=300 ? 0.15 * bill : 0.2 * bill;

  let final = bill + tip;

  console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${final}`);


  let bill2 = 40;

  let tip2 = bill2 >= 50 && bill2 <=300 ? 0.15 * bill2 : 0.2 * bill2;

  let final2 = bill2 + tip2;

  console.log(`The bill was ${bill2}, the tip was ${tip2} and the total value was ${final2}`);



  let bill3 = 430;

  let tip3 = bill3 >= 50 && bill3 <=300 ? 0.15 * bill3 : 0.2 * bill3;

  let final3 = bill3 + tip3;

  console.log(`The bill was ${bill3}, the tip was ${tip3} and the total value was ${final3}`);




