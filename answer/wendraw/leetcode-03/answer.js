/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    res += s[i] === " " ? "%20" : s[i];
  }
  return res;
};

// 解题思路
// // 由于 JS 中的 String 是不可变的，所以直接遍历字符串，将字符拼接到 res 即可，遇到 " " 就拼接 "%20"
