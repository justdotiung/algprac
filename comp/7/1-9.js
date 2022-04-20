function solution(arr){
  let answer = 0;
  let count =0;
  const t = [];
  
  arr.forEach(a => {
    t.push([a[0], 's'])
    t.push([a[1], 'e'])
  });

  t.sort((a,b) => {
    if(a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    return a[0] - b[0]
  })

  t.forEach(a => {
    if(a[1] === 's') count++;
    else count--;
    answer = Math.max(answer, count);
  })

  return answer;
}

// let arr=[[1, 4], [2, 3], [3, 5], [4, 6], [5, 7],[4,4], [6,9]];
// let arr=[[3, 3],
//   [1, 3],
//   [2, 3]
//   ];
// let arr=[[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
let arr=[[14, 18], [13, 16], [3, 20], [1,6], [12, 15],[12, 14], [15, 20], [20, 30], [5, 14]];
console.log(solution(arr));