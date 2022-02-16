"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",

  // omjeri (koeficijent)
  odds: {
    // niži omjer = veća vjerojtnost pobjede / domaća momčad
    team1: 1.33,

    // neodlučeni rezultat
    x: 3.25,

    // niži omjer = manja vjerojatnot pobjede / gostujuća momčad
    team2: 6.5,
  },
};

// 1. Create one player array for each team
// const players1 = game.players[0];
// const players2 = game.players[1];

// with destructuring
const [players1, players2] = game.players;
console.log(players1, players2);

// 2. The first player in any player array is the goalkeeper and the others are field players. For team 1 create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

// const [gk, ...fieldPlayers] = game.players[0];
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3. Create an array 'allPlayers' containing all players
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. Create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

console.log(players1Final);

// 5. Based on the game.odds object, create one variable for each odd (nested destructuring)
// rename variable "x" to "draw"

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

// 6.
// Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored. `);
  console.log(...players);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");

printGoals(...game.scored);

// 7.
// The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator."

team1 < team2
  ? console.log(`Team1 is more likely to win with ${game.odds.team1} points.`)
  : console.log(`Team2 is more likely to win with ${game.odds.team2} points.`);

team1 > team2
  ? console.log(`Team2 is more likely to win with ${game.odds.team2} points.`)
  : console.log(`Team1 is more likely to win with ${game.odds.team1} points.`);

team1 < team2 &&
  console.log(`Team1 is more likely to win with ${game.odds.team1} points.`);

team1 > team2 &&
  console.log(`Team2 is more likely to win with ${game.odds.team1} points.`);

// --------------------------------------------------------------------------- 2

// How to skip first index in the array, but not the value?
// indexNumber = player + 1 >> goal + 1

const goals = Object.values(game.scored);

for (const [goal, player] of goals.entries()) {
  console.log(`Goal no. ${goal + 1}: "${player}"`);
}

// Use a loop to calculate the average odd and log it to the console.

/*

average odd = koeficijent klađenja

    1. What to loop over?

     - over values of game.odds (it is an object)

        const values = Object.values(openingHours);

        for (const hour of values) {
          console.log(hour);
        }


    2. How to calculate averages?

      You calculate an average by adding all the elements and then dividing by the number of elements.

        let total = 0;
        
        for(let i = 0; i < grades.length; i++) {
          total += grades[i];
        }
        let avg = total / grades.length;


*/

// my solution
const odds = Object.values(game.odds);
console.log(odds);
let totalOdds = 0;

for (let i = 0; i < odds.length; i++) {
  totalOdds += odds[i];
}

let avgOdds = totalOdds / odds.length;
console.log(`Average odds: ${avgOdds}`);

// Jonas's solution
const allOdds = Object.values(game.odds);
let average = 0;

for (const odd of allOdds) {
  average += odd; // add value of odd at each iteration to the average
}

average /= allOdds.length; // divide the final average by the length of the array
console.log(average);

/* 
Print the 3 odds to the console in a formatted way, exactly like this:

    Odd of victory Bayern Munich: 1.33
    Odd of draw: 3.25
    Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them (except for ""draw"").
Note how the odds and the game objects have the same property names.

** accessing the elements of the object with the name of "team", BOTH/ALL of them: 

              ${game[team]}

** accessing the elements with the name of "team": 

            
***

the brackets in `game[team]`  mean the VALUE of team, where? in the GAME OBJECT.

Just like in the bonus `scorers[player]` means value of the property named player inside of scorers object.

Just like when we were setting empty default value for in the restaurant examples:
`menu = []`

*/

// Jonas's solution
for (const [team, odd] of Object.entries(game.odds)) {
  // ternary operator to get a string of teams
  // game[team] because names are the same
  const teamString = team === "x" ? "draw" : `victory ${game[team]}`;

  console.log(`Odd of ${teamString} : ${odd}`);
}

/* 
**Bonus:** 

Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:

    {
      Gnarby: 1,
      Hummels: 1,
      Lewandowski: 2
    }

solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element

*/

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

// --------------------------------------------------------------------------- 3
