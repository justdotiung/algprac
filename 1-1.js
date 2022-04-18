function solution(arr) {

  for(let i = 0; i < arr.length-1; i++ ) {
    let min = i;
    for(let j = i+1 ; j < arr.length; j++){
      if(arr[min] > arr[j]) min = j;
    }
    
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }     

  return arr;
}
let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));