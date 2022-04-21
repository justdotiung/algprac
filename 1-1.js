function solution(n) {
  const  recu = (o = 1, arr=[]) => {
    if(o > n) return console.log("어짜피복귀주로를 향해 복귀해야함");
    arr.push(o);
    console.log(o) 
    recu(o+1, arr)
    console.log(o) 
    return arr
  };


  return recu()  
} 


console.log(solution(3));