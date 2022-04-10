function solution(arr, target) {
  let answer = 0;

  const leng = arr.length;
  search(arr, 0, -1, 0);

  function search(arr, sum, l) {
    if (l >= leng - 1) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    l++;
    search(arr, sum + arr[l], l);
    search(arr, sum - arr[l], l);
  }
  return answer;
}
const a = [4, 1, 2, 1];
console.log(solution(a, 4));
