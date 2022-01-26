let fs = require("fs");
let input = fs.readFileSync("input.txt").toString().split("\n");
// console.log(input);

const arr = input;
const prime = [2, 3, 5, 7];
//Math.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    //1은 소수가 아니다
    console.log(`${arr[i]}는 소수가 아니다.`);
  }

  for (let j = 0; j < prime.length; j++) {
    if (arr[i] === prime[j]) {
      //소수다.
      console.log(`${arr[i]}는 소수다.`);
      break;
    }
    if (arr[i] % prime[j] === 0) {
      //나머지가 0이면 소수가 아니다.
      console.log(`${arr[i]}는 소수가 아니다`);
      break;
    } else {
      console.log(`${arr[i]}는 소수다.`);
      break;
    }
  }
}
