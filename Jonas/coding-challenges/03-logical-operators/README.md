# CODING CHALLENGE 3


There are two gymnastics teams, Dolphins and Koalas.
They compete against each other 3 times.
The winner with the highest average score wins a trophy!

## Your tasks:

[x] Calculate the average score for each team, using the test data below.

[x] Compare the team's average scores to determine the winner of the competition, and print it to the console.

Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).



### Bonus 1  [x]

Include a requirement for a minimum score of 100.
With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 

Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉


## PSEUDOCODE  [x]

variable minScore = 100;

if (scoreTeam1 >= minScore && scoreTeam1 > scoreTeam2) {
  console.log("Winner is the team" + Team1);
} else if (scoreTeam2 >= minScore && scoreTeam2 > scoreTeam2) {
  console.log("Winner is the team" + Team2);
} else {
  console.log("There is no winner!);
}



### Bonus 2

Minimum score also applies to a draw!
So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.


## PSEUDOCODE


variable minScore = 100;

if (scoreTeam1 >= minScore && scoreTeam1 > scoreTeam2) {
  console.log("Winner is the team" + Team1);
} else if (scoreTeam2 >= minScore && scoreTeam2 > scoreTeam2) {
  console.log("Winner is the team" + Team2);
} else if (scoreTeam1 === scoreTeam2 && score scoreTeam1 >= minScore && scoreTeam2 >= minScore) {
  console.log("Both teams are winners!");
} else {
  console.log("There is no winner!);
}





### Test data:

§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
