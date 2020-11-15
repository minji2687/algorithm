// console.log("hi");

//회문을 재귀를 이용하여 찾기
function palindrome(string) {
  if (string.length <= 1) {
    // console.log(true);
    return true;
  }
  if (string[0] === string[string.length - 1]) {
    return palindrome(string.slice(1, string[string.length - 2]));
  } else {
    // console.log(false);
    return false;
  }
}

palindrome("gtrertg");
