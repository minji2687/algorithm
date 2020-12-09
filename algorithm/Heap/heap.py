# 최대값과 최소값을 빠르게 찾아야 하는 경우 사용
# 단순 배열을 사용하면 시간이 오래 걸리는데 우선순위 큐를 사용하면
# O(logN)으로 굉장히 시간이 단축이 될 수 있다.
# 완전이진트리 사용 (변형된 트리 사용)
# 최대값과 최소값을 빠르게 찾아야 하는 경우 사용
# 단순 배열을 사용하면 시간이 오래 걸리는데 우선순위 큐를 사용하면
# O(logN)으로 굉장히 시간이 단축이 될 수 있다.
# 완전이진트리 사용 (변형된 트리 사용)

class Heap:
    def __init__(self, data):
        self.heap_array = list()
        self.heap_array.append(None)
        self.heap_array.append(data)

    def move_up(self, insert_idx):
        if insert_idx <= 1:
            return False
        parent_idx = insert_idx // 2
        if self.heap_array[insert_idx] > self.heap_array[parent_idx]:
            return True
        else:
            return False

    def insert(self, data):
        if len(self.heap_array) == 0:
            self.heap_array.append(None)
            self.heap_array.append(data)
        else:
            self.heap_array.append(data)

            insert_idx = len(self.heap_array)-1

            while self.move_up(insert_idx):
                parent_idx = insert_idx // 2
                self.heap_array[insert_idx], self.heap_array[parent_idx] = self.heap_array[parent_idx], self.heap_array[insert_idx]
                insert_idx = parent_idx

    # heap 가장 큰 항목을 삭제할 때 사용하는 메서드
    def move_down(self, popped_idx):
        left_child_popped_idx = popped_idx * 2
        right_child_popped_idx = popped_idx * 2 + 1

        # case1: 왼쪽 자식 노드도 없을 때
        if left_child_popped_idx >= len(self.heap_array):
            return False

        # case2: 왼쪽 자식 노드만 있을 떄
        elif right_child_popped_idx >= len(self.heap_array):
            if self.heap_array[popped_idx] > self.heap_array[left_child_popped_idx]:
                return True
            else:
                return False

        # case3: 오른쪽 자식노드도 있을 때
        else:
            if self.heap_array[left_child_popped_idx] > self.heap_array[right_child_popped_idx]:
                if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                    return True
                else:
                    return False
            else:
                if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
                    return True
                else:
                    return False

    # 가장 큰 항목 삭제

    def pop(self):
        if len(self.heap_array) <= 1:
            return None

        returned_data = self.heap_array[1]
        self.heap_array[1] = self.heap_array[-1]
        del self.heap_array[-1]
        popped_idx = 1

        while self.move_down(popped_idx):
            left_child_popped_idx = popped_idx * 2
            right_child_popped_idx = popped_idx * 2 + 1

            # case2: 왼쪽 자식 노드만 있을 떄
            if right_child_popped_idx >= len(self.heap_array):
                if self.heap_array[popped_idx] > self.heap_array[left_child_popped_idx]:
                    self.heap_array[popped_idx], self.heap_array[left_child_popped_idx] = self.heap_array[
                        left_child_popped_idx], self.heap_array[popped_idx]

                    popped_idx = left_child_popped_idx

            # case3: 오른쪽 자식노드도 있을 때
            else:
                if self.heap_array[left_child_popped_idx] > self.heap_array[right_child_popped_idx]:
                    if self.heap_array[popped_idx] < self.heap_array[left_child_popped_idx]:
                        self.heap_array[popped_idx], self.heap_array[left_child_popped_idx] = self.heap_array[
                            left_child_popped_idx], self.heap_array[popped_idx]

                        popped_idx = left_child_popped_idx

                else:
                    if self.heap_array[popped_idx] < self.heap_array[right_child_popped_idx]:
                        self.heap_array[popped_idx], self.heap_array[right_child_popped_idx] = self.heap_array[
                            right_child_popped_idx], self.heap_array[popped_idx]

                        popped_idx = right_child_popped_idx

        return returned_data


heap = Heap(15)
heap.insert(10)
heap.insert(8)
heap.insert(5)
heap.insert(4)
heap.insert(20)
heap.insert(26)
heap.insert(40)
heap.insert(90)
print(heap.pop())
print(heap.pop())
print(heap.pop())
print(heap.pop())
print(heap.heap_array)
