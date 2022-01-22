# OOP

<br>

## 1

<br>
<br>

[x] Use a constructor function to implement a 'Car'.
A car has a 'make' and a 'speed' property.
The 'speed' property is the current speed of the car in km/h.
<br>

[x] Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console.
<br>

[x] Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console.
<br>

[x] Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.
<br>
<br>

**Test data:**

- § Data car 1: 'BMW' going at 120 km/h
- § Data car 2: 'Mercedes' going at 95 km/h
  <br>
  <br>

---

## 2

<br>
<br>

[x] Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl').
<br>

[] Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6).
<br>

[x] Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6).
<br>

[x] Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
<br>
<br>

**Test data:**

Data car 1: 'Ford' going at 120 km/h
<br>
<br>

---

## 3

<br>
<br>

**Your tasks:**
<br>

[x] Use a constructor function to implement an Electric Car (called `EV`) as a child "class" of `Car`. Besides a make and current speed, the `EV` also has the current battery charge in % (`charge` property).

[x] Implement a `chargeBattery` method which takes an argument `chargeTo` and sets the battery charge to `chargeTo`.
<br>

[x] Implement an `accelerate` method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
<br>

[x] Create an electric car object and experiment with calling `accelerate`, `brake` and `chargeBattery` (charge to 90%). Notice what happens when you `accelerate`!

_Hint_: Review the definiton of polymorphism"
<br>

**Test data:**

_Data car 1_: `Tesla` going at 120 km/h, with a charge of 23%"

<br>
<br>

---

## 4

**Your tasks**:
<br>

[] Re-create Challenge #3, but this time using ES6 classes: create an `EVCl` child class of the `CarCl` class.
<br>

[] Make the `charge` property private
<br>

[] Implement the ability to chain the `accelerate` and `chargeBattery` methods of this class, and also update the `brake` method in the `CarCl` class. Then experiment with chaining!
<br>

**Test data:**

_Data car 1_: `Rivian` going at 120 km/h, with a charge of 23%.
