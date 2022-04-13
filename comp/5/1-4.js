function solution(m, arr) {
  
  let answer = 0;
  let lp = 0, sum = 0;
  for(let rp= 0; rp < arr.length; rp++) {
    sum += arr[rp];
    while(sum > m){
      sum -= arr[lp++];
    }
    answer+= (rp-lp+1);
  }

  return answer
}
let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));
// let a=[10, 5, 2, 6];
// console.log(solution(100, a));