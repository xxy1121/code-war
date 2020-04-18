*
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let length=nums.length;
    let max=nums[0]; 
    //最大和默认数组第一个值

    let sum=0; 

	// 第一层循环
    for(let i=0;i<length;i++){

		// 第二层循环从i处开始遍历
        for(let j=i;j<length;j++){

        	// 把遍历的数值加到sum上，与max作比较，把较大值赋给max
            sum=sum+nums[j];
            if(sum>max){
                max=sum;
            }
        }
        // 第二层遍历结束，必须要sum值制令，再开始下一次循环
        sum=0;
    }
    return max;

};

// 解题思路
/**
	看到题目我首先想到的是暴力破解，两层循环遍历得到最大和。
	第一层循环从开始遍历到结束，第二层循环嵌套在第一层循环中，
从第一层循环开始的地方向后遍历，把遍历到的每个值都加到sum上，再与max作比较，把较大值赋给max。
需要注意的是，第二层循环结束时，必须要把sum置零才能开始下一次循环遍历。

	时间复杂度为O(n^2).

**/


// 第二种解法
var maxSubArray = function(nums) {
    let length=nums.length;
    let max=nums[0];
    let sum=0;
    for(let i=0;i<length;i++){
        if(sum>0){
            sum+=nums[i];
        } else{
            sum=nums[i];
        }

        if(sum>max){
            max=sum;
        }
    }
    return max;

};

/**
	第二种方法是动态规划法。

	由于最大和是累加过程，
	如果之前的sum<=0，则对于“求取最大和”没有增加值，那我们可以把这个sum舍弃，把当前的数组值赋给sum；

	如果sum>0，则对于“求取最大值”有增加值，那我们可以保留sum值，并在此基础上累加数组的值；
	
	每次sum赋值完毕，都要与max作比较，把较大值赋给max。

	时间复杂度为O(n).


**/