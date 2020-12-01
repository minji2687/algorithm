//삽입
//중복을 허용하지 않음
//O(1)으로 원하는 값을 바로 찾을 수 있다는 장점이 있다.

let exampleSet = new Set();

exampleSet.add(1);
exampleSet.add(1);
exampleSet.add(2);
exampleSet.add(2);
exampleSet.add(3);

exampleSet.delete(1);
// console.log(exampleSet.has(2));

// console.log(exampleSet);

//교집합

function intersectSets(setA, setB) {
  let intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  //   console.log(intersection);
  return intersection;
}

const arrayA = [1, 2, 3, 4];
const arrayB = [2, 3];
let setA = new Set(arrayA);
// console.log(setA);
console.log(typeof new Array(...setA));
let setB = new Set(arrayB);
// console.log(setA);

intersectSets(setA, setB);

//합집합

function unionSet(setA, setB) {
  let union = new Set(setA);
  for (let elem of setB) {
    union.add(elem);
  }
  //   console.log(union);
  return union;
}

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([1, 2, 3]);
let set3 = new Set([1, 6, 4]);

unionSet(set2, set3);

//차집합
function differenceSet(setA, setB) {
  let difference = new Set(setA);
  for (let elem of setB) {
    difference.delete(elem);
  }
  console.log(difference);
  return difference;
}

let setD = new Set([1, 2, 3, 4]);
let setE = new Set([1, 2, 3]);
let setF = new Set([1, 6, 4]);

differenceSet(setD, setE);
