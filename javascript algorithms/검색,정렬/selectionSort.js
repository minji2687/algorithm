import { swap } from "./bubbleSort.js";

function selectionSort(items) {
  let min;

  for (let i = 0; i < items.length; i++) {
    min = i;

    for (let j = i + 1; j < items.length; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(items, i, min);
    }
  }
  return items;
}

selectionSort([43, 5, 6, 76, 4, 23, 54, 13, 6, 7]);
console.log(selectionSort([43, 5, 6, 76, 4, 23, 54, 13, 6, 7]));
