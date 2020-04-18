/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let list = s.trim().split(' ')
    let length = list.length
    return length ? list[length - 1].length : 0
};

// 解题思路
// 去除字符串两端空格，然后用' '去切割，如果s不为空，那么切割得到的数组最后一位一定是一个单词。