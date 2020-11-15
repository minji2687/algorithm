//배열에 중복이 있는지 확인

function checkDuplicates(arr) {
  let mySet = new Set(arr);
  console.log(mySet.size < arr.length);
  return mySet.size < arr.length;
}

// checkDuplicates([1, 2, 3, 4, 5, 6, 7]);
// checkDuplicates([1, 2, 3, 4, 5, 5, 6, 6, 7]);

function uniqueList(arr1, arr2) {
  let mySet = new Set(arr1.concat(arr2));
  console.log(Array.from(mySet));
}

uniqueList([1, 1, 1, 2, 2], [2, 3, 4, 5]);
