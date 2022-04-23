function solution(n, m) {
  let answer = 0;

  function recu(l, c) {
    if (c === m) {
      console.log(l);
      return;
    }
    for (let i = 1; i < n + 1; i++) {
      recu(l + i, c + 1);
    }
  }

  recu("", 0);
  return answer;
}
console.log(solution(4, 3));
