let n = 3;
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(i);
}

function permute(arr) {
  let result = [];
  let prev_el = [];

  function dfs(arr) {
    arr.forEach((el, index) => {
      if (arr.length == 0) {
        //결과에 배열을 넣어준다.
        //배열이 0 이라는 것은 prefix가 없다는 뜻
        result.push(prev_el.slice());
      }

      let next_el = [...arr];
      next_el.splice(index, 1);
      //배열을 앞에부분을 하나 삭제하고
      //그 삭제한 부분은 스택에 넣어둔다.
      //그리고 그 나머지 부분에 대해서 다시 경우의 수를 구한다.
      //
      prev_el.push(el);
      dfs(next_el);
      prev_el.pop();
    });
  }
  dfs(arr);
  return result;
}

permute(arr);
