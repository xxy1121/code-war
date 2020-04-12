/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0],
        max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        ans = Math.max(nums[i] + ans, nums[i]);
        nums[i] = ans;
        max = Math.max(ans, max);
    }
    return max;
};

// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
/**
 * 思路：动态规划
 * 1. 首先拆解问题，找到子问题。
 * 2. dp[i]表示nums中以nums[i]结尾的最大子序和
 * 3. dp[i] = max(dp[i-1] + nums[i], nums[i])
 * 4. 那么我们就可以线性遍历数组(可以直接修改nums数组作为dp表，减少空间复杂度)，获取dp表，并在每次遍历中，获取dp表中当前最大值
 * 5. 遍历完成后，我们就可以拿到dp表中最大值。也就是我们想要结果
 */