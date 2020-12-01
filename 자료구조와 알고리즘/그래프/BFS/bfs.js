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

function bfs(graph, start_node) {
  let visited = [];
  let need_visit = [];

  need_visit.push(start_node);

  while (need_visit.length) {
    let node = need_visit.shift();
    if (!visited.includes(node)) {
      visited.push(graph[node]);
      console.log(graph[node]);
      //   need_visit.push(...graph[node]);
    }
  }
  return visited;
}

bfs(graph, "A");

console.log("hi");
