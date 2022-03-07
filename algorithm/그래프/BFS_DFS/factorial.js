//n! = 1 x 2 x 3 x... (n-1) x n

//반복적으로 구현한 n!
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

console.log("반복적 구현", factorialIterative(5));
console.log("반복적 구현", factorialRecursive(5));
