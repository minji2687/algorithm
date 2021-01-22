function Heap() {
  this.items = [];
}

Heap.prototype.swap = function (index1, index2) {
  let temp = this.items[index1];
  this.items[index1] = this.items[index2];
  this.items2 = temp;
};

Heap.prototype.parentIndex = function (index) {
  return Math.floor((index - 1) / 2);
  // parent_idx = Math.abs(insert_idx / 2); heap1번에서 짯던 prent 구하는 코드
};

Heap.prototype.leftChildenIndex = function (index) {
  return index * 2 + 1;
  // let left_child_popped_idx = popped_idx * 2;
};
Heap.prototype.rightChildrenIndex = function (index) {
  return index * 2 + 2;
};

Heap.prototype.parent = function (index) {
  return this.itmes[this.parentIndex(index)];
};

Heap.prototype.leftChild = function (index) {
  return this.items[this.leftChildenIndex(index)];
};

Heap.prototype.rightChild = function (index) {
  return this.itmes[this.rightChildrenIndex(index)];
};

Heap.prototype.peek = function (item) {
  return this.itmes[0];
};

Heap.prototype.size = function () {
  return this.itmes.length;
};

function MinHeap() {
  this.itmes = [];
}

MinHeap.prototype = Object.create(Heap.prototype);

MinHeap.prototype.add = function (item) {
  console.log(this.itmes);
  let leng = this.items.length;
  this.items[leng] = item;
  this.bubbleUp();
};

MinHeap.prototype.poll = function () {
  let item = this.items[0]; //제일 상위아이템을 뽑는다
  this.items[0] = this.itmes[this.items.length - 1];
  //제일 상위 아이템에 가장 마지막 요소를 둔다
  this.items.pop();
  //마지막 요소를 상위에 두고 마지막 요소는 지운다
  this.bubbleDown();
  //상위에둔 요소가 자식 노드보다 크다면 아래로 내린다 bubbleDown
  return item;
};

//프로토타입을 복사함으로써 힘으로 부터 도움 함수를 상속한다

MinHeap.prototype.bubbleDown = function () {
  let index = 0;
  while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
    let smallerIndex = this.leftChildIndex(index);
    if (
      this.rightChild(index) &&
      this.rightChild(index) < this.items[smallerIndex]
    ) {
      smallerindex = this.rightChildrenIndex(index);
    }
    this.swap(smallerIndex, index);
    index = smallerIndex;
  }
};

MinHeap.prototype.bubbleUp = function () {
  let index = this.items.length - 1;
  while (this.parent(index) && this.parent(index) > this.items[index]) {
    this.swap(this.parentIndex(index), index);
    index = this.parentIndex(index);
  }
};

var mh1 = new MinHeap();

// mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);
