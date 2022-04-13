function solution() {
  const c = []
  for(const p of a ){ 
    if(p === "(") c.push(1)
    else {
      if(c.length <= 0) return "NO"
      c.pop();
    } 
  }

  return c.length === 0 ? "YES" : "NO"
}

let a="(()(()))(()";
console.log(solution(a));