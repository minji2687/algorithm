//나중에 다시 푸러야 겠따...

function solution(bridge_length, weight, truck_weights) {
  // bridge_length 다리 길이 트럭은 1초에 1만큼 움직임
  // weight 다리가 견딜 수 있는 무게
  // truck_weight 트럭무게
  let sec = 0; // 트럭이 다 지나갈 때까지 걸리는 시간
  let queue = [];
  //queue의 합이 weight을 넘지 않아야함

  queue.push(truck_weights.shift());
  sec += 1;
  // 큐의 길이가 다리의 갈이와 작거나
  let trucWeight = queue.reduce((a, v) => a + v, 0);
  if (queue.length < bridge_length && trucWeight < weight) {
    queue.push(truck_weights.shift());
    sec += 1;
  } else if (queue.length > bridge_length && trucWeight < weight) {
  }
}

solution(2, 10, [7, 4, 5, 6]);
