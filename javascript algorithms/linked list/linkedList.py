
class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


node1 = Node(1)
node2 = Node(2)
node1.next = node2
head = node1  # 처음노드를 head에 저장


# 데이터 추가하기

def add(data):
    node = head
    while node.next:
        node = node.next
    node.next = Node(data)


for index in range(2, 10):
    add(index)

# 데이터 출력하기

node = head
while node.next:
    print(node.data)
    node = node.next
print(node.data)


node3 = Node(2.5)

# 노드 중간에 삽입하기

node = head
search = True
while search:
    if node.data == 2:
        search = False
    else:
        node = node.next

node_next = node.next
node.next = node3
node3.next = node_next
