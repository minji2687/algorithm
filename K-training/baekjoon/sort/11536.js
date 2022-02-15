let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let N = input[0];
let person = input.slice(1);

let increasing = true;
let decreasing = true;

for (let i = 0; i < person.length; i++) {
  if (person[i] > person[i + 1]) {
    increasing = false;
  } else if (person[i] < person[i + 1]) {
    decreasing = false;
  }
}

if (increasing) console.log("INCRESING");
else if (decreasing) console.log("DECRESING");
else console.log("NEITHER");

// 답은 나오는데 백준에서 정답처리가 안됨;;왜인지 모르겠음..
