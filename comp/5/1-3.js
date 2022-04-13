function solution(m, arr) {
  
  let answer = 0;

  let lp = 0, rp = 0, sum = 0 ; 
  while(rp <= arr.length) {
    
    if(sum === m) {
      answer++
      sum -= arr[lp++];
    }
    else if (sum > m) {
      sum -= arr[lp++]; 
    }
    else if(sum < m){
      sum += arr[rp++];
    }
  }


  // let i = 0;
  // while(i < arr.length) {
  //   let p = arr[i++];
  //   for(let j = i; j < arr.length; j++) {
  //     p+= arr[j];
  //     if (p > m) break;
  //     if (p === m){
  //       answer++
  //       break;
  //     } 
  //   }
  // }
  return answer
}
let a=[1,1,1];
console.log(solution(2, a));
let b=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, b));