function solution(kg, arr) {
  let answer = 0;

  function dfs(l, sum) {
    if (sum > kg) return;
    if (l === arr.length) {
      answer = Math.max(sum, answer);
      return;
    }
    dfs(l + 1, sum + arr[l]);
    dfs(l + 1, sum);
  }
  dfs(0, 0);

  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
