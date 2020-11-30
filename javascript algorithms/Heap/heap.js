class Heap {
  constructor(data) {
    this.heap_array = [];
    this.heap_array.push(null);
    this.heap_array.push(data);
  }

  move_up(insert_idx) {
    let parent_idx = insert_idx / 2;
    if (insert_idx <= 1) {
      return false;
    }

    if (this.heap_array[insert_idx] > this.heap_array[parent_idx]) {
      return true;
    } else {
      return false;
    }
  }

  insert(data) {
    if (this.heap_array.length == 0) {
      this.heap_array.push(null);
      this.heap_array.push(data);
      return true;
    }

    this.heap_array.push(data);
    let insert_idx = this.heap_array.length - 1;

    while (this.move_up(insert_idx)) {
      let parent_idx = insert_idx / 2;
      let temp = this.heap_array[parent_idx];
      this.heap_array[parent_idx] = this.heap_array[insert_idx];
      this.heap_array[insert_idx] = temp;

      insert_idx = parent_idx;
      // return true;
    }
  }
}

const heap = new Heap(15);
heap.insert(10);
heap.insert(8);
heap.insert(5);
heap.insert(4);
heap.insert(20);

console.log(heap.heap_array);
