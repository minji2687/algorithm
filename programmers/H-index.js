function solution(citations) {
  citations.sort((a, b) => a - b);
  let answer = citations.length; // 인용된 논문 횟수
  console.log(citations);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] > answer) {
        answer == 
    }
  }
  // while (answer) {
  //     if (citations[answer]) {
  //     }
  //     // if (citations[answer] > answer) {
  //     //   answer += 1;
  //     // } else if (citations[answer] <= answer) {
  //     //   return answer;
  //     // }
  //     answer -= 1;
  //   }
}

console.log(solution([3, 0, 6, 1, 5]));
