let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
let N = input[0];
let nums = input[1].split(" ").map((s) => Number(s));
nums.sort((a, b) => a - b);
let leng = nums[0] + nums[nums.length - 1];
let half = leng / 2;
// console.log(half);

let result;
let answer;
nums.forEach((num) => {
  let cnt;
  if (num < half) {
    cnt = half - num;
    // console.log(cnt);
  } else {
    cnt = num - half;
  }

  if (!result) {
    result = cnt;
  }

  if (result > cnt) {
    result = cnt;
    answer = num;
  }
});

console.log(answer);

//왜틀리는지 체크해보자 ㅠ
