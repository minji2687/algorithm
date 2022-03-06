let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

let n = Number(input[0]);

let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split("").map(Number));
}

function dfs(x, y, num) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) {
    return false;
  }
  if (arr[x][y] === 0) {
    arr[x][y] = 1;
    num + 1;
    console.log(num);
    let n1 = dfs(x - 1, y, num);
    let n2 = dfs(x, y - 1, num);
    let n3 = dfs(x, y + 1, num);
    let n4 = dfs(x + 1, y, num);
    return n1 + n2 + n3 + n4;
  }
  return false;
}

let result = 0;
let nums = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j, 1)) {
      result++;
      nums.push(dfs(i, j, 1));
    }
  }
}

console.log(result);
console.log(nums);
