function solution(arr){
  arr.sort((a,b) =>  a[1]-b[1]).sort((a,b) =>  a[0]-b[0] )
  console.log(arr)
  let answer =1;
  let end = arr[0][1]
  for(let i = 1; i < arr.length; i++) {
    if(end <= arr[i][0]) {
      end = arr[i][1];
      answer++;
    }
  }
  return answer;
}

// let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7],[4,4], [6,9]];
// let arr=[[3, 3],
//   [1, 3],
//   [2, 3]
//   ];
let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));