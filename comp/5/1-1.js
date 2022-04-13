function solution(a, b) {
  const l1 = a.length;
  const l2 = b.length;

  let p1 = 0,
    p2 = 0;
  const answer = [];
  while (l1 > p1 && l2 > p2) {
    if (a[p1] < b[p2]) answer.push(a[p1++]);
    else answer.push(b[p2++]);
  }

  while (l1 > p1) answer.push(a[p1++]);
  while (l2 > p2) answer.push(b[p2++]);

  return answer;
  //  return a.concat(b).sort((a, b) => a - b);
}
let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
