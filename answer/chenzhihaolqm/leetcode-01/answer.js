/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = maxSubArray(nums) {
    let n = nums.length;
    let currSum = nums[0], maxSum = nums[0];

    for(let i = 1; i < n; ++i) {
      currSum = Math.max(nums[i], currSum + nums[i]);
      maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
  }
var maxSubArray = maxSubArray(nums) {
    let n = nums.length, maxSum = nums[0];
    for(let i = 1; i < n; ++i) {
      if (nums[i - 1] > 0) nums[i] += nums[i - 1];
      maxSum = Math.max(nums[i], maxSum);
    }
    return maxSum;
  }

// 解题思路
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
// 贪心算法， 动态规划