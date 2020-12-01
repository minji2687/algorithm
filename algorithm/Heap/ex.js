function solution(operations) {
  // var answer = [];
  let hip = [];

  for (let i = 0; i < operations.length; i++) {
    const D = operations[i].split(" ")[0];
    const N = operations[i].split(" ")[1];

    if (D === "I") {
      hip.push(parseInt(N));
      hip.sort((a, b) => b - a);
      //   console.log(hip);
    } else if (operations[i] === "D 1") {
      //   let delIndex = hip.indexOf(Math.max.apply(null,hip));
      //   hip.splice(delIndex, 1);
      hip.shift();
    } else if (operations[i] === "D -1") {
      //   let delIndex = hipindexOf(Math.min(...hip));
      //   hip.splice(delIndex, 1);
      hip.pop();
    }
  }

  if (hip.length === 0) {
    hip = [0, 0];
  }
  //   console.log(hip);
  let answer = [hip.shift(), hip.pop()];
  //   console.log(answer);
  //   return answer;
}

solution(["I 7", "I 5", "I 6", "I -5", "D -1"]);
