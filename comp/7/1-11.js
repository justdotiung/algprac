function count(songs, capacity){
  let count = 1;
  let sum  = 0;
  for(let i = 0; i < songs.length; i++) {
    if(sum +songs[i]  > capacity) {
      sum = songs[i]
      count++;
    }
    else {
      sum+= songs[i];
    }
  }
  return count;
}

function solution(l, arr) {
  let lt = Math.min(...arr);
  let rt = 45;
  let answer = 0;
  while(lt <= rt) {
    const mid = parseInt((lt+rt) / 2);
    if(count(arr, mid) <= l) {
      answer = mid;
      rt = mid-1
    }
    else lt = mid+1
  }

  return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));