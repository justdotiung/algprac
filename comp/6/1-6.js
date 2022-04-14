function solution(a,b) {
  a = a.split("")
  let c = a.shift();
  for(const p of b) {
    if(p===c) {
       if( a.length === 0) return "YES"
       c = a.shift();
     }
  }
  return "NO"
}
let a="CBA";
let b="CDBAGE";
console.log(solution(a, b));