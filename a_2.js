// 포켓몬
function solution(nums) {
  let max = nums.length / 2;
  let count = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!arr.includes(nums[i])) {
      arr.push(nums[i]);
      count++;
    }
  }
  return max <= count ? max : count;
}

function solution2(nums) {
  set = new Set(nums);

  return Math.min(set.size, nums.length);
}

console.log(solution2([3, 3, 3, 2, 2, 4]));
