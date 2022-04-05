const { log } = console;

// 약수의 개수와 덧셈
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let temp = [];

    for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        if (temp.includes(j)) continue;
        temp.push(j);
        if (temp.includes(i / j)) continue;
        temp.push(i / j);
      }
    }
    answer += temp.length % 2 ? -i : i;
    temp = [];
  }
  return answer;
}

console.log(solution(13, 17));
console.log(solution(24, 27));
console.log(solution(10, 999));
