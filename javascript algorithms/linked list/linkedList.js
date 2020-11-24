class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function add(data) {
  let node = head;
  while (node.next) {
    node = node.next;
  }
  node.next = new Node(data);
}

const node1 = new Node(1);

const head = node1;

for (let i = 2; i < 10; i++) {
  add(i);
}

// 노드 중간에 삽입하기
let node3 = new Node(2.5);

let node = head;
let search = true;
while (search) {
  if (node.data == 2) {
    search = false;
  } else {
    node = node.next;
  }
}

let node_next = node.next;
node.next = node3;
node3.next = node_next;

{
  let node = head;
  while (node.next) {
    console.log(node.data);
    node = node.next;
  }
  console.log(node.data);
}
