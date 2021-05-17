// 소수 만들기.
function solution(nums) {
  let arr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let num = nums[k] + nums[i] + nums[j];
        arr.push(num);
      }
    }
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let bP = true;
    for (let j = 2; j * j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        bP = false;
      }
    }
    bP ? count++ : count;
  }

  return count;
}

console.log(solution([1, 2, 7, 6, 4]));
