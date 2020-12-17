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

// console.log(graph);
// 깊이 우선 탐색
function dfs(graph, start_node) {
  let visited = [];
  let need_visited = []; //bfs와 다르게 dfs는 스택이다

  need_visited.push(start_node);

  while (need_visited.length) {
    let node = need_visited.pop(); //스택임으로 마지막 요소를 가져온다
    if (!visited.includes(node)) {
      visited.push(node);
      need_visited.push(...graph[node]);
    }
  }
  console.log(visited);
  return visited;
}

dfs(graph, "A");
