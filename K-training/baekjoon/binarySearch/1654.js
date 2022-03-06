let input = require("fs").readFileSync("input.txt").toString().split("\n");
console.log(input);

let [n, m] = input[0].split(" ").map(Number);
let trees = input.slice(1).map(Number);
console.log(n, m, trees);

let start = 0;
let end = trees.reduce((a, b) => Math.max(a, b), 0);

// let result = 0;
let total = 0;
while (start <= end) {
  let mid = parseInt((start + end) / 2);
  for (let x of trees) {
    if (x > mid) {
      total += x / mid;
    }
  }
  if (total < m) end = mid - 100;
  else {
    result = mid;
    start = mid + 1;
  }
}
console.log(result);
