function cmp(a, b) {
  return a - b;
}

function solution(A, B) {
  var n = A.length;
  var m = B.length;
  A.sort(cmp);
  B.sort(cmp);
  var i = 0;
  for (var k = 0; k < n; k++) {
    if (i < m - 1 && B[i] < A[k]) i += 1;
    if (A[k] == B[i]) return A[k];
  }
  return -1;
}

console.log(solution([3, 2, 2, 3, 4, 2, 1], [7, 2, 5, 3, 2, 1]));
// console.log(solution([3, 1000000, 3], [1, 1000000, 2, 12, 3]));
