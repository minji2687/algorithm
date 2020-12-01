//시간복잡도 O(n)

function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function () {
  return (this.size = 0);
};

//링크드 리스트 삽입
SinglyLinkedList.prototype.insert = function (value) {
  if (this.head === null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    let temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
};

let sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(2);
sll1.insert(3);

console.log(sll1);

//삭제 다시 작성하기
SinglyLinkedList.prototype.remove = function (value) {
  let currentHead = this.head;
  if (currentHead.data === value) {
    this.head = this.head.next;
    this.size--;
  } else {
    let prev = this.head;
    while (this.head.next) {
      if (this.head.data === value) {
        prev.next = this.head.next;
        perv = this.head;
        currentHead = currentHead.next;
      }
    }
  }
};

//링크드 리스트 삭제
