/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // 解题思路
	// 1、寻找所有正数出现的位置
	// 2、寻找这个正数所能得到的最大和
	var start = end = temp = -1, sum = nums[0];
	for(let i = 0; i < nums.length; i ++){
		// 考虑全为负数的情况
		if(nums[i] > sum) sum = nums[i];
		if(nums[i] >= 0){
			temp = start = nums[i];
			for(let j = i + 1; j < nums.length; j ++){
				temp += nums[j];
				if(nums[j] > 0 && temp > sum) sum = temp;
			}
		}
	}
	return sum;
};
