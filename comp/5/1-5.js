function solution(m, arr) {
  
  let sum = 0, max = 0;
  // for(let lp = 0; lp < arr.length-m; lp++) {
  //   let i = 0;
  //   while(i < m) {
  //     max += arr[lp+i];
  //     i++
  //   }
  //   if( sum < max) sum = max;
  //   max = 0;
  // }


  for( let i = 0; i < arr.length; i++) {
    if (i < m) sum += arr[i];
    else {
      sum += (arr[i] - arr[i-m])
      max = Math.max(sum, max) 
    }

  }

  return max
}
let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));