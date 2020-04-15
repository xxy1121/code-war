/**
 * 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let res = nums[0]
  let sum = 0
  for (let num of nums) {
    if (sum > 0) {
      sum += num
    } else {
      sum = num
    }
    res = Math.max(res,sum)
  }
  return res
};
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
/**
 * 替换空格
 */
/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  return s.split(' ').join('%20')
};
