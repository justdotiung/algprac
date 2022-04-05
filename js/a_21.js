//2019 튜플
function solution(s) {
  let arr = s.match(/({(\d+)}|{(\d+,)+\d+})/g);
  let map = {};
  console.log(arr);
  for (const a of arr) {
    let arr = a.match(/\d+/g);
    for (const a of arr) {
      map[a] = ++map[a] || 1;
    }
  }
  let a = [],
    b = [];
  console.log(map);
  for (const p in map) {
    a.push(map[p]);
  }
  a.sort((a, b) => b - a);

  for (let i = 0; i < a.length; i++) {
    for (const p in map) {
      if (a[i] === Number(map[p])) b.push(Number(p));
    }
  }
  return b;
}

// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
console.log(solution("{{20,111},{111}}"));

//{{1,2,3},{2,1},{1,2,4,3},{2}}
