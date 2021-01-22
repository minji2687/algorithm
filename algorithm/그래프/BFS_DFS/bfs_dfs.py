graph = dict()
# graph는 dict 타입
# value는 리스트 타입

graph['A'] = ['B', 'C']
graph['B'] = ['A', 'D']
graph['C'] = ['A', 'G', 'H', 'I']
graph['D'] = ['B', 'E', 'F']
graph['E'] = ['D']
graph['F'] = ['D']
graph['G'] = ['C']
graph['H'] = ['C']
graph['I'] = ['C', 'J']
graph['J'] = ['I']

# 넓이 우선 탐색


def bfs(graph, start_node):
    visited = list()
    need_visit = list()

    need_visit.append(start_node)

    while(need_visit):
        node = need_visit.pop(0)
        if node not in visited:
            visited.append(node)
            need_visit.extend(graph[node])

    return visited


bfs(graph, 'A')

# 깊이 우선 탐색


def dfs(graph, start_node):
    visited = list()
    need_visit = list()

    need_visit.append(start_node)

    while(need_visit):
        node = need_visit.pop()
        if(node not in visited):
            visited.append(node)
            need_visit.extend(graph[node])

    return visited


dfs(graph, 'A')


# BFS는 주로 queue 를 사용하고
# BFS는 주로 Recursion과 Stack을 사용

# 탐색
# 1. 구현
# 2. 알고리즘 지식
