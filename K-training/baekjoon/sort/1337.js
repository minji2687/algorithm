let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");

let N = input[0];
let arr = input.slice(1);

arr.sort((a, b) => a - b);

//5번이 됫는지 체크
let plus = 0;
let nArr = [];
for (let i = 0; i < arr.length; i++) {
  if (parseInt(arr[i]) + 1 === parseInt(arr[i + 1])) {
    plus++;
  } else if (parseInt(arr[i]) + 1 !== parseInt(arr[i + 1])) {
    nArr.push(plus);
    plus = 0;
  }
}

let num = Math.max(...nArr);
console.log(nArr);

console.log(Math.max(...nArr));
console.log(5 - (num + 1));
