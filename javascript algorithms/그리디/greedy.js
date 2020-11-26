//동전의 개수를 가장 작게 써서 해당 돈을 쓰는 문제

let coin_list = [1000, 100, 50, 10];

function min_coin_cont(value, coin_list) {
  let total_coin_num = 0;
  let details = [];

  coin_list.sort((a, b) => b - a);

  for (let coin of coin_list) {
    let coin_num = value / coin;
    total_coin_num += coin_num;
    value -= coin_num * coin;
    details.push([coin, coin_num]);
  }
  // console.log(total_coin_num);
  return total_coin_num;
}

min_coin_cont(3000, coin_list);

// 무게제한이 k인 배낭에 최대가치를 가지도록 물건을 넣는 문제
// (가치,무게)
const data_list = [
  [10, 10],
  [15, 12],
  [20, 10],
  [25, 8],
  [30, 5],
];
function get_max_value(data_list, capacity) {
  // const sorted = data_list.sort((x) => {
  //   x[1] / x[0];
  // });
  let total_value = 0;
  let details = [];

  for (let data of data_list) {
    if (capacity - data[0] >= 0) {
      total_value += data[1];
      capacity -= data[0];
      details.push([data[0], data[1], 1]);
    } else {
      let fraction = capacity / data[0];
      total_value += fraction * data[1];
      capacity -= data[0] * fraction;
      details.push([data[0], data[1], fraction]);
      break;
    }
  }

  console.log(total_value, details);
  return total_value, details;
}

get_max_value(data_list, 30);
