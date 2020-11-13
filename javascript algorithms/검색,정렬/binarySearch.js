// 이진검색
// 배열이 정렬된 경우에만 사용가능
// 중간값을 활용해 원하는 값보다 큰지 작은지 확인하여 검색한다

function binarySearch(array, n) {
  let lowIndex = 0;
  let highIndex = array.length - 1;

  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] === n) {
      return midIndex;
    } else if (array[midIndex] > n) {
      highIndex = midIndex - 1;
    } else if (array[midIndex] < n) {
      lowIndex = midIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
