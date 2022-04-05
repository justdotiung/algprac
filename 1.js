function solution(arr) {
  let a;
  let t = Array(12).fill(0);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === 0) {
        t[0] += arr[i][j];
      } else if (i === 1) {
        t[1] += arr[i][j];
      } else if (i === 2) {
        t[2] += arr[i][j];
      } else if (i === 3) {
        t[3] += arr[i][j];
      } else if (i === 4) {
        t[4] += arr[i][j];
      }
      if (j === 0) {
        t[5] += arr[i][j];
      } else if (j === 1) {
        t[6] += arr[i][j];
      } else if (j === 2) {
        t[7] += arr[i][j];
      } else if (j === 3) {
        t[8] += arr[i][j];
      } else if (j === 4) {
        t[9] += arr[i][j];
      }
      if (i === j) {
        if (i < 2) {
          if (j < 2) {
            t[10] += arr[i][j];
          } else {
            t[11] += arr[i][j];
          }
        } else if (i > 2) {
          if (j < 2) {
            t[10] += arr[i][j];
          } else {
            t[11] += arr[i][j];
          }
        } else {
          t[10] += arr[i][j];
          t[11] += arr[i][j];
        }
      }
    }
  }

  return t;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
