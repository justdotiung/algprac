const { log } = console;

// [카카오 인턴] 키패드 누르기
function solution(numbers, hand) {
  const L = [1, 4, 7];
  const R = [3, 6, 9];

  const keyboard = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["#", 0, "*"],
  ];

  function find(v) {
    for (let i = 0; i < keyboard.length; i++) {
      for (let j = 0; j < keyboard[i].length; j++) {
        if (keyboard[i][j] === v) return { x: j, y: i };
      }
    }
  }

  let l = { x: 0, y: 3 };
  let r = { x: 2, y: 3 };
  let answer = "";
  numbers.map((v) => {
    if (L.includes(v)) {
      l = find(v);
      return (answer += "L");
    }
    if (R.includes(v)) {
      r = find(v);
      return (answer += "R");
    }
    if (!l && !r) {
      return (answer += hand === "right" ? "R" : "L");
    }
    const pos = find(v);

    const pr = Math.abs(pos.x - r.x) + Math.abs(pos.y - r.y);
    const pl = Math.abs(pos.x - l.x) + Math.abs(pos.y - l.y);

    if (pr === pl) {
      hand === "right" ? (r = pos) : (l = pos);
      return (answer += hand === "right" ? "R" : "L");
    }
    if (pr > pl) {
      l = pos;
      return (answer += "L");
    }
    r = pos;
    return (answer += "R");
  });

  return answer;
}

// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right"));
