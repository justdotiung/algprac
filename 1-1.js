function solution(n, arr) {
  let answer = 0;
  const graph = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const ch = Array(n + 1).fill(0);
  const path = [];
  for (const [i1, i2] of arr) {
    graph[i1][i2] = 1;
  }

  function dfs(v) {
    if (v === n) {
      answer++;
      console.log(path);
      return;
    }
    for (let i = 1; i <= n; i++) {
      if (graph[v][i] === 1 && ch[i] === 0) {
        ch[i] = 1;
        // console.log(ch, graph[v], i);
        path.push(i);
        dfs(i);
        ch[i] = 0;
        path.pop();
      }
    }
  }
  path.push(1);
  ch[1] = 1;
  dfs(1);
  console.log(graph);
  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
