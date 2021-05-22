const { log } = console;

// 
function solution(numbers, target) {
  const sum = numbers.reduce((a, c) => a + c);

  if ((sum - target) % 2) return 0;

  const n = (sum - target) / 2;
  let c = 0;
  let i = 0;
  // console.log(
  //   numbers.filter((v) => v <= n),
  //   n
  // );
  console.log(
    recur(
      numbers.filter((v) => v <= n),
      c,
      n,
      i
    )
  3);
  function recur(list, c, r, i) {
    if (i === list.length) {
      log(i, c);
      return c;
    }
    const rest = r - list[i];
    if (rest < 0) {
      console.log("rest");
      recur(list, c, r, ++i);
    }
    if (rest === 0) {
      c++;
      // console.log("next", list, c, r, ++i);
      recur(list, c, r, ++i);
    }
    list.splice(i, 1);
    console.log("innernext", c, r, i, list);
    recur(list, c, rest, i);
    // recur(list, c, r, ++i);
  }
}
// log(solution([1, 1, 1, 1, 1], 1));
log(solution([1, 3, 3, 4, 5], 10));
