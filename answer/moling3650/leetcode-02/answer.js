/**
 * @param {string} s
 * @param {RegExp} searchValue
 * @param {string} i
 * @return {number}
 */
function lastIndexOf(s, searchValue, i) {
    while (i >= 0 && !searchValue.test(s[i])) { i -= 1; }
    return i;
}

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    const wIdx = lastIndexOf(s, /\w/, s.length - 1);
    if (wIdx < 0) {
        return 0;
    }
    const sIdx = lastIndexOf(s, /\s/, wIdx - 1);
    return wIdx - sIdx;
};

// 解题思路
/**
 * 思路：逆序查找
 * 步骤：先从字符串最后一位向前查找文字位置wIdx，再从wIdx - 1的位置向前查找空格sIdx，用wIdx - sIdx得出单词的长度
 * 抽象：两次都是向前查找位置i，可以封装成一个查找的函数，便于测试。如果找到了就返回i，找不到返回-1
 * 估算：最坏的情况是一次数组扫描，时间复杂度 O(n)；就地解决，空间复杂度 O(1)
 */