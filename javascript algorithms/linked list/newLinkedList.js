class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class NodeMgmt {
  constructor(data) {
    this.head = new Node(data);
  }

  add(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = new Node(data);
    }
  }

  desc() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}

const nodelist2 = new NodeMgmt(0);

for (let i = 1; i < 10; i++) {
  nodelist2.add(i);
}

nodelist2.desc();
