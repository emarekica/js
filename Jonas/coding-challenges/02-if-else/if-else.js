// data 1

const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJohn = 1.95;


// Mark's BMI

  const bmiMark = massMark / heightMark ** 2;

// John's BMI

  const bmiJohn = massJohn / (heightJohn * heightJohn);

    console.log(bmiJohn, bmiMark);


// comparisson of BMI's

  markHigherBMI = bmiMark < bmiJohn;

  console.log(markHigherBMI);

  if (bmiMark < bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's BMI (${bmiJohn}).`);
  } else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's BMI (${bmiMark}).`);
  }


// data 2

const massMark2 = 95;
const massJohn2 = 85;

const heightMark2 = 1.88;
const heightJohn2 = 1.76;


// Mark's BMI

  const bmiMark2 = massMark2 / heightMark2 ** 2;


// John's BMI

    const bmiJohn2 = massJohn2 / (heightJohn2 * heightJohn2);

    console.log(bmiJohn2, bmiMark2);


// comparisson of BMI's

  markHigherBMI2 = bmiMark2 < bmiJohn2;

  console.log(markHigherBMI2);

  if (bmiMark2 < bmiJohn2) {
    console.log(`Mark's BMI (${bmiMark2}) is higher than John's BMI (${bmiJohn2}).`);
  } else {
    console.log(`John's BMI (${bmiJohn2}) is higher than Mark's BMI (${bmiMark2}).`);
  }