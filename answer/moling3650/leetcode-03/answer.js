/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    return s.replace(/\s/g, '%20');
};

// 解题思路
/**
 * 思路：api替换
 * 解释：这题用高级语言解没有什么意义，这题考得非常底层。string类型在C的实现，是一个char类型的数组，且在末位带有一个\0的字符。
 *      这题的复杂度中在于用三个字符来替换一个字符，数组需要扩容，而且扩容的数量是不确定的，原数组长度的1~3倍。
 * 解法1：先申请原数组3倍的内存，循环一次填充新数据，而后对新数组空白部分进行截断。
 * 解法2：先数出字符串有多少空格，申请字符串长度+空格*2的内存，循环填充数据。
 * 估算：无论如何解都需要循环字符串，时间复杂度O（n)，空间复杂度也要O（n）
 */