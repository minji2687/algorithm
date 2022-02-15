let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let [N, C] = input[0].split(" ").map((s) => Number(s));
let arr = input[1].split(" ").map((s) => Number(s));

let newArr = arr.reduce((acc, num) => {
  let i = acc.filter((itemArr) => itemArr[0] === num);
  if (i.length === 0) {
    acc.push([num, 1]);
  } else {
    i[0][1]++;
  }
  return acc;
}, []);

newArr.sort((a, b) => b[1] - a[1]);

let answer = "";
for (let i = 0; i < newArr.length; i++) {
  for (let j = 0; j < newArr[i][1]; j++) {
    answer += Number(newArr[i][0]) + " ";
  }
}

console.log(answer);
