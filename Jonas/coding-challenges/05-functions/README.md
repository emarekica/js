# FUNCTIONS
<br>

Back to the two gymnastics teams, the Dolphins and the Koalas!

There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).


**calculating the average**
```
add up all the numbers, then divide by how many numbers there are. In other words it is the sum divided by the count.

(a + b + c) / 3
```
<br>

A team only wins if it has at least double the average score of the other team.
<br>
<br>

**PSEUDOCODE**

`const winner = avgTeam1 >= 2 * avgTeam2;`
<br>
<br>

Otherwise, no team wins!
Take that into account when writing function.
(draw = izjednačenje)
<br>


## Your tasks:

- [x] Create an arrow function `calcAverage` to calculate the average of 3 scores.
      = generic function that calculates averages of any 3 values


**PSEUDOCODE**
```
const calcAverage = (a, b ,c)) => (a + b + c) / 3;
const averageTeam = calcAverage (44 + 23 + 71) / 3;
console.log(averageTeam);
```
<br>
<br>

[x] Use the function to calculate the average for both teams.
<br>

- [x] Create a function 'checkWinner' that takes the average score of each team as parameters (`avgDolhins` and `avgKoalas`),
and then logs the winner to the console, together with the victory points, according to the rule above.

_Example_: "Koalas win (30 vs. 13)"
<br>

- [x] Use the `checkWinner` function to determine the winner for both Data 1 and Data 2.
<br>

- [x] Ignore draws this time.
<br>
<br>

### Test data:

- _§ Data 1_: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
- _§ Data 2_: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
<br>
<br>

### Hints:

- § To calculate average of 3 values, add them all together and divide by 3
- § To check if number A is at least double number B, check for A >= 2 * B.
<br>

Apply this to the team's average scores 😉
