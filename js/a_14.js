const { log } = console;

//카펫
function solution(brown, yellow) {
  const l = Math.floor(Math.sqrt(yellow));
  for (let i = 1; i <= l; i++) {
    if (yellow % i === 0) {
      if (i * 2 + (yellow / i) * 2 + 4 === brown) {
        return [
          Math.max(i + 2, yellow / i + 2),
          Math.min(i + 2, yellow / i + 2),
        ];
      }
    }
  }
}

log(solution(10, 2));
log(solution(8, 1));
log(solution(24, 24));
