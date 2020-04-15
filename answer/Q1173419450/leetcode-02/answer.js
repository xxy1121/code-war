/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let arr = s.trim().split(' ');
  return arr[arr.length - 1].length
};

const s = "a "
const result = lengthOfLastWord(s);
console.log(result);

// 解题思路
// 我看到题目就想到应该是字符串处理，考查的是字符串分割的知识点
// 问题：考虑少了前后会出现空格的情况，一直没提交通过。看了题解以后，在尝试性的加上trim方法后实现了这一算法。

// 然后看到了题解精选中使用了尾递归。看了一遍自己也实现了下。
var lengthOfLastWord = function(s) {
  let end = s.length - 1; // 找到字符串最后一个值
  if (end >= 0 && s[end] == '') end--;
  if (end == 0) return 0;
  let start = end;
  if (start >= 0 && s[start] != ' ') start--  // 找到字符串的第一个的值
  return start - end;
};
