function solution(info, query) {
  var answer = [];

  const l = query.length;
  for (let i = 0; i < l; i++) {
    let c = query[i].split(" ");
    let a = [];
    for (let j = 0; j < c.length; j++) {
      if (c[j] === "and" || c[j] === "-") continue;
      for (let k = 0; k < info.length; k++) {
        if (j >= c.length - 1) {
          // console.log(a, c[j]);
          a = a.filter((s) => {
            ss = s.split(" ");
            return ss[ss.length - 1] >= parseInt(c[j]);
          });

          continue;
        }
        if (j > 0) {
          console.log(a, c[j]);
          a = a.filter((s) => s.indexOf(c[j]));
          continue;
        }
        // if (a.length > 0) {
        //   continue;
        // }
        if (info[k].indexOf(c[j]) > -1) a.push(info[k]);
        else continue;
      }
    }
    answer.push(a.length);
    a = [];
  }

  return answer;
}
console.log(
  solution(
    [
      "java backend junior pizza 150",
      "python frontend senior chicken 210",
      "python frontend senior chicken 150",
      "cpp backend senior pizza 260",
      "java backend junior chicken 80",
      "python backend senior chicken 50",
    ],
    [
      "java and backend and junior and pizza 100",
      "python and frontend and senior and chicken 200",
      "cpp and - and senior and pizza 250",
      "- and backend and senior and - 150",
      "- and - and - and chicken 100",
      "- and - and - and - 150",
    ]
  )
);
// console.log(
//   solution(3, 3, [
//     [1, 1, 2, 2],
//     [1, 2, 2, 3],
//     [2, 1, 3, 2],
//     [2, 2, 3, 3],
//   ])
// );
