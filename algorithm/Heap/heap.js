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
      let parent_idx = Math.abs(insert_idx / 2);
      let temp = this.heap_array[parent_idx];
      this.heap_array[parent_idx] = this.heap_array[insert_idx];
      this.heap_array[insert_idx] = temp;

      insert_idx = parent_idx;
    }
  }

  move_down(popped_idx) {
    let left_child_popped_idx = popped_idx * 2;
    let right_child_popped_idx = popped_idx * 2 + 1;

    if (left_child_popped_idx >= this.heap_array.length) {
      return false;
    } else if (right_child_popped_idx >= this.heap_array.length) {
      if (
        this.heap_array[popped_idx] > this.heap_array[left_child_popped_idx]
      ) {
        return true;
      } else {
        return false;
      }
      // case3: 오른쪽 자식노드도 있을 때 .. 여기서 부터 구현
    } else {
      if (
        this.heap_array[left_child_popped_idx] >
        this.heap_array[right_child_popped_idx]
      ) {
        if (
          this.heap_array[popped_idx] < this.heap_array[left_child_popped_idx]
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        if (
          this.heap_array[popped_idx] < this.heap_array[right_child_popped_idx]
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  pop() {
    if (this.heap_array.length <= 1) {
      return null;
    }

    const returned_data = this.heap_array[1];
    this.heap_array[1] = this.heap_array[this.heap_array.length - 1];
    this.heap_array.pop();
    let popped_idx = 1;

      while (this.move_down(popped_idx)):
              let left_child_popped_idx = popped_idx * 2
              let right_child_popped_idx = popped_idx * 2 + 1

              // case2: 왼쪽 자식 노드만 있을 떄
              if (right_child_popped_idx >= this.heap_array.length){
                  if (this.heap_array[popped_idx] > this.heap_array[left_child_popped_idx]){
                      this.heap_array[popped_idx], this.heap_array[left_child_popped_idx] = this.heap_array[
                          left_child_popped_idx], this.heap_array[popped_idx]

                      popped_idx = left_child_popped_idx
                  }
                }
              // case3: 오른쪽 자식노드도 있을 때
              else{
                  if (this.heap_array[left_child_popped_idx] > this.heap_array[right_child_popped_idx]){
                      if (this.heap_array[popped_idx] < this.heap_array[left_child_popped_idx]){
                          this.heap_array[popped_idx], this.heap_array[left_child_popped_idx] = this.heap_array[
                              left_child_popped_idx], this.heap_array[popped_idx]

                          popped_idx = left_child_popped_idx
                          }
                  }
                  else{
                      if (this.heap_array[popped_idx] < this.heap_array[right_child_popped_idx])
                          this.heap_array[popped_idx], this.heap_array[right_child_popped_idx] = this.heap_array[
                              right_child_popped_idx], this.heap_array[popped_idx]

                          popped_idx = right_child_popped_idx
                          }        
                    }
          return returned_data
    }
}

const heap = new Heap(15);
heap.insert(10);
heap.insert(8);
heap.insert(5);
heap.insert(4);
heap.insert(20);
heap.pop();

console.log(heap.heap_array);
