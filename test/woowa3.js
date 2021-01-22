function solution(A) {
  let answer;
  A.forEach((index, num, A) => {
    let number;
    Math.sign(num) === -1 ? (number = Math.abs(num)) : (number = num * -1);
    if (A.includes(number)) {
      answer = num;
      return;
    }
  });
  return answer ? answer : 0;
}
