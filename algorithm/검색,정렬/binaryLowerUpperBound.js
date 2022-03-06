//정렬된 순서를유지하면서 배열에삽입할 가자 왼쪽 인덱스
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

//정렬된 순서를 유지하면서 배열에 삽입할 가장 오른쪽 인덱스 반환
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

//값이 특정 범위에 속하는 데이터 개수 구하기

function countByRange(arr, leftValue, rightValue) {
  let rightIndex = upperBound(arr, rightValue, 0, arr.length);
  let leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  return rightIndex - leftIndex;
}

let arr = [1, 2, 3, 3, 3, 4, 4, 8, 9];

//값이 4인 데이터 개수 출력
console.log(countByRange(arr, 4, 4));

//값이 -1, 3 범위에 있는데이터 개수 출력
console.log(countByRange(arr, -1, 3));
