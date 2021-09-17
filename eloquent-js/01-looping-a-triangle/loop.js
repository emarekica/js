let n = "#";

for (let i = 1; i <=7; i++) {
	console.log(n);
  n += "#";
}


// solution:

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);