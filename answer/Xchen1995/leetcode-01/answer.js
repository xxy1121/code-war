/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums.length) {
        return
    }
    let currentNumMax = nums[0]
    let totalNumMax = nums[0]
    for(let index = 1; index < nums.length; ++index){
        currentNumMax = Math.max(currentNumMax + nums[index], nums[index])
        totalNumMax = Math.max(currentNumMax, totalNumMax)
    }
    return totalNumMax
};


// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点