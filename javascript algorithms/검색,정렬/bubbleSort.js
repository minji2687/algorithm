// 시간복잡도 O(n2)

export function swap(array, index1, index2) {
  let temp = array[index1];

  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

bubbleSort([6, 1, 2, 5, 3, 7, 8]);
