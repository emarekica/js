
// LOGICAL OPERATORS

  // &&  and
  // ||  or
  // !   not

  const hasDriversLicence = true;   // A
  const hasGoodVision = true;      // B

  console.log(hasDriversLicence && hasGoodVision);   // both must be equal
  console.log(hasDriversLicence || hasGoodVision);   // one must be true
  console.log(!hasDriversLicence);                   // inverts the value
  

// let's determine wether the person should (not) drive

  // model: if the person has driver's licence & a good vision

  const shouldDrive = hasDriversLicence && hasGoodVision;

/*   if(shouldDrive) {
    console.log('This person is allowed to drive.');
  } else {
    console.log('Someone else should drive.');
  } */


  const isTired = false;  // C
  console.log(hasDriversLicence || hasGoodVision || isTired);  // one has to be true
  console.log(hasDriversLicence && hasGoodVision && isTired);  // all have to be true



  // 3 conditions so that the person can drive

  if(hasDriversLicence && hasGoodVision && !isTired) {
    console.log('This person is allowed to drive.');
  } else {
    console.log('Someone else should drive.');
  }