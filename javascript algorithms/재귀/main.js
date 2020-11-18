function countDownToZero(n) {
  if (n > 20) {
    return n;
  } else {
    // console.log(n);
    countDownToZero(n + 1);
    console.log(n);
  }
}

countDownToZero(12);

//피보나치

//반복루프

function forGetNthFibo(n) {
  if (n <= 1) return n; //기저조건
  let sum = 0;
  let last = 1;
  let lastlast = 0;

  for (let i = 1; i < n; i++) {
    // console.log(sum);
    sum = lastlast + last;
    lastlast = last;
    last = sum;
  }
  // console.log(sum);
  return sum;
}

forGetNthFibo(12);

//n번째 피보나치 수는 (n-1)번째 피보나치 수와 (n-2)번째 피보나치 수의 합
//O(n2)

function reculsiveGetNthFibo(n) {
  if (n <= 1) {
    return n;
  } else {
    return reculsiveGetNthFibo(n - 1) + reculsiveGetNthFibo(n - 2);
  }
}

reculsiveGetNthFibo(12); //144

//꼬리재귀
//잘안됨... 다음에 다시 해볼것...
function getNthFiboBetter(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  }
  if (n == 1) {
    return last;
  }
  return getNthFiboBetter(n - 1, last, lastlast + last);
}

getNthFiboBetter(12);
