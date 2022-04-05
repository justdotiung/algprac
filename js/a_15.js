const { log } = console;

//소수찾기
function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === "0") continue;
    arr.push(numbers[i]);
    recur(arr, numbers.slice[i]);
  }
  var answer = 0;
  return answer;
}


log(solution(10, 2));
log(solution(8, 1));
log(solution(24, 24));
