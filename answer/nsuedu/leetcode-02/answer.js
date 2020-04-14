/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (!(typeof (s) === 'string') && s.length > 0 && s.trim().length > 0) return 0;
    const newS = s.trim();
    const strArr = newS.split(' ');
    return strArr[strArr.length - 1].length;
};

// 解题思路
/*
我看到题目就想到应该是字符串与数组转换进行处理，考查的是数组与字符串的转换方法知识点
*/