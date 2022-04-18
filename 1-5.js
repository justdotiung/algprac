function solution(size, arr){
  const answer = new Array(size).fill(0);
for(let i = 0; i < arr.length; i++) {
  let key = arr[i], j, idx =-1;
  for (let k = idx; k >= 0; k--) {
    if(answer[k] === key) idx = k;
  }
  if(idx !== -1) {
    for(j = idx-1; j>=0; j--) {
        if(j < answer.length-1) {
          answer[j+1] = answer[j];
        }
      }
  }
  else {
    for(j = size-1; j>=0; j--) {
      if(j < answer.length-1) {
          answer[j+1] = answer[j];
        }
    }
  }
  answer[0] = key;
}
  return answer;
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7,0];
console.log(solution(5, arr));