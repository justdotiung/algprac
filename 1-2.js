function solution(a, b) {
  a.sort((a,b) => a-b)
  b.sort((a,b) => a-b)

  // 다른답
  let k = l = 0;
  const answer = [];
  while(k < a.length && l < b.length) {
    console.log(k, l)
    if(a[k] === b[l]) {
      answer.push(a[k++]);
      l++;
      continue;
    }

    if(a[k] < b[l]) k++;
    else l++;
  }

  // return a.filter(a => b.indexOf(a) > -1);
  return answer;

}
    let a=[1, 3, 9, 5, 2];
            let b=[3, 2, 5, 7, 8, 1, 9];
            console.log(solution(a, b));