function solution(arr) {
  let answer = 0;
  let s = 1;
  for (const a of arr) {
    if (a === 1) {
      answer += s;
      s++;
    } else s = 1;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
