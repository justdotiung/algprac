function solution(arr) {
  //         하 오 상 왼 오위 왼아 오아 왼위
  const dx = [0, 1, 0, -1, 1, -1, 1, -1];
  const dy = [1, 0, -1, 0, -1, 1, 1, -1];
  let count = 0;
  function dfs(x, y) {
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx > -1 &&
        nx < arr.length &&
        ny > -1 &&
        ny < arr.length &&
        arr[ny][nx] === 1
      ) {
        arr[ny][nx] = 2;
        dfs(nx, ny);
      }
    }
  }

  // arr[0][0] = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 1) {
        arr[i][j] = 2;
        console.log(arr[i][j], i, j);
        count++;
        dfs(j, i);
      }
    }
  }
  console.log(count);
  console.log(arr);
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
