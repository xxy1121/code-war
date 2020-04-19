/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    nums[i] += Math.max(nums[i - 1], 0);
    max = Math.max(nums[i], max);
  }
  return max;
};

// 解题思路
// 这个题目是一个典型的 DP 问题，，所以有三个关键点找出
// 1. 子问题 max_sum(i) = Max(max_sum(i - 1), 0) + arr[i]
// 2. 状态定义 dp[i]
// 3. DP 方程 dp[i] = Max(dp[i - 1], 0) + arr[i]
