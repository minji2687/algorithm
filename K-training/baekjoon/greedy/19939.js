let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

let summary = 0;
for (let i = 1; i < k + 1; i++) {
  summary += i;
}

if (summary > n) {
  console.log(-1);
} else {
  n -= summary;
  //n 서머리를 뺀 공의 갯수,
  // k 팀숫자
  if (n % k === 0) console.log(k - 1);
  // 남은 공의 갯수와 팀을 나눈 숫자가 같으면 팀숫자에서 -1을 빼고
  else console.log(k); // 남의 공의 갯수와 팀을 나눈 숫자가 같지 않으면 팀의 숫자를 보여준다.
}
