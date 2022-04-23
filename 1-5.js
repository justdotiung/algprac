function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let c =0;
  const ch = Array.from({length: arr.length}, () => 0)
  function dfs(n) {
    if(flag) return;
    if(n === arr.length ) {
      let a = 0;
      let b = 0;
      for(let i = 0; i < ch.length; i++) {
        if(ch[i] === 1) {
          a+= arr[i]
        }
        else if(ch[i] === 0 ){
          b+=arr[i]
        }
      }
      c++;
      if( b === a) {
        flag = 1;
        answer ="YES"
      }
      return;
    }
    ch[n]=0
    dfs(n+1)
    ch[n]=1
    dfs(n+1)
  }
  dfs(0);
  console.log(c)
  return answer
} 
 

    let arr = [1, 3, 5, 6, 7, 10];
    console.log(solution(arr));