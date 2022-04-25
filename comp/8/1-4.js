function solution(n) {

  //[0,0,0,0]
  const ch = Array.from({length: 4}, () => 0)
  const answer = [];

  function dfs(v) {
    if(v >= n+1) {
      let temp = "";
      for(let i = 0; i < ch.length; i++) {
        if(ch[i] === 1) temp += i
      }
      if(temp.length > 0)
      answer.push(temp)
      return;
    }
    ch[v] = 1;
    dfs(v+1)
    ch[v] = 0;
    dfs(v+1)
  }

  dfs(1);
  return answer
} 
 


console.log(solution(3));