/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length===1) return nums[0]
    let list = [nums[0]]
    for(let i = 1; i < nums.length; i++) {
        list[i] = nums[i] > (list[i-1] + nums[i]) ? nums[i] : (list[i-1] + nums[i])
    }
    return Math.max(...list)
};

// 解题思路
// 新建一个数组list，用来存储对应位置为终点的最大子序和。最终返回此数组最大值