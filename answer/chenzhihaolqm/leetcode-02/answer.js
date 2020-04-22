/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
   let arr = s.trimRight().split(' ');
   return (arr[arr.length-1] || '').length;
};

// 解题思路
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点