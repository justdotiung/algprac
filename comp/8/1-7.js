function solution(limit, s, pt) {
  let answer = 0;

  function dfs(l, sum, t) {
    if (t > limit) return;
    if (l === s.length) {
      answer = Math.max(sum, answer);
      return;
    }
    dfs(l + 1, sum + s[l], t + pt[l]);
    dfs(l + 1, sum, t);
  }
  dfs(0, 0, 0);

  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
