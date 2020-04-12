// 最后一个单词的长度 https://leetcode-cn.com/problems/length-of-last-word/
var lengthOfLastWord = function (s) {
    if (!(typeof (s) === 'string') && s.length > 0 && s.trim().length > 0) return 0;
    const newS = s.trim();
    const strArr = newS.split(' ');
    return strArr[strArr.length - 1].length;
};
console.log(lengthOfLastWord("a "))

// 替换空格 https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
var replaceSpace = function (s) {
    return s.replace(/\s/g, '%20')
};




// 最大子序和 https://leetcode-cn.com/problems/maximum-subarray/
var maxSubArray = function (nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]) {
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
