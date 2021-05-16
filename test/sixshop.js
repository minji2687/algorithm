// 택배를 이용해 총 n개의 옷을 배송하려고 합니다. 택배 회사에는 현재 옷 3개, 5개를 담을 수 있는 상자가 준비되어 있습니다. 상자의 크기에 상관없이 상자의 개수로 배송비를 받기 때문에, 상자의 개수를 최소한으로 줄이려고 합니다. 단, 상자를 보내기 위해서는 상자에 반드시 들어갈 수 있는 옷이 모두 들어가야 합니다. 즉, 옷을 2개만 담은 상자는 배송할 수 없습니다. 보내야 할 옷의 개수 n이 주어질 때, 배송비를 최소화할 수 있는 상자의 개수를 return하도록 solution 함수를 완성하세요. 어떠한 방법으로도 모든 옷을 보낼 수 없다면 -1을 반환하면 됩니다.

// n = 1260
// count = 0

// array = [500, 100, 50, 10]

// for coin in array:
//     count += n // coin
//     n = n % coin

// print(count)

// function solution(n) {
//   var answer = 0;
//   //   let boxs = [5, 3];
//   if (n % 5 === 0 || n % 3 === 0) {
//     answer += n / 5;
//     n = n % 5;
//     answer += n / 3;
//     n = n % 3;
//   } else {
//     return -1;
//   }

//   return answer;
// }
// console.log(solution(7));

// Number.parseInt(5, 2);
// console.log(Number.parseInt(12, 2));
// let dec = 9;
// let hex = dec.toString(2);

// function solution(n) {
//   var answer = 0;
//   let kDec = n;
//   let kHex = kDec.toString(2);
//   let KHexLength = kHex.split("").filter((num) => num === "1").length;
//   for (let i = 1; i < n; i++) {
//     let dec = i;
//     let hex = dec.toString(2);
//     let oneLength = hex.split("").filter((num) => num === "1").length;
//     if (oneLength === KHexLength) {
//       answer++;
//     }
//   }
//   return answer;
// }
// console.log(solution(30));

// function solution(paper) {
//   paper.sort((a, b) => b - a);

//   for (let i = paper.length; i > 0; i--) {
//     let sum = paper.slice(0, i).reduce((acc, num) => acc + num, 0);
//     if (sum >= i ** 2) {
//       return i;
//     }
//   }
// }

// console.log(solution([1, 0, 0, 3, 0, 1]));

// 문제 설명
// 아기 돼지 삼형제가 1부터 n까지 번호가 붙어있는 음식을 먹으려고 합니다. 세 돼지 모두 식탐이 강했기 때문에 다음 규칙에 따라 음식을 먹기로 결정했습니다.

// 첫째 돼지에게는 1번 음식부터 x번 음식까지, 둘째 돼지에게는 x+1번 음식부터 y번 음식까지, 셋째 돼지에게는 y+1번 음식부터 n번 음식까지 분배됩니다(1 ≤ x ＜ y ＜ n).
// 모든 음식은 정수형태의 만족도 수치를 가지고 있습니다.
// 각 돼지의 포만도는 각자가 먹은 음식의 만족도 값의 합으로 나타낼 수 있으며, 음식을 모두 먹은 후 세 돼지의 포만도가 모두 같아야 합니다.
// 모든 돼지는 자신의 음식을 남기지 않고 다 먹습니다.
// 음식 중에는 만족도가 음수인 음식이 존재할 수 있으며, 만족도가 음수인 음식도 남기지 않고 모두 먹습니다.
// 음식의 만족도가 저장된 배열 foods 가 매개변수로 주어질 때, 아기 돼지 삼 형제의 포만도가 같아지게 음식을 나누어 주는 방법의 가짓수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// foods는 음식의 만족도가 1번 음식부터 n번 음식까지 순서대로 들어있는 배열입니다.
// foods에 들어있는 만족도는 -100,000 이상 100,000 이하의 정수입니다.
// foods에 들어있는 음식의 개수는 500,000개 이하입니다.
// 정답이 231 - 1 보다 작거나 같은 경우만 입력으로 주어집니다.
// 입출력 예시
// foods	result
// [1,2,3,0,3]	2
// [4,1]	0
// 입출력 예 설명
// 입출력 예 #1

// 다음 두 가지 경우가 가능합니다.

// 첫째 돼지에게 1번, 2번 음식, 둘째 돼지에게 3번 음식, 셋째 돼지에게 4번, 5번 음식을 나누어 주면 각자의 포만도가 3이 됩니다.
// 첫째 돼지에게 1번, 2번 음식, 둘째 돼지에게 3번, 4번 음식, 셋째 돼지에게 5번 음식을 나누어 주면 각자의 포만도가 3이 됩니다.
// 입출력 예 #2

// 세 마리 돼지에게 공평하게 나눠 줄 방법이 존재하지 않습니다.

// function solution3(n) {
//   var answer = 0;
//   //   let boxs = [5, 3];
//   if (n % 5 === 0 || n % 3 === 0) {
//     while (!n == 0) {
//       if (n % 5 === 0) {
//         answer += n / 5;
//         n = n % 5;
//       } else if (n % 3 === 0) {
//         answer += n / 3;
//         n = n % 3;
//       }
//     }
//   } else {
//     return -1;
//   }

//   return answer;
// }

// console.log(solution3());
