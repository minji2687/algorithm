//병합정렬
//시간복잡도 O(n)

function merge(leftA, rightA) {
  let results = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftA.length > leftIndex && rightA.length > rightIndex) {
    if (leftA[leftIndex] < rightA[rightIndex]) {
      results.push(leftA[leftIndex]);
      leftIndex += 1;
    } else {
      results.push(rightA[rightIndex]);
      rightIndex += 1;
    }
  }

  //   while (leftA.length > leftIndex) {
  //     results.push(leftA[leftIndex]);
  //     leftIndex += 1;
  //   }

  //   while (rightA.length > rightIndex) {
  //     results.push(rightA[rightIndex]);
  //     rightIndex += 1;
  //   }

  let leftRemains = leftA.slice(leftIndex);
  let rightRemains = rightA.slice(rightIndex);

  return results.concat(leftRemains).concat(rightRemains);

  //   return results;
}

// function mergeSort(array) {
//   if (array.length < 2) {
//     return array;
//   }

//   let midpoint = Math.floor(array.length / 2);
//   let leftArray = array.slice(0, midpoint);
//   let rightArray = array.slice(midpoint);

//   return merge(mergeSort(leftArray), mergeSort(rightArray));
// }

// mergeSort([6, 1, 23, 4, 2, 3]);

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midpoint = Math.floor(array.length / 2);

  let leftArray = mergeSort(array.slice(0, midpoint));
  let rightArray = mergeSort(array.slice(midpoint));

  return merge(leftArray, rightArray);
}

// mergeSort([6, 1, 23, 4, 2, 3]);
console.log(mergeSort([6, 1, 4, 100, 2, 6, 65, 55, 3]));
