function solution(arr) {
  let a = Array(arr.length).fill(1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) a[j]++;
    }
  }

  return a;
  // const g = arr.filter((a, i) => arr.indexOf(a) === i).sort((a, b) => b - a);
  // return arr.map((a) => g.indexOf(a) + 1);
}

let arr = [92, 92, 81, 100, 76];
console.log(solution(arr));
