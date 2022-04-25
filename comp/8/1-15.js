function solution(n, f, arr, m) {
  const ch = Array.from({ length: n }, () => 0);
  let answer = 0;
  function dfs(l, c) {
    if (c > f) return;
    if (l === n) {
      if (c < f) return;
      let t = 0;
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 1) {
          t += arr[i];
        }
      }
      if (t % m === 0) answer++;
      return;
    }

    ch[l] = 1;
    dfs(l + 1, c + 1);
    ch[l] = 0;
    dfs(l + 1, c);
  }
  dfs(0, 0);
  return answer;
}

let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));
