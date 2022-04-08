function solution(str) {
  const b =
    str.toLowerCase() === str.split("").reverse().join("").toLowerCase();

  return b ? "YES" : "NO";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
