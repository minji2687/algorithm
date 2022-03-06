let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);

let data = input[1].split(" ").map(Number);
data.sort((a, b) => a - b);

console.log(data);

let target = 1;
for (x of data) {
  if (target < x) break;

  target += x;
}
console.log(target);
