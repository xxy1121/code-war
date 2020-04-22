/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) nums[0];
  var maxSum = nums[0];
  for (var i = 1; i < nums.length; i++) {
    nums[i] = 0 > nums[i - 1] ? nums[i] : nums[i - 1] + nums[i];
    maxSum = nums[i] > maxSum ? nums[i] : maxSum;
  }
  return maxSum;
};

// 解题思路
/**
 * 1. 设定一个变量为最大子序和maxSum 为 数组第一个，设定第一个历史累加最大和初始值为num[0]为初始值，
 * 2. 使用for循环， 历史和不断与num[i]累加，若历史最大值小于零则弃用，则使用nums[i]为历史最大值初始值
 * 3. 最后最大值和当前累加值比较，取最大值，最后数组循环完，最大序数和求出
 */
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点