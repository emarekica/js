let chessGrid = [ "", "#", "", "#", "", "# ", "", "#\n", "#", "", "#", "", "#", "", "#\n", "", "#", "", "#", "", "#", "", "#\n", "", "#", "", "#", "", "# ", "", "#\n", "#", "", "#", "", "#", "", "#\n", "", "#", "", "#", "", "#", "", "#\n"];

console.log(chessGrid);





// solution: 

let size = 8;

let board = "";

for (let y = 0; y < size; y++) {       // handles the lines
  for (let x = 0; x < size; x++) {     // handles the characters on a line
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";                       // after the line has been built up
}

console.log(board);

