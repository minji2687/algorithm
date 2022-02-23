let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i]);
}
arr = [...new Set(arr)];
arr.sort((a, b) => {
  if (a.length === b.length) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  } else {
    return a.length - b.length;
  }
});

for (let x of arr) {
  console.log(x);
}
