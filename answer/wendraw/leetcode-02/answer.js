/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let end = s.length - 1;
  // 去除后空格，找到单词的结尾
  while (end >= 0 && s[end] === " ") end--;
  let start = end; // 寻找单词的开头
  while (start >= 0 && s[start] !== " ") start--;
  return end - start;
};

// 解题思路
// 这一题是找最后一个字符，所以就逆向思维，从后往前遍历，先找到最后一个单词的尾部，然后再遍历找到空格就说明到了单词的头部。
// 要注意的是字符串的后面也有空格需要跳过。