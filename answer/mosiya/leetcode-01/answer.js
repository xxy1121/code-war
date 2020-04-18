/**
 * @param {number[]} nums
 * @return {number}
 */
// 第一次的做法
var maxSubArray1 = function(nums) {
    let arr = []
    let sum = 0
    for(let i=0; i<nums.length; i++) {
        sum += nums[i]
        arr.push(sum)
        if(sum < 0) {
            sum = 0
        }
    }
    return Math.max(...arr)
};
// 动态规划算法
// 该算法由 Jay Kadane 于1984年最先提出，运用了动态规划的思想，因此也称该方法为 Kadane 算法。
var maxSubArray2 = function(nums) {
    let max = nums[0]
    let sum = 0
    for(let i of nums) {
        if(sum > 0) {
            sum += i
        } else {
            sum = i
        }
        max = Math.max(max, sum)
    }
    return max
};
// 省空间的做法
var maxSubArray3 = function(nums) {
    nums.forEach((item, index, arr) => {
        if(index > 0 && arr[index - 1] > 0) {
            arr[index] = item + arr[index-1]
        }
    })
    return Math.max(...nums)
};

// 解题思路
// 可能是有过类似的经验，我是这么想的：
// 记录一个子序列和sum，在遍历下一个数时，先进行加和计算并储存结果。若当前加和小于0，则重置计算器。
// 这样会记录每一次加和的结果，并且会打断小于0的结果的累加，只有大于等于0的加和是有效的
// 最后对这个数组进行求最大值运算得到结果

// Kadane算法也是类似的，只是不会进行每次结果的储存，只保存当前加和最大的数，省下了一个数组的空间

// 最后的做法，是看到了不额外开启空间的做法，我按自己的理解又重新写了一个解法，相当于第一个解法，只是将每次累加的结果直接存在了原数组里