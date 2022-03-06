let input = require("fs").readFileSync("input.txt");
input = input.toString().split("\n");

let n = Number(input[0]);
let stack = input
  .slice(1)
  .map((item) => item.split(" "))
  .map((item) => {
    if (item[1]) {
      return [item[0], Number(item[1])];
    } else {
      return item;
    }
  });

let newStack = [];
let answer = "";
for (let i = 0; i < n; i++) {
  switch (stack[i][0]) {
    case "push":
      newStack.push(stack[i][1]);
      break;
    case "pop":
      if (newStack.length) {
        answer += newStack.pop() + "\n";
      } else {
        answer += -1 + "\n";
      }
      break;
    case "size":
      answer += newStack.length + "\n";
      break;
    case "empty":
      if (!newStack.length) {
        answer += 1 + "\n";
      } else {
        answer += 0 + "\n";
      }
      break;
    case "top":
      if (newStack.length) {
        answer += newStack[newStack.length - 1] + "\n";
      } else {
        answer += -1 + "\n";
      }
      break;
    default:
      break;
  }
}

console.log(answer);
