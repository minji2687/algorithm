function solution(progresses, speeds) {
  let answer = [];
  let days = [];

  for (let i = 0; i < progresses.length; i++) {
    let day = (100 - progresses[i]) / speeds[i];
    days.push(Math.ceil(day));
  }
  console.log(days);

  let max = days[0];
  let num = 1;
  for (let i = 1; i <= days.length; i++) {
    if (max > days[i]) {
      num += 1;
    } else {
      max = days[i];
      answer.push(num);
      num = 1;
    }
  }
  return answer;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
