function solution(a,b) {
  let s = [];
  for( let i = 0; i < a; i++) s.push(i+1);

  while(s.length > 1) {
    for(let i = 1; i < b; i++)s.push(s.shift());    
    s.shift()
  }

  return s[0];
}
console.log(solution(8, 3));