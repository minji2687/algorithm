function solution(number, k) {
  var answer = "";
  let min = number[0];
  let er;
  for (let i = 0; i < number.length; i++) {
    console.log(number[0]);
    if (number[i] > min) {
      er = number.splice(i, 1);
    }
  }
  //   console.log(e);

  //   console.log(newNum);
  //   return answer;
}

solution("1231234", 3);
