function qsort(data) {
  if (data.length < 1) {
    return data;
  }

  let left = [];
  let right = [];
  let pivot = data[0];

  for (let index in data) {
    if (data[index] < pivot) {
      left.push(data[index]);
    } else if (data[index] > pivot) {
      right.push(data[index]);
    }
  }
  return qsort(left).concat([pivot]).concat(qsort(right));
}
console.log(qsort([12, 4, 35, 54, 65, 73, 23, 4, 54]));
// qsort([12, 4, 35, 54, 65, 73, 23, 4, 54]);
