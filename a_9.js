const { log } = console;

// 문자열 압축
// function solution(s) {
//   let c = 0;
//   let en = "";
//   let t = s.slice(0, 1);
//   for (let i = 0; i < s.length; i++) {
//     if (s.slice(i, i + 1) === t) {
//       c++;
//       if (i === s.length - 1) {
//         log(t);
//         en += `${c}${t}`;
//       }
//     } else if (s.slice(i, i + 1) !== t) {
//       en += c === 1 ? `${t}` : `${c}${t}`;
//       t = s.slice(i, i + 1);
//       log(t);
//       c = 1;
//     }
//   }

//   return en;
// }
function solution(s) {
  if (s.length === 1) return 1;
  let arr = [];
  for (let i = 1; i <= s.length / 2; i++) {
    arr.push(encode(s, i));
  }

  return Math.min(...arr);
  // return arr;

  function encode(s, limit) {
    let i = -1;
    let o = limit;
    let l = (l2 = o);
    let c = "";
    let en = "";
    let n = 1;
    let answer = "";
    while (++i < s.length) {
      if (l) {
        l--;
        c += s[i];
        continue;
      }

      if (l2) {
        l2--;
        en += s[i];
      }

      if (l2 === 0) {
        if (c === en) {
          l2 = o;
          en = "";
          n++;
        } else {
          answer += n == 1 ? `${c}` : `${n}${c}`;
          c = en;
          en = "";
          l2 = o;
          n = 1;
        }
        if (i === s.length - 1) {
          answer += n == 1 ? `${c}` : `${n}${c}`;
          break;
        }
      }
      if (i === s.length - 1) {
        answer += n == 1 ? `${c}${en}` : `${n}${c}${en}`;
      }
    }
    return answer.length;
  }
}

log(solution("aabbacc"));
log(solution("ababcdcdababcdcd"));
log(solution("abcabcdede"));
log(solution("abcabcabcabcdededededede"));
log(solution("xababcdcdababcdcd"));
log(solution("xxxxxxxxxxyyy"));
log(solution("bbaabaaaab"));
log(solution("zzzbbabbabba"));
log(
  solution(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  )
);
log(solution("a"));
