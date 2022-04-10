function solution(l, k, arr) {
  const answer = 0;
  const c = new Set();
  // const c = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      for (let j = k + 1; j < arr.length; j++) {
        let a = arr[i] + arr[k] + arr[j];
        c.add(a);
        // if (!c.includes(a)) c.push(a);
      }
    }
  }
  return [...c].sort((a, b) => b - a)[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
