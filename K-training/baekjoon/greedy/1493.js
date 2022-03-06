let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

let length = Number(input[0].split(" ")[0]);
let width = Number(input[0].split(" ")[1]);
let height = Number(input[0].split(" ")[2]);
let cubes = Array(20).fill(0);

let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  cubes[a] = b;
}

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

let size = 19;

size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;

for (let i = size; i >= 0; i--) {}
//이문제 뭐야ㅠㅠㅠ 답을봐도 어려워
