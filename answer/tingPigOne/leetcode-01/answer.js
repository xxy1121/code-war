/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        ans = Math.max(ans, nums);
    }
    return ans;
};

// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
/**
 * 动态规划思路较为简单(沿数组移动)
 * 明确目的：寻找子序列之和最大值（不要求返回子序列，目标子序列可能有多个）
 * 思路：
 * 初始化：当前子序列之和sum=0，最大子序列之和ans=nums[0];
 * 动态规划（沿数组移动）：
 * 遍历数组，若sum大于零，说明添加sum有增益效果，su+=nums[i],
 *  若sum不大于零，直接将sum赋值为nums[i],sum=nums[i](因为sum可能为0，因此最大和子序列可能有多个),
 *  比较当前子序列之和sum与当前最大子序列之和，取大者为当前最大子序列之和ans。
 * 返回ans
 */