function solution(n) {
  let answer ="";
  const  recu = (n) => {
    if(n === 0) return console.log("마지막 조건레벨까지 도달했으니 \ncallstack 이후 라인으로 복귀중..");
    console.log(n%2);
    recu(parseInt(n/2))
    console.log(n%2);
    answer += n%2
  };

  recu(n)
  return answer  
} 


console.log(solution(11));