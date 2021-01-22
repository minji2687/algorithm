graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

visited = [False] * 9


def dfs(graph, v, visited):
    visited[v] = True

    for i in graph[v]:  # 2,3,8
        if not visited[i]:  # 2,3,8 true 라면 다시
            dfs(graph, i, visited)  # 그래프와 2,3,8 순회한다


dfs(graph, 1, visited)
