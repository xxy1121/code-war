/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    return nums.reduce((result, _, i) => {
        if (i === 0) {
            return nums[i];
        }
        nums[i] = Math.max(nums[i - 1], 0) + nums[i];
        return Math.max(result, nums[i]);
    });
};

// 解题思路
/**
 * 思路：动态规划
 * 平凡解：当数组只有一个元素时，[0]的元素就是当前数组的最大子序和
 * 推导：nums[i]最大子序和等于MAX(nums[i-1]最大子序和, 0) + nums[i]
 * 解法: 用[0...i]最大子序和跟nums[i]最大子序和相比较，胜出者成为新的[0...i]的最大子序和
 * 估算：一次数组扫描，时间复杂度 O(n)；没有申请新的内存空间，空间复杂度 O(1)
 */