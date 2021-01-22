//주어진 숫자중 만들 수 있는 소수는 몇개인지 찾기
function solution(nums) {
  let result = 0;
  let sum_value;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum_value = nums[i] + nums[j] + nums[k];
        console.log(nums[i], nums[j], nums[k], sum_value);
        if (isPrime(sum_value)) {
          result++;
        }
      }
    }
  }
  function isPrime(sumValue) {
    for (let i = 2; i < sumValue; i++) {
      if (sumValue % i == 0) {
        return false;
      }
    }
    return true;
  }

  return result;
}

//가장 긴 회문(palindrome) 찾기
function solution(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length; j > 0; j--) {
      let cutStr = s.substring(i, i + j);
      //   console.log(cutStr);
      if (palindrome(cutStr)) {
        return cutStr.length;
      }
      if (i + j >= s.length) {
        break;
      }
    }
  }

  function palindrome(s) {
    if (s.length <= 1) {
      return true;
    }
    if (s[0] == s[s.length - 1]) {
      let cut = s.substring(1, s.length - 1);

      return palindrome(cut);
    } else {
      return false;
    }
  }
}
console.log(solution("abacde"));
