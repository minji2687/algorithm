//시간복잡도 O(n2)

function findTwoSum(array, sum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] + array[i] == sum) {
        return true;
      }
    }
  }
  return false;
}

function findTwoSum2(array, sum) {
  let store = {};

  for (let i = 0; i < array.length; i++) {
    console.log(store);
    if (store[array[i]]) {
      return true;
    } else {
      store[sum - array[i]] = array[i];
    }
  }
  return false;
}

console.log(findTwoSum2([2, 4, 3, 6, 8, 9, 3], 5));
