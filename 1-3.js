function solution(arr) {
  for( let i = 0; i < arr.length-1; i++) {
    for( let j = 0; j < arr.length-1 -i; j++) {
      if(arr[j+1] < 0 && arr[j] > 0) {
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp
      } 
    }
  }
  
  return arr;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));