function solution(str) {
  const t = str.toLowerCase().replace(/[^a-z]/g, "");
  console.log(t);
  return t.split("").reverse().join("") === t ? "YES" : "NO";
  const arr = str.split(" ");

  for (let i = 0; i < arr.length / 2; i++) {
    if (
      arr[i].replace(/[^a-zA-Z]/g, "").toLowerCase() !==
      arr[arr.length - i - 1]
        .replace(/[^a-zA-Z]/g, "")
        .split("")
        .reverse()
        .join("")
        .toLowerCase()
    ) {
      console.log(arr[i].replace(/[^a-zA-Z]/g, "").toLowerCase());
      return "NO";
    }
  }
  return "YES";
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
