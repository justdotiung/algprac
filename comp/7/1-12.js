function count(d, arr){
  
  let ep = arr[0], count = 1;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i]-ep >= d) {
      count++;
      ep = arr[i];
    }
  }
  return count;
}

function solution(h, arr) {
  arr.sort((a,b) => a-b);
  let lt = 1;
  let rt = arr[arr.length - 1];
  let answer = 0;
  while(lt <= rt) {
    const mid = parseInt((lt+rt) / 2);
    if(count(mid, arr) >= h) {
      answer = mid;
      lt += 1;
    }else
     rt = mid-1;
  }

  return answer
}

let arr=[1, 2, 8, 4, 9];
console.log(solution(3, arr));