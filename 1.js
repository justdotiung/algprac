function solution(n, m) {
  const dy = Array.from({ length: n + 1 }, () => 1000);
  dy[0] = 0;
  for (let i = 0; i < m.length; i++) {
    for (let j = arr[i]; j <= n; j++) {
      dy[j] = Math.min(dy[j], dy[j - m[i]] + 1);
    }
    console.log(dy);
  }
  console.log(dy[n]);
}
let arr = [1, 2, 5];
console.log(solution(15, arr));
