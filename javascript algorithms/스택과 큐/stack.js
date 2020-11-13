function Stack(array) {
  this.array = [];
  if (array) this.array = array;
}

Stack.prototype.getBuffer = function () {
  return this.array.slice();
};

Stack.prototype.isEmpty = function () {
  this.array.length === 0;
};

Stack.prototype.push = function (value) {
  this.array.push(value);
};

Stack.prototype.pop = function () {
  this.array.pop();
};
//들여다보기
Stack.prototype.peek = function () {
  return this.array[this.array.length - 1];
};

export function stackAccessNthTopNode(stack, n) {
  const bufferArray = stack.getBuffer();
  if (n <= 0) throw "error";
  const bufferStack = new Stack(bufferArray);

  while (--n !== 0) {
    bufferStack.pop();
  }
  return bufferStack.pop();
}

export function stackSearch(stack, element) {
  let bufferArray = stack.getBuffer();

  let bufferStack = new Stack(bufferArray);

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() == element) {
      return true;
    }
  }
  return false;
}

const stack1 = new Stack();

stack1.push(10);
stack1.push(14);
stack1.push(19);
stack1.push(20);
stack1.push(19);
console.log(stack1.peek());

stack1.pop();

stackAccessNthTopNode(stack1, 3);
stackSearch(stack1, 14);

export default Stack;
