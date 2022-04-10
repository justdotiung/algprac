function solution(arr) {
  const answer = 0;

  let a = [];
  let b = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 1; k < arr[i].length - j; k++) {
        a.push(arr[i][j] + "" + arr[i][j + k]);
      }
    }
  }
  for (let i = 0; i < a.length; i++) {
    if (!a.includes(a[i].split("").reverse().join("")) && !b.includes(a[i])) {
      b.push(a[i]);
    }
  }
  return b.length;
}

function solution1(test) {
  let answer = 0;
  m = test.length;
  n = test[0].length;
  for (let i = 1; i <= n; i++) {
    // 멘토
    for (let j = 1; j <= n; j++) {
      //멘티
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        //테스트번호
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          // 등수
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
