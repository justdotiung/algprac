function solution(n, m) {
  let answer = 100000000;

  function dfs(l, s) {
    if (s > n) return;
    if (l >= answer) return;
    if (s === n) {
      answer = Math.min(answer, l);
      return;
    }

    for (let i = 0; i < m.length; i++) {
      dfs(l + 1, s + m[i]);
    }
  }

  dfs(0, 0);
  return answer;
}
let arr = [1, 2, 5];
console.log(solution(15, arr));
