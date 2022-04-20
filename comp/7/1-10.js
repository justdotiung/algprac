function solution(m, arr){
  arr.sort((a,b) => a-b);
  console.log(search(0, arr.length -1, arr, m)); 
  let lt = 0, rt = arr.length - 1;
  while(lt <= rt) {
    const mid = parseInt((lt+rt) /2);
    if(arr[mid] === m) return mid+1;
    if(arr[mid] > m ) rt = mid -1;
    else lt = mid + 1
  }


}

function search(l, r, arr,m) {
  if(l <= r) return;
  const mid = parseInt((l+r)/2)
  if(arr[mid]=== m)   return mid+1;
  if(arr[mid] > m) 
    return search(l, mid-1, arr, m);
  else 
    return search(mid+1, r, arr, m);
  
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));