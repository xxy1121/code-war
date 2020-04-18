/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let str = helper(s);
  if (!str || str.length === 1) return str.length;
  let length = str.length;
  while (length >= 0) {
    if (str[length] === " ") {
      return str.length - length - 1;
    }
    if (length === 0) {
      return str.length
    }
    length--;
  }
};
function helper(s) {
  return s.trim();
}


// 解题思路
/**
 * 1.先去除字符串两边的字符串
 * 2. 当为空字符串和长度为1的直接返回字符串长度
 * 使用 while 循环，str从length开始，有空格开始就算长度，若length都为0，则返回str.length
 */
// isEmpty 未完题目请勿删除此行
// 我看到题目就想到应该是XXX处理，考查的是XXX知识点