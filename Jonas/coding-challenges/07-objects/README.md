# OBJECTS
<br>

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! 
<br>

_Remember_: BMI = mass / height ** 2 = mass
            / (height * height) (mass in kg and height in meter)

 `**` = _exponentiation operator_ (na kvadrat, na kub... )
<br>
<br>

## Your tasks:

- [x] For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).

- [x] Create a `calcBMI` method on each object to calculate the BMI (the same methoD on both objects).
   Store the BMI value to a property, and also return it from the method.

- [x] Log to the console who has the higher BMI, together with the full name and the respective BMI.
<br>

_Example_: "John's BMI (28.3) is higher than Mark's (23.9)!"
<br>
<br>

**PSEUDOCODE**
```
 console.log(mark.calcBMI());  //
 console.log(john.calcBMI());  // 

 TERNARY operator instead of if/else

 if ( markBMI > johnBMI ) {
     console.log("Mark's BMI (mark.calcBMI()) is higher than John's BMI (john.calcBMI())!"
 }
   else {
     console.log("John's BMI (john.calcBMI()) is higher than Mark's BMI (mark.calcBMI())!"
   }

   ili

 higherBMI = markBMI > johnBMI ? `Mark's BMI ${mark.calcBMI()} is higher than John's BMI ${john.calcBMI()}!` : `John's BMI ${john.calcBMI()} is higher than Mark's BMI ${mark.calcBMI()}!`; 

this.hasDriversLicence ? "a" : "no"
```
<br>
<br>

**Test data**:

- _§ Data 1_: Mark weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

- _§ Data 2_: Mark weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
