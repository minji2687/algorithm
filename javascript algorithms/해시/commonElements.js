function commonElements(kArray) {
  const hashmap = {};
  const answer = [];

  for (let i = 0; i < kArray.length; i++) {
    for (let j = 0; j < kArray[i].length; j++) {
      if (!hashmap[kArray[i][j]]) {
        hashmap[kArray[i][j]] = 1;
      } else {
        hashmap[kArray[i][j]]++;
      }
    }
  }
  for (let prop in hashmap) {
    if (hashmap[prop] === kArray.length) {
      answer.push(parseInt(prop));
    }
  }
  console.log(answer);
  return answer;
}

commonElements([
  [1, 2, 3, 5, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 7, 4],
]);
