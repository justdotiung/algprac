function solution(a, b) {
  let answer = 0;
  let str = "";
  let l = a.length;
  for (let i = 0; i < l; i++) {
    if (i < b.length) {
      str += a[i];
      continue;
    } else {
      //여기서 작업

      // 그후에 붙여준다.

      console.log(str, "befroe");
      str = str.slice(1) + a[i];
      console.log(str);
    }
  }
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
