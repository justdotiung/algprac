function solution(a, b) {
  const WINNER = {
    11: "D",
    12: "B",
    13: "A",
    21: "A",
    22: "D",
    23: "B",
    31: "B",
    32: "A",
    33: "D",
  };

  let answer = [];
  for (let i = 0; i < a.length; i++) {
    answer.push(WINNER[a[i] + "" + b[i]]);
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
