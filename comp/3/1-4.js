function solution(str, s) {
  console.time("v");
  const aa = [];
  let k = 1000,
    j = 1000;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === s) {
      k = 0;
      aa.push(k);
      continue;
    }
    aa.push(++k);
  }

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === s) {
      j = 0;
      aa[i] = Math.min(j, aa[i]);
      continue;
    }
    aa[i] = Math.min(++j, aa[i]);
  }

  console.timeEnd("v");
  console.log(aa);
}

let str = "abceleeacode";
console.log(solution(str, "e"));
