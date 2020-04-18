/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

	let length = s.length-1;

    // 倒着遍历字符串,直到某个元素不为空
    while(length>=0 && s.charAt(length)==" "){
        length--;
    }

    let start = length;//把最后一个字符串结束的位置赋给start

    // 从length处继续倒着遍历，直到某个元素为空
    while(start>=0 && s.charAt(start)!==" "){
        start--;
    }
    return length-start;
};

// 解题思路

/**

	最开始用的内置函数：
		先用trim去掉首尾空格，再用split切割成数组，
	返回数组最后一个元素的长度，意识到解算法题不使用内置函数，于是另寻他解。

		题目要求返回给定字符串最后一个单词的长度，
	那我们可以通过遍历的方法确认最后一个单词起始位置和结束位置，由于是最后一个单词，可以倒着遍历。

		首先倒着遍历字符串，当某个字符不为空时停止遍历，此时确定最后一个单词的结束位置，
		然后从结束位置继续倒着遍历，直到某个字符为空，此时确定最后一个单词的起始位置，
		两者相减，即为最后一个单词的长度。

**/