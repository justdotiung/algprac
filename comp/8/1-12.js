function solution(n, m) {
  const memo = Array.from({ length: n }, () => Array(m).fill(0));
  function dfs(n, m) {
    if (memo[n - 1][m - 1] > 0) return memo[n - 1][m - 1];
    if (n === m || m === 0) return 1;
    return (memo[n - 1][m - 1] = dfs(n - 1, m - 1) + dfs(n - 1, m));
  }
  return dfs(n, m);
}

console.log(solution(33, 19));
