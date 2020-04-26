/**
3.最大子序和
 */
var maxSubArray = function (nums) {
    let ans = nums[0];
    let sum = 0;
    return nums.reduce((accumulator, currentValue, currentIndex, array) => {
        if (sum > 0) {
            sum += currentValue;
        } else {
            sum = currentValue;
        }
        ans = Math.max(ans, sum);

        return ans;
    }, ans)
};

// 解题思路
/*
我看到题目就想到应该是数组循环遍历处理，考察的是数组累加/乘/除，然后从数组中找到最大值

*/


