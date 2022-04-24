function solution(n, m) {
  let answer = [];
  const t = Array.from({ length: n }, () => 0);
  const ch = Array.from({ length: m.length }, () => 0);
  let cnt = 0;
  function dfs(l) {
    if (l === n) {
      answer.push(t.slice());
      cnt++;
      return;
    }

    for (let i = 0; i < m.length; i++) {
      if (ch[i] === 0) {
        ch[i] = 1;
        t[l] = arr[i];
        dfs(l + 1);
        ch[i] = 0;
      }
    }
  }

  dfs(0);
  answer.push(cnt);
  return answer;
}

let arr = [3, 6, 9, 12];
console.log(solution(2, arr));
