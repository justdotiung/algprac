function solution(n) {
  const dy = Array.from({ length: n }, () => 0);
  dy[1] = 1;
  dy[2] = 2;

  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  console.log(dy);

  const step = [1, 2];

  let count = 0;
  const recu = (_) => {
    if (n < _) return;
    if (n === _) {
      count++;
    }
    recu(_ + step[0]);
    recu(_ + step[1]);
  };

  recu(0);
  return count;
}

console.log(solution(7));
