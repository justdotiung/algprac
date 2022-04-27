function solution(arr) {
  //         하 오 상 왼 오위 왼아 오아 왼위
  const dx = [0, 1, 0, -1, 1, -1, 1, -1];
  const dy = [1, 0, -1, 0, -1, 1, 1, -1];
  const n = arr.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 1) {
        count++;
        const queue = [[i, j]];
        arr[i][j] = 0;
        while (queue.length) {
          let [x, y] = queue.shift();
          console.log(x, y);
          for (let k = 0; k < dx.length; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx > -1 && nx < n && ny > -1 && ny < n && arr[nx][ny] === 1) {
              arr[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
        console.log("BFS end");
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
