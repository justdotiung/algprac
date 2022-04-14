function solution(a, b) {
  let s = [];
  let an = 0;
  for(let i = 0; i < b.length; i++) {
    let x = b[i] -1
    for(let j = 0; j < a.length; j++) {
      if(a[j][x] ===0) continue
      if(s.length> 0 && s[s.length - 1] === a[j][x]){
        s.pop()
        an+=2;
      }
      else {
        s.push(a[j][x])
      }
      a[j][x] = 0;
      break;
    }
  }
  return an;
}


let a=[
  [0, 0, 0, 0, 0],
 [2, 0, 1, 0, 3],
  [2, 2, 5, 0, 1], 
  [4, 2, 4, 4, 2], 
  [4, 5, 1, 3, 1]
];

let b=[1, 1, 1, 1, 1];
console.log(solution(a, b));

// let a=[[0,0,0,0,0],
// [0,0,1,0,3],
// [0,2,5,0,1],
// [4,2,4,4,2],
// [3,5,1,3,1]];

// let b=[1, 5, 3, 5, 1, 2, 1, 4];
// console.log(solution(a, b));