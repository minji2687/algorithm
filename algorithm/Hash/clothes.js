function solution(clothes) {
  var answer = 1;
  let hashTable = {};

  //   for (let i = 0; i < clothes.length; i++) {
  //     let currentArray = clothes[i];

  //     if (hashTable[currentArray[1]]) {
  //       hashTable[currentArray[1]] += 1;
  //     } else if (!hashTable[currentArray[1]]) {
  //       hashTable[currentArray[1]] = 1;
  //     }
  //   }

  for (let arr of clothes) {
    hashTable[arr[1]] = hashTable[arr[1]] ? hashTable[arr[1]] + 1 : 1;
  }

  for (let elem in hashTable) {
    answer *= hashTable[elem] + 1;
  }

  console.log(answer - 1);
  // return answer - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
