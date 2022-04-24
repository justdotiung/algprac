function solution(n) {
  function dfs(n) {
    if (n === 1) return 1;

    return n * dfs(n - 1);
  }

  return dfs(n);
}

console.log(solution(5));
