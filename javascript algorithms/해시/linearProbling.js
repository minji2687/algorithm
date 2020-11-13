// 선형탐사 이용하기

function HashTable(size) {
  this.size = size; // 해쉬의 초기 크기
  this.key = this.initArray(size);
  this.value = this.initArray(size);
  this.limit = 0; // 해시가 차있는 수
}

HashTable.prototype.put = function (key, value) {
  if (this.limit >= this.size) throw "hash table is full";

  let hashedIndex = this.hash(key);
};

HashTable.prototype.hash = function (key) {
  //키가 정수인지 확인한다.
  if (!Number.isInteger(key)) throw "must be int";

  return key % this.size; //키를 배열크기로 나눔
};

HashTable.prototype.put = function (key, value) {
  if (this.limit == this.size) {
    throw "hash table size is full";
  }

  let hashedIndex = this.hash(key);

  while (this.key[hashedIndex] != null) {
    //키에 값이 들어있다면
    //해시 키값을 증가시킨뒤에
    //다시 사이즈로 나눈다.
    //비어있는 키를 찾을 때 까지 반복
    hashedIndex++;

    hashedIndex = hashedIndex % this.size;
  }

  this.key[hashedIndex] = key;
  this.value[hashedIndex] = value;
  this.limit++;
};

HashTable.prototype.get = function (key) {
  let hashedIndex = key % this.size;

  while (this.key[hashedIndex] !== null) {
    hashedIndex++;

    hashedIndex = hashedIndex % this.size;
  }

  return this.values[hashedIndex];
};

HashTable.prototype.initArray = function (size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array.push(null);
  }
  return array;
};

const exampletable = new HashTable(13);

exampletable.put(47, "hi");
exampletable.put(56, "gdf");
exampletable.put(34, "hgd");
exampletable.put(5, "htei");
exampletable.put(6, "tei");
exampletable.put(75, "happy");
exampletable.put(4, "gory");
exampletable.put(3, "forty");
exampletable.put(25, "sunny");
exampletable.put(54, "weathers");

console.log(exampletable.key);
console.log(exampletable.value);
