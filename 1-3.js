function solution(arr) {
  let answer = 0;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const path = [];
  function dfs(v1, v2) {
    if (v1 === arr.length - 1 && v2 === arr[0].length - 1) {
      answer++;
      console.log(path.slice());
      return;
    }
    for (let i = 0; i < dx.length; i++) {
      const x = dx[i];
      const y = dy[i];
      if (
        v1 + y > arr.length - 1 ||
        v2 + x > arr.length - 1 ||
        v1 + y < 0 ||
        v2 + x < 0
      )
        continue;

      if (arr[v1 + y][v2 + x] === 0) {
        arr[v1][v2] = 2;
        path.push([v1, v2]);
        dfs(v1 + y, v2 + x);
        arr[v1][v2] = 0;
        path.pop();
      }
    }
  }
  console.log(arr);
  dfs(0, 0);

  return answer;
}
let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
