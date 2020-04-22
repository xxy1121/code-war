/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
      // 非空判断
      if (!nums.length) {
        return
    }
    let maxEnding = nums[0]
    let maxSofar = nums[0]
    for (let i = 1; i < nums.length; i ++ ) {
        maxEnding = Math.max ( nums[i], maxEnding + nums[i])
        maxSofar = Math.max ( maxSofar, maxEnding)
    }
    return maxSofar
};

// 解题思路
// 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出