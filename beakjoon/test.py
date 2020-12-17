# 이진 탐색 트리 구현

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


class NodeMgmt:
    def __init__(self, head):
        self.head = head

    def insert(self, value):
        self.current_node = self.head
        while True:
            if value < self.current_node.value:  # head에 Node 인스턴스가 들어올 예정이라 .value
                if self.current_node.left != None:  # 해당브랜치를 가지고 있다면
                    self.current_node = self.current_node.left  # 비교할 대상을 바꾸고 다시 while문

                else:
                    self.current_node.left = Node(value)
                    break

            else:
                if self.current_node.right != None:
                    self.current_node = self.current_node.right

                else:
                    self.current_node.right = Node(value)
                    break

    def search(self, value):
        self.current_node = self.head
        while self.current_node:
            if self.current_node.value == value:
                return True
            elif self.current_node.value > value:
                self.current_node = self.current_node.left
            else:
                self.current_node = self.current_node.right
        return False


head = Node(1)
BST = NodeMgmt(head)
BST.insert(2)
BST.insert(3)
BST.insert(6)
BST.insert(5)
BST.insert(0)

# print(BST.head.right.value)
print(BST.search(9))
