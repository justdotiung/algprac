function solution(arr) {
  const dy = Array.from({ length: arr.length }, () => 0);
  for (let i = 0; i < arr.length; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j] && max < dy[j]) {
        max = dy[j];
      }
    }
    dy[i] = max + 1;
  }

  console.log(dy);
  return Math.max(...dy);
}

let arr = [2, 7, 5, 8, 6, 4, 7, 12, 3];
console.log(solution(arr));
