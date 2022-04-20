function solution(arr) {
  for(let j = 0; j < arr.length-1; j++) {
    for(let i = 0; i < arr.length-1 -j; i++ ) {
      if(arr[i] >arr[i+1]) {
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
      }
    }
  }
  return arr;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));