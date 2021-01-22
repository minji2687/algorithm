function solution(number, k) {
  let numArr = number.split("").map((el) => parseInt(el));
  let max = Math.max(...numArr.slice(0, k));
  k = number.length - k;

  let answer = "";
  answer += max;

  console.log(answer);
  // while (k !== 0) {
  numArr.splice(numArr.indexOf(max) + 1, numArr.length);
  console.log(numArr);
  // }
  // return intArr.join("");
}

console.log(solution("4177252841", 4));
