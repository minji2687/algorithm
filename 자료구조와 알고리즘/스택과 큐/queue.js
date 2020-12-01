function Queue(array) {
  this.array = [];
  if (array) this.array = array;
}

Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

const queue = new Queue();

Queue.prototype.peek = function () {
  return this.array[0];
};

Queue.prototype.enqueue = function (value) {
  return this.array.push(value);
};

// console.log(queue);
