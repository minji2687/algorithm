let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

// let n = Number(input[0]);

// let arr = input.slice(1);
// let arr2 = arr.map((item) => Number(item));
// console.log(Arr);

// arr2.sort((a, b) => a - b);

// let result = 0; // 연속적인 수열 길이의 최댓값
// for (let i = 0; i < n; i++) {
//   let cnt = 0;
//   for (let j = 0; j < 5; j++) {
//     if (arr.slice(i, i + 5).includes(arr[i] + j)) {
//       cnt += 1;
//     }
//     result = Math.max(result, cnt);
//   }
// }

// console.log(5 - result);

let N = input[0];
let arr = [];
for (let i = 0; i <= N; i++) {
  arr.push(Number(input[i]));
}

arr.sort((a, b) => a - b);

let result = 0;
for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < 5; j++) {
    if (arr.slice(i, i + 5).contain(arr[i] + j)) {
      cnt += 1;
    }
  }
  result = Math.max(result, cnt);
}
