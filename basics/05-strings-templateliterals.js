const firstName = "Matija";
const job = "manager";
const birthYear = 1987;
var currentYear = 2021;



// string

  const Matija = "Hello, I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + ".";
  console.log(Matija);


  // multiline strings

      console.log("String with \n\
        multiple \n\
        lines.");



// template literal

  const Matija2 = `Hello, I'm ${firstName}, a ${currentYear - birthYear} years old ${job}.`;
  console.log(Matija2);

  console.log(`Just a regular string...`); 


  // multiline strings

      console.log(`String
      with
      multiple
      lines.`)

