"use strict";

// ------------------------ ACCESSING

// --- 1
// add key/value pairs

const tekkenCharacter = {
  player: "Hwoarang",
  fightingStyle: "Tae Kwon Doe",
  human: true,
};

// --- dot notation

// assign "origin" to the object
tekkenCharacter.origin = "South Korea";

// --- bracket notation
// required when:
// - property has a space in it
// - using a variable to name the property.

// assign "hair color"
tekkenCharacter["hair color"] = "dyed orange";

// --- without notation

const eyes = "eye color"; // assigns key
tekkenCharacter[eyes] = "brown"; // assigns value

// --- object AFTER adding the

/* 

{
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};

*/

// --- 2
// acces property names

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

console.log(checkInventory("apples")); // 25

// --- 3
// accessing object property value with []

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let onlineUsers = [];

  for (let user in usersObj) {
    // accessing object property value with []
    if (usersObj[user].online === true) {
      onlineUsers.push(user);
    }
  }

  return onlineUsers.length;
  // Only change code above this line
}

console.log(countOnline(users));

// ------------------------ MODIFYING

let nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};

nestedObject.data.onlineStatus.busy = 10;

let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};

userActivity.data.online = 45;

console.log(userActivity);
