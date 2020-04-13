/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let wordArr = s.split(' ').filter(item => item)
    return wordArr.length > 0 ? wordArr[wordArr.length - 1].length : 0
};

var lengthOfLastWord = function(s) {
    s = s.trim()
    const index = s.lastIndexOf(' ')
    return s.length - (index + 1)
};

// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
