// 재귀를 사용하여 1 부터 num 까지 곱을 출력되게 만드시요

function muliple(num) {
  if (num <= 1) {
    return num;
  }
  return num * muliple(num - 1);
}

// console.log(muliple(10));
muliple(10);

// 리스트의 합을 구하는 재귀함수를 만드시오

function sum_list(data) {
  if (data.length === 1) {
    return data[0];
  }
  return data[0] + sum_list(data.slice(1));
}
const data_list = [44, 71, 3, 67, 36, 64, 22, 45, 5, 25];
console.log(sum_list(data_list));
