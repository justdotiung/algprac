function solution(a, b) {
  const map = {};
  for (const p of b) {
    map[p] = map[p] ? ++map[p] : 1;
  }

  for (const p of a) {
    if (!map[p] || map[p] === 0) return "NO";
    map[p] = --map[p];
  }

  for (const p in map) {
    if (map[p] > 0) return "NO";
  }

  return "YES";
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b));
// let a = "abaCC";
// let b = "Caaab";
// console.log(solution(a, b));
