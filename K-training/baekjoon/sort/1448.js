let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

console.log(n, arr);

let result = 0;

for (let i = 0; i < n; i++) {
  let cnt = 0;
  for (j = i + 2; j < n; j++) {
    if (arr[i] + arr[i + 1] > arr[j]) {
      cnt = arr[i] + arr[i + 1] + arr[j];
    }
    result = Math.max(result, cnt);
  }
}

if (result === 0) {
  console.log(-1);
}

console.log(result);
