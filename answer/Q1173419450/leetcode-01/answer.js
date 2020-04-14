/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let ans = nums[0];
  let sum = 0;

  for (let num of nums) {
    if (sum > 0) {
      sum += num
    }else {
      sum = num;
    }
    // 推算当前最优解
    ans = Math.max(ans, sum)
  }
  return ans;
};
let arr = [-1, 0, -2, -5, -7];
// let arr = [-2,1,-3,4,-1,2,1,-5,4];
let result = maxSubArray(arr)
console.log(result);

// 解题思路
// 考查的是贪心算法知识点，通过循环比较出当前最优的和sum
// 时间复杂度 O(N)、空间复杂度 O(1)
