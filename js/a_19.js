// 인접 위 아래 오른쪽 왼쪽
// 2차 배열의 현재의 위치(x,y) 에 상하좌우를 살펴 도형을 그린다.

function solution(gb, t) {
  let gbMap = {};
  let k = 0;
  let gbArr = [];

  let a = [];
  for (let i = 0; i < gb.length; i++) {
    let t = [];
    for (let j = 0; j < gb[i].length; j++) {
      t.push(false);
    }
    a.push(t);
  }

  for (let i = 0; i < gb.length; i++) {
    let t = [];
    for (let j = 0; j < gb[i].length; j++) {
      t.push(false);
    }
    a.push(t);
  }

  console.log(gb.slice());

  console.log(a);
  console.log(gb);
  // recu(0, 0, gb, a, []);

  console.log(gbArr);

  function recu(x, y, arr, route, rect) {
    for (let i = x; i < arr.length; i++) {
      for (let j = y; j < arr[i].length; j++) {
        if (arr[i][j] === 0) {
          rect.push({ x: i, y: j });
          if (i > 0 && arr[i - 1][j] === 0) {
            if (route[i][j]) return;
            route[i][j] = true;
            // console.log(route);
            i > 0 && recu(i - 1, j, arr, route, rect);
            j < arr[i].length - 1 && recu(i, j + 1, arr, route, rect);
            i < arr.length - 1 && recu(i + 1, j, arr, route, rect);
            j > 0 && recu(i, j - 1, arr, route, rect);
            // continue;
          }
          if (i < arr.length - 1 && arr[i + 1][j] === 0) {
            if (route[i][j]) return;
            route[i][j] = true;
            i > 0 && recu(i - 1, j, arr, route, rect);
            j < arr[i].length - 1 && recu(i, j + 1, arr, route, rect);
            i < arr.length - 1 && recu(i + 1, j, arr, route, rect);
            j > 0 && recu(i, j - 1, arr, route, rect);
            // continue;
          }
          if (j > 0 && arr[i][j - 1] === 0) {
            if (route[i][j]) return;
            route[i][j] = true;
            i > 0 && recu(i - 1, j, arr, route, rect);
            j < arr[i].length - 1 && recu(i, j + 1, arr, route, rect);
            i < arr.length - 1 && recu(i + 1, j, arr, route, rect);
            j > 0 && recu(i, j - 1, arr, route, rect);
            // continue;
          }
          if (j < arr[i].length - 1 && arr[i][j + 1] === 0) {
            // console.log(i, j, x, y, arr, route, rect);
            if (route[i][j]) return;
            route[i][j] = true;
            i > 0 && recu(i - 1, j, arr, route, rect);
            j < arr[i].length - 1 && recu(i, j + 1, arr, route, rect);
            i < arr.length - 1 && recu(i + 1, j, arr, route, rect);
            j > 0 && recu(i, j - 1, arr, route, rect);
            // continue;
          }
          console.log(1);
          i > 0 && recu(i - 1, j, arr, route, rect);
          j < arr[i].length - 1 && recu(i, j + 1, arr, route, rect);
          i < arr.length - 1 && recu(i + 1, j, arr, route, rect);
          j > 0 && recu(i, j - 1, arr, route, rect);
          // gbArr.push(...rect, { x: i, y: j });`
        }
      }
    }
  }

  function find(map, obj) {
    for (const k in map) {
      if (map[k].find((o) => o.x === obj.x && o.y === obj.y)) return map[k];
    }
  }

  var answer = -1;
  return answer;
}

solution(
  [
    [1, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 1],
    [1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0],
  ],
  [
    [1, 0, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 1],
    [0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0],
  ]
);
