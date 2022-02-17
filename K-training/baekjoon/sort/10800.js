// let fs = require("fs");
// let input = fs.readFileSync("input.txt").toString().split("\n");

// let N = input[0];
// let input2 = input.slice(1);

// let arr = input2.map((nums) => {
//   return nums.split(" ").map(Number);
// });

// let count = 0;
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (i === j) {
//       continue;
//     }
//     if (arr[i][1] === arr[j][1]) {
//       continue;
//     } else if (arr[i][1] > arr[j][1] && arr[i][0] !== arr[j][0]) {
//       count += arr[j][1];
//     }
//   }
//   result.push(count);
//   count = 0;
// }
// console.log(result.join("\n"));

//시간초과 ㅠㅠㅜㅜㅠㅜㅠㅜㅜㅜ??? 어떻게 줄일수 있는지알아보기

//답
let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");
let n = Number(input[0]);
let arr = [];
for (let i = 0; i < n; i++) {
  let c = Number(input[i + 1].split(" ")[0]);
  let s = Number(input[i + 1].split(" ")[1]);
  arr.push([c, s, i]);
}
// 크기를 기준으로 오름차순 정렬
arr.sort((a, b) => a[1] - b[1]);
let summary = 0; // 전체 누적 합
let colorSummary = Array(200001).fill(0);
let result = Array(n).fill(0);

let start = 0;
while (start < n) {
  let end = start;
  while (end < n && arr[start][1] == arr[end][1]) end += 1;
  for (let i = start; i < end; i++) {
    result[arr[i][2]] = summary - colorSummary[arr[i][0]];
  }
  for (let i = start; i < end; i++) {
    colorSummary[arr[i][0]] += arr[i][1];
    summary += arr[i][1];
  }
  start = end;
}
console.log(result.join("\n"));
