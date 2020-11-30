function fibo(num) {
  if (num <= 1) {
    return num;
  }
  return fibo(num - 1) + fibo(num - 2);
}

// console.log(fibo(4));

function fibo_dp(num) {
  let cache = new Array(num);
  cache[0] = 0;
  cache[1] = 1;

  for (let index = 2; index < num + 1; index++) {
    cache[index] = cache[index - 1] + cache[index - 2];
  }
  console.log(cache);
  return cache[num];
  // return (cache[num] = fibo_dp(cache[num - 1]) + fibo_dp(cache[num - 2]));
}
console.log(fibo_dp(10));
// fibo_dp(4);
