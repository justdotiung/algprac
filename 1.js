function solution(arr) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let m = 0,
    flag = true;
  n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      flag = true;
      for (let k = 0; k < 4; k++) {
        const nx = i + dy[k];
        const ny = j + dx[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[i][j] <= arr[nx][ny]
        ) {
          flag = false;
          break;
        }
      }
      if (flag) {
        m++;
      }
    }
  }

  return m;
}

let arr = [
  [2, 3, 2, 2, 3],
  [3, 2, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
