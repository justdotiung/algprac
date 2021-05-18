const { log } = console;

// 로또의 최고 순위와 최저 순위
function solution(lottos, win_nums) {
  const condition = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  const hiden = lottos.filter((n) => [0].includes(n)).length;
  const min = lottos.reduce((a, c) => (win_nums.includes(c) ? (a += 1) : a), 0);

  return hiden === 6 ? [1, 6] : [condition[hiden + min], condition[min]];
}

log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
log(solution([45, 4, 35, 20, 3, 9], [1, 2, 7, 8, 10, 11]));
