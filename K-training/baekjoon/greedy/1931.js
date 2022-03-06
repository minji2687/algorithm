let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = input[0];
let data = input.slice(1).map((item) => item.split(" ").map(Number));
console.log(data);

data.sort((a, b) => {
  if (a[1] == b[1]) return a[0] - b[0];
  else return a[1] - b[1];
});
console.log(data);

let arr = [];
let lastTime;
for (let i = 0; i < n; i++) {
  if (i === 0 || lastTime <= data[i][0]) {
    arr.push(data[i]);
    lastTime = data[i][1];
  }
}

console.log(arr.length);
