// 한 마을에 모험가가 N명 있습니다. 모험가 길드에서는 N명의 모험가를 대상으로 ‘공포도’를 측정했는데, ‘공포도’가 높은 모험가는 쉽게 공포를 느껴 위험 상황에서 제대로 대처할 능력이 떨어집니다.
// • 모험가 길드장인 동빈이는 모험가 그룹을 안전하게 구성하고자 공포도가 X인 모험가는 반드시 X명 이 상으로 구성한 모험가 그룹에 참여해야 여행을 떠날 수 있도록 규정했습니다.
// • 동빈이는최대몇개의모험가그룹을만들수있는지궁금합니다.N명의모험가에대한정보가주어졌 을 때, 여행을 떠날 수 있는 그룹 수의 최댓값을 구하는 프로그램을 작성하세요.

// 여행을 떠날 수 있는 그룹수의 최댓값
// 항상 최소한의 모험가의 수만 포함하여 그룹 결성

let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = Number(input[0]);
let data = input[1].split(" ").map(Number);

data.sort((a, b) => a - b);

let result = 0;

let cnt = 0; // 그룹에 포함시킬 모험가의 수

for (let x of data) {
  cnt += 1;
  if (cnt >= x) {
    result += 1;
    cnt = 0;
  }
}

console.log(result);
