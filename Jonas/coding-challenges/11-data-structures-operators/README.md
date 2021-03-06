# SPORT BETTING APP

**Data Structures and Operators**

<br>

## #1

<br>

We're building a football betting app (soccer for my American friends )!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
<br>

**Your tasks:**
<br>

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players.

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator."
<br>

**Test data for 6.**: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from `game.scored`.

<br><br>

## #2

<br>

Let's continue with our football betting app! Keep using the 'game' variable from before.
<br>

**Your tasks:**
<br>

1.  Loop over the game.scored array and print each player name to the console, along with the goal number (Example: ""Goal 1: Lewandowski"")
2.  Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3.  Print the 3 odds to the console, but in a nice formatted way, exactly like this:

    ```js
    Odd of victory Bayern Munich: 1.33 Odd of draw: 3.25
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5
    ```

    Get the team names directly from the game object, don't hardcode them (except for ""draw"").
    Hint: Note how the odds and the game objects have the same property names
    
    <br><br>

**Bonus:** Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
    <br>

```js
    {"
      "Gnarby: 1,
      Hummels: 1,
      Lewandowski: 2
    }"
```

<br><br>


## #3

<br>

Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).
<br>

**Your tasks:**
<br>

1.  Create an array 'events' of the different game events that happened (no duplicates)
2.  After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3.  Compute and log the following string to the console: ""An event happened, on average, every 9 minutes"" (keep in mind that a game has 90 minutes)
4.  Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
    [FIRST HALF] 17: GOAL
    <br><br>

```js
"const gameEvents = new Map(["
"[17,"	"'"	"GOAL'],"
"[36,"	"'"	"Substitution'],"
"[47,"	"'"	"GOAL'],"
"[61,"	"'"	"Substitution'],"
"[64,"	"'"	"Yellow card'],"
"[69,"	"'"	"Red card'],"
"[70,"	"'"	"Substitution'],"
"[72,"	"'"	"Substitution'],"
"[76,"	"'"	"GOAL'],"
"[80,"	"'"	"GOAL'],"
"[92,"	"'"	"Yellow card'],"
```

<br><br>

## #4

<br>

Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.
<br>

**Test data (pasted to textarea, including spaces):**
<br>

```js
underscore_case first_name
Some_Variable calculate_AGE
delayed_departure
```

<br>

Should produce this output( 5 separate `console.log` outputs):
<br>

**Hints:**

- Remember which character defines a new line in the `textarea`
- The solution only needs to work for a variable made out of 2 words, like a_b
- Start without worrying about the . Tackle that only after you have the variable name conversion working
- This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
  <br>

Afterwards, test with your own test data!
<br>

```js
"document.body.append(document.createElement('textarea'));";
"document.body.append(document.createElement('button'));";
```
