function insertionSort(items) {
  let value;
  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (items[j - 1] > items[j]) {
        let temp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return items;
}

// insertionSort[(6, 1, 23, 4, 2, 3)];

console.log(insertionSort([6, 1, 23, 4, 7, 4, 534, 87, 2, 3]));
