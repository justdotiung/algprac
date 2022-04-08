function solution(str) {
  let answer = "";
  let n = 1;
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      answer += str[i];
      continue;
    }

    if (str[i] !== str[i - 1]) {
      if (n > 1) answer += n;

      answer += str[i];
      n = 1;
    } else {
      n++;
    }
  }

  return answer;
}

let str = "KHHSSSSSSSEAAS";
console.log(solution(str));
