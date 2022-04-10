function solution(n, arr) {
  let max = 0,
    b = 0,
    c = 0;
  for (let i = 0; i < arr.length; i++) {
    b = arr[i]
      .toString()
      .split("")
      .reduce((a, b) => parseInt(a) + parseInt(b), 0);

    if (max <= b) {
      max = b;
      if (c < arr[i]) c = arr[i];
    }
  }

  return c;
}

let arr = [128, 460, 603, 40, 521, 137, 123, 2355, 12345];
console.log(solution(7, arr));
