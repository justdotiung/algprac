function solution(arr){
  const answer = [];
  [...arr].sort((a,b) => a-b).forEach((v,i)=>{
    console.log(v, arr[i])
    if(v !== arr[i]) answer.push(i+1)
  })



  return answer;
}

let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
// let arr=[120, 130, 150, 150, 130, 150];
console.log(solution(arr));