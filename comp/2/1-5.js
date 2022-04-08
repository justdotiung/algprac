function solution(arr) {
  let t = Array(12).fill(0);
  let r = 0,
    c = 0;
  max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      r += arr[i][j];
      c += arr[j][i];
    }
    max = Math.max(r, c, max);
    // console.log(r, c, max);
    r = 0;
    c = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    r += arr[i][i];
    c += arr[i][arr.length - 1 - i];
  }

  max = Math.max(r, c, max);
  // console.log(r, c, max);

  return max;
}

let arr = [
  [10, 13, 10, 12, 15], //[0, 4]
  [12, 39, 30, 23, 11], //[1, 3]
  [11, 25, 50, 53, 15], //[2, 2]
  [19, 27, 29, 37, 27], //[3, 1]
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
