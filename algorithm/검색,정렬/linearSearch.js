//선형 검색
//시간복잡도: O(n)

function linearSearch(array, n) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      return true;
    }
  }
  return false;
}

// linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6);
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
