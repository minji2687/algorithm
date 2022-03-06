let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let data = input[1].split(" ").map(Number);

console.log(n, data);

let arrow = Array(1000001).fill(0);
let result = 0;
for (let x of data) {
  if (arrow[x] > 0) {
    arrow[x]--;
    arrow[x - 1]++;
  } else {
    result += 1;
    arrow[x - 1]++;
  }
}
console.log(result);

//풍성 맞추기 readline을 이용해서 나중에 다시 풀어보기
