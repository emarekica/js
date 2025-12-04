// FALSY VALUES
  // 0, "", undefined, null, NaN
  // convertedd to "false" when attempted to be convert to boolean


    console.log(Boolean(0));
    console.log(Boolean(""));
    console.log(Boolean(undefined));
    console.log(Boolean(null));
    console.log(Boolean(NaN));

    console.log(Boolean("Jonas"));
    console.log(Boolean({}));           // empty object


// TYPE COERCION

  // scenario 1 - if/else statement

    let money = 110;
    
    if (money) {
      console.log("Don't spend it all!");
    } else {
      console.log("You should ge a job!");
    }

  // checking if the variable is (not) defined 

    let height = 0;

    if (height) {
      console.log("Height is defined.");
    } else {
      console.log("Height is undefined.");
    }