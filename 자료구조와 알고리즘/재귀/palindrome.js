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

function swap(input) {
  if (typeof input === "number") {
    return;
  }
  const array = input.split(" ");
  let temp = array[0];
  array[0] = array[1];
  array[1] = temp;

  console.log(array.join(" "));
}

// swap(input);
