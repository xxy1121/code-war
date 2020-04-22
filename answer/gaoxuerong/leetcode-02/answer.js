/**
 * 最后一个单词的长度
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let res = 0;
  if (s.length) {
      let sArray = s.trim().split(' ')
      let resString = sArray[sArray.length - 1]
      res = resString.length
  }
  return res
};

// 解题思路
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点