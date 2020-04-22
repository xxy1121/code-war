/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  for(var i = 1; i < nums.length; i++) {
    nums[i] = nums[i - 1] > 0 ? nums[i] + nums[i - 1] : nums[i]
  }
  return Math.max(...nums)
};

// 解题思路
// 借用了一个老哥的思路，其实就是如果前 n 项结果为正，将第 n 项作为前 n 项的和；如果前 n 项结果为负，第 n 项不变
