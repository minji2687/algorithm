// 1이 될떄까지
// • 어떠한수N이1이될때까지다음의두과정중하나를반복적으로선택하여수행하려고합니다.단, 두 번째 연산은 N이 K로 나누어떨어질 때만 선택할 수 있습니다.
// 1. N에서 1을 뺍니다.
// 2. N을 K로 나눕니다.
// • 예를들어N이17,K가4라고가정합시다.이때1번의과정을한번수행하면N은16이됩니다.이후에
// 2번의 과정을 두 번 수행하면 N은 1이 됩니다. 결과적으로 이 경우 전체 과정을 실행한 횟수는 3이 됩
// 니다. 이는 N을 1로 만드는 최소 횟수입니다.
// • N과K가주어질때N이1이될때까지1번혹은2번의과정을수행해야하는최소횟수를구하는프로
// 그램을 작성하세요.

let input = require("fs").readFileSync("input.txt").toString().split("\n");

let n = Number(input[0].split(" ")[0]);
let k = Number(input[0].split(" ")[1]);

console.log(n, k);

let result = 0;
while (true) {
  let target = parseInt(n / k) * k; // n의 범위에서 k로 나누어 떨어지는 수 찾기
  result = result + (n - target); // 나눠떨어지는 수 까지 빼기

  n = target;

  if (n < k) break; // 더이상 나눌수 없을 때 반복문 탈출

  n = parseInt(n / k);
  result += 1;
}
result += n - 1;
console.log(result);
