// 재귀를 사용하여 1 부터 num 까지 곱을 출력되게 만드시요

function muliple(num) {
  if (num <= 1) {
    return num;
  }

  return num * muliple(num - 1);
}

// console.log(muliple(10));
// muliple(10);

// 리스트의 합을 구하는 재귀함수를 만드시오

function sum_list(data) {
  if (data.length === 1) {
    return data[0];
  }
  return data[0] + sum_list(data.slice(1));
}
const data_list = [44, 71, 3, 67, 36, 64, 22, 45, 5, 25];
// console.log(sum_list(data_list));

function sum_list2(acc, data) {
  if (data.length === 0) {
    console.log(`총합은${acc}`);
    return acc;
  } else {
    console.log(acc, data);
    return sum_list2(acc + data[0], data.slice(1));
  }
}

// console.log(sum_list2(0, data_list));

let numAndAryHell = [
  [34, 3, 24, 5, [54, 45, 6, [65, 4, 34]]],
  1,
  34,
  24,
  [6, 345, [45, 64]],
];

function reculcive_deep(acc, arr) {
  console.log(acc, arr);
  if (arr.length === 0) {
    return acc;
  } else {
    return reculcive_deep(
      acc + (typeof arr[0] === "number" ? arr[0] : reculcive_deep(0, arr[0])),
      arr.slice(1)
    );
  }
}

console.log(reculcive_deep(0, numAndAryHell));
