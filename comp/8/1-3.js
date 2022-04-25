function solution(n) {
  const f = []
  const m = []
  const la = [];
  function a(l, n) {
    if(l > 3) return console.log("돌아가는 중" );
    f.push(n)
    a(l + 1, 2 * n)
    m.push(n)
    a(l + 1, (2 * n)+1)
    la.push(n)

  }

  a(1, 1)
  console.log(f)
  console.log(m)
  console.log(la) 

} 
 


console.log(solution(1));