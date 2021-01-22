function solution(s) {
  let max = Math.floor(s.length / 2);

  let newS = s.slice(0, max);
  s = s.slice(max);

  if (s.indexOf(newS) !== -1) {
    //문자가 있으면 몇번 반복되는지 알아낸다

    return max;
  }
  //반복된 횟수를 문자열 앞에 입력하고 그뒤에 나머지 문자열들을 입력한다.
}

console.log(solution("abcabcabcabcdededededede"));
