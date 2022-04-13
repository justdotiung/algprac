function solution(a, b) {
  let answer = 0;
  let l = a.length;
  let r = b.length;

  const map = new Map();
  const map2 = new Map();

  for(const s of b) {
    map.set(s, map.get(s)+1 || 1);
  }
 
  
  for (let i = 0; i < l; i++) {
    map2.set(a[i], map2.get(a[i]+1)|| 1);
    if(i >= 2) {
      if(map.size !== map2.size) continue;
      if([...map.keys()].every(k => map2.get(k)===1)) answer++;
      map2.set(a[i-r+1],map2.get(a[i-r+1])-1 );
      if(map2.get(a[i-r+1]) === 0) map2.delete(a[i-r+1])
   }
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));


function solution2(s, t){
    let answer=0;
    let sH = new Map();
    for(let x of t){
        sH.set(x, (sH.get(x) || 0)-1);
    }
    let len=t.length-1;
    for(let i=0; i<len; i++){
        sH.set(s[i], (sH.get(s[i]) || 0)+1);
        if(sH.get(s[i])===0) sH.delete(s[i]);
    }
    let lt=0;
    for(let rt=len; rt<s.length; rt++){
      sH.set(s[rt], (sH.get(s[rt]) || 0)+1);
      if(sH.get(s[rt])===0) sH.delete(s[rt]);
      if(sH.size===0) answer++;
      console.log(sH,lt)
      sH.set(s[lt], (sH.get(s[lt]) || 0)-1);
      console.log(sH)
        if(sH.get(s[lt])===0) sH.delete(s[lt]);
        lt++;
    }
    return answer;
}
console.log(solution2("bacacbcba", "abc"));