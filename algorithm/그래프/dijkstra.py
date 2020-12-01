# 첫 정점으로부터 가장 작은 경로를 계산 하는 알고리즘
# 너비우선탐색(BFS)와 유사, 비슷한 depth의 간선부터 먼저 체크

# 초기의 첫 정점 거리는 0 을 거리 배열(우선순위 큐)에 넣고 나머지는 inf(무한대)로 지정

# 다익스트라 알고리즘 파이썬 구현

import heapq
mygraph = {
    "A": {"B": 8, "C": 1, "D": 2},
    "B": {},
    "C": {"B": 5, "D": 2},
    "D": {"E": 3, "F": 5},
    "E": {"F": 1},
    "F": {"A": 5}
}
# 가장 작은 데이터 부터 pop이 됨


def dijkstra(graph, start):
    distances = {node: float("inf") for node in graph}
    distances[start] = 0

    queue = []

    heapq.heappush(queue, [distances[start], start])

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if distances[current_node] < current_distance:
            continue

        for adjacent, weight in graph[current_node].items():
            distance = current_distance + weight

            if distance < distances[adjacent]:
                distances[adjacent] = distance
                heapq.heappush(queue, [distance, adjacent])

    return distances
