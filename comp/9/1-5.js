function solution(n, m) {
  let answer = 1;
  const q = [n];
  const ch = Array.from({ length: 10001 }, () => 0);
  const l = Array.from({ length: 10001 }, () => 0);
  ch[n] = 1;
  l[n] = 0;
  while (true) {
    const cur = q.shift();

    // answer++;
    // if (cur === m) {
    //   // let c = 0;
    //   // while (Math.pow(3, c) < answer) {
    //   //   c++;
    //   // }
    //   return c;
    // }

    for (const n of [cur - 1, cur + 1, cur + 5]) {
      if (n >= 0 && n < 10001 && ch[n] === 0) {
        if (n === m) return l[cur] + 1;
        ch[n] = 1;
        q.push(n);
        l[n] = l[cur] + 1;
      }
    }
  }
}

console.log(solution(5, 14));
