let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map((item) => Number(item)));
}
arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});
let answer = "";
for (let i = 0; i < n; i++) {
  answer += arr[i][0] + " " + arr[i][1] + "\n";
}
console.log(answer);
