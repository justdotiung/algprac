function solution(m, arr) {
  const answer = 0;

  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i][0] / 2 + arr[i][1];
    let c = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j === i) continue;
      a += arr[j][0] + arr[j][1];
      c++;
      if (a > m) {
        c--;
        if (max < c) max = c;
        break;
      }
    }
  }

  return max;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
