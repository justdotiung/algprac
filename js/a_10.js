const { log } = console;

// 예상 대진표
function solution(n, a, b) {
  if (a % 2 === 1 && a + 1 === b) {
    return 1;
  }

  let c = n / 2;

  if (a > c && b > c) {
    return solution(c, a - c, b - c);
  }

  if (a <= c && b <= c) {
    return solution(c, a, b);
  }

  if ((a <= c && b > c) || (a > c && b <= c)) {
    return Math.log(n) / Math.log(2);
  }
}

log(solution(8, 8, 7));
