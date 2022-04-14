function solution(str) {
  let answer = 0;
  let n = [];
  for(const s of str) {
    if(isNaN(Number(s))){
      const l =Number(n.pop());
      const f = n.length ===0 ? answer : Number(n.pop());
      switch(s) {
        case "*": answer = f * l
        break;
        case "-": answer = f - l
        break;
        case "+": answer = f + l
        break;
        case "/": answer = f / l
        break;
      }
    }
   else n.push(s);
 }
 return answer;
 


}


let str="352+*9-";
console.log(solution(str));