
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	//解题思路：
	// 1、判断单词的后空格
	// 2、判断单词的前空格
    var start=end=-1,t = s.split("");
	for(let i = t.length; i--; i > -1 ){
		if(end === -1 && t[i] !== ' ') end = i;
		// no whitespace before the word
		if(end !== -1 && i === 0) start = i - 1;
		// some whitespace before the word
		if(end !== -1 && t[i] === ' ') start = i;
		if(start !== -1) break;
	}
	return (end - start);
};
