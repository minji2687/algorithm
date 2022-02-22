let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

let n = Number(input[0]);
let cnt = Array(1001).fill(0);

for (let i = 0; i <= n; i++) {
  let cur = Number(input[i]);
  cnt[cur] += 1;
}

let answer = "";

for (let i = 1; i <= 10000; i++) {
  for (let j = 0; j < cnt[i]; j++) {
    answer += i + "\n";
  }
}
console.log(answer);
