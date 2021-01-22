let graph2 = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
let visited = Array(9).fill(false);

function dfs2(graph, v, visited) {
  visited[v] = true;
  console.log(v);
  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs2(graph, i, visited);
    }
  }
}

console.log(dfs2(graph2, 1, visited));
