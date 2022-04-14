function solution(a) {
  let answer  = 0;
  const s = [];
  for(let i = 0; i < a.length; i++) {
    if (a[i] === "(") {
      if(i - 1 >= 0 && a[i - 1] === ")") answer += s.length;
      answer++;
      s.push(a[i])
    }else {
      if(i - 1 >= 0 && a[i - 1] === ")") answer++;
      else  answer--;
      s.pop();
    }
  }
  console.log(s)
  return answer;
}

// let b="()(((()())(())()))(())";
// console.log(solution(b));

let b="(((()(()()))(())()))(()())()";
console.log(solution(b));
