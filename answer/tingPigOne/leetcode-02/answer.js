/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let lastLength = 0,
        sArray = s.split(' ');
    for (let i = sArray.length - 1; i >= 0; i--) {
        if (sArray[i].length > 0) {
            lastLength = sArray[i].length;
            break;
        }
    }
    return lastLength;
};

// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点
/**
 * (也可以使用trim处理掉前后空格再做)
 * 思路比较简单：初始化最后字符长度为0，得到数组；从后往前遍历数组，找到第一个不为空的元素，返回其长度即可
 */