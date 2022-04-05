const { log } = console;

// 짝지어 제거하기
function solution(s) {
  let a = [];
  for (let i = 0; i < s.length; i++) {
    if (i > 0) {
      if (a[a.length - 1] === s[i]) {
        a.pop();
        continue;
      }
    }
    a.push(s[i]);
  }
  return a.length > 0 ? 0 : 1;
}

log(solution("baabaa"));
log(solution("cdcd"));
