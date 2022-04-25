function solution(n, f) {
  const ch = Array.from({ length: n }, () => 0);
  const answer = [];
  function dfs(l, c) {
    if (c > f) return;
    if (l === n) {
      if (c < f) return;
      let t = [];
      for (let i = 0; i < ch.length; i++) {
        if (ch[i] === 1) {
          t.push(i + 1);
        }
      }
      answer.push(t);
      return;
    }

    ch[l] = 1;
    dfs(l + 1, c + 1);
    ch[l] = 0;
    dfs(l + 1, c);
  }
  dfs(0, 0);
  answer.push(answer.length);
  return answer;
}

console.log(solution(6, 4));
