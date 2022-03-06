let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

let t = Number(input[0]);
let [m, n, k] = input[1].split(" ").map(Number);

// console.log(m, n, k);

let data = [];
let visited = [];
for (let i = 0; i < n; i++) {
  data.push(new Array(m).fill(0));
  visited.push(new Array(m).fill(false));
}

for (let i = 2; i <= k + 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  data[y][x] = 1;
}

console.log(data);
function dfs(x,y){
  if (x <= -1 || x >= m || y <= -1 || y >= n) continue


}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
