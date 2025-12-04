// The SWITCH statement

  // there is a different activity for each day > we will map one activlity to each day

  const day = "Sunday";

   switch(day) {
    case "Monday":       // 1, 2, 3
      console.log("Learn Photoshop.");
      console.log("Exercise.");
      break; // 6
    case "Tuesday":
      console.log("Work on project.");
      break;
    case "Wednesday":  // 4
    case "Thursday": 
      console.log("Learn Javascript."); 
      break;
    case "Friday": 
      console.log("Work on Figma.");
      break;
    case "Saturday":
    case "Sunday":
      console.log("Hiking! Weee");
      break;

    default:      // 5
      console.log("Not a valid day!");
  }


      // 1 - after ":" all the lines are executed, you can write as many as you want
      // 2 - day === Monday   compares value "day" do "Monday" in STRICT equality way
      // 3 - if this is true, code will be executed

      // 4 - writing the same code for 2 different cases 
      // 5 - will be executed if all the other cases fail; here we use it for invalid entry of a week day
      // 6 - without break the code continues executing 





  // the same thing, but with "IF-ELSE" statement

  if(day === "Monday") {
    console.log("Learn Photoshop, Exercise");
} else if(day === "Tuesday") {
   console.log("Work on project.");
} else if(day === "Wednesday" || day === "Thursday") {
    console.log("Learn Javascript.");
} else if(day === "Friday") {
    console.log("Work on Figma");
} else if(day === "Saurday" || day === "Sunday") {
    console.log("Hiking! Weee");
} else {
  console.log("Not a valid day!");
}
