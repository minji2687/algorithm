let graph = {};
// graph는 dict 타입
// value는 리스트 타입

graph["A"] = ["B", "C"];
graph["B"] = ["A", "D"];
graph["C"] = ["A", "G", "H", "I"];
graph["D"] = ["B", "E", "F"];
graph["E"] = ["D"];
graph["F"] = ["D"];
graph["G"] = ["C"];
graph["H"] = ["C"];
graph["I"] = ["C", "J"];
graph["J"] = ["I"];

//코드가 동작을 안함.. 나중에 다시보기
// 넓이 우선 탐색
function bfs(graph, start_node) {
  let visited = [];
  let need_visit = [];

  need_visit.push(start_node);

  while (need_visit.length) {
    let node = need_visit.shift();
    if (!visited.includes(node)) {
      visited.push(graph[node]);
      //   need_visit.push(...graph[node]);
    }
  }
  return visited;
}

bfs(graph, "A");

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

function bfs2(graph, start, visited) {
  let queue = [];
  queue.push(start);
  visited[start] = true;

  while (queue) {
    let v = queue.shift();
    console.log(v);
    for (let i of graph[v]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
}

bfs2(graph2, 1, visited);
