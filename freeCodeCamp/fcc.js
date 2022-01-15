// ------------------------ Golf Code

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
];

function golfScore(par, strokes) {
  if (strokes === 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  return "Change Me";
}

golfScore(5, 4);

// ------------------------ Counting Cards

let count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));

// ------------------------ Record Collection

const recordCollection = {
  2548: {
    // id
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi", // prop: value
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

function updateRecords(records, id, prop, value) {
  // if prop isn't tracks and value isn't an empty string, update or set that album's prop to value
  if (prop != "tracks" && value != "") {
    records[id][prop] = value;
  }

  // if prop is tracks but the album doesn't have a tracks property (hasOwnProperty), create an empty array and add value to it
  else if (
    prop === "tracks" &&
    records - id.hasOwnProperty("tracks") === false
  ) {
    records.id.prop = [value];
  }

  // if prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array
  else if (prop === "tracks" && value !== "") {
    records.id.prop.push(value);
  }

  // if value is an empty string, delete the given prop property from the album
  else if (value === "") {
    delete records.id.prop;
  }

  // your function must always return the entire record collection object
  return records;
}

console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));

// ------------------------ Record Collection
