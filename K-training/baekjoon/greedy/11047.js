let input = require("fs").readFileSync("input.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let coins = input.slice(1).map(Number);
coins.sort((a, b) => b - a);

let result = 0;
for (let coin of coins) {
  if (coin > k) {
    continue;
  }
  result += parseInt(k / coin);
  k = k % coin;
}
console.log(result);

//맞왜틀?
