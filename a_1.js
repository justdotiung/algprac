// 내적
function solution1(a, b) {
  return a.reduce((a, c, i) => {
    return (a += c * b[i]);
  }, 0);
}

console.log(solution1([1, 2, 3, 4], [-3, -1, 0, 2]));
