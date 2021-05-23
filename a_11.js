const { log } = console;

// 메뉴 리뉴얼
function solution(orders, course) {
  orders = orders.map((manu) =>
    manu
      .split("")
      .sort()
      .reduce((a, b) => a + b)
  );

  log(orders);
  // let t = [];
  // for (let i = 0; i < orders.length; i++) {
  //   let map = {};
  //   for (let j = 0; j < orders[i].length; j++) {
  //     map[orders[i][j]] = 0;
  //   }

  //   t.push(map);
  // }

  // for (let i = 0; i < orders.length; i++) {
  //   for (let j = 0; j < orders.length; j++) {
  //     if (i === j) continue;
  //     for (let k = 0; k < orders[j].length; k++) {
  //       if (orders[j][k] in t[i]) {
  //         t[i][orders[j][k]] = t[i][orders[j][k]] + 1;
  //       }
  //     }
  //   }
  // }

  // log(t);
}
log(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]));
log(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]));
log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4]));
