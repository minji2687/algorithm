let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

[n, k] = input[0].split(" ").map(Number);
console.log(n, k);

//24시 60분 60초

// let time = 60 * 60 * n;
// console.log(time);
let num = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= 60; j++) {
    for (let l = 1; l <= 60; l++) {
      let time = `${i} ${j} ${l}`;
      if (time.includes(`${k}`)) {
        console.log(time);
        num++;
      }
    }
  }
}

console.log(num);
