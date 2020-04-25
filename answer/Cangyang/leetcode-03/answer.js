/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    var res = [],origin = s.split(""),j=0;
	for(let i = 0; i< origin.length; i ++){
		if(origin[i] === ' '){
			res[j++] = '%';
			res[j++] = '2';
			res[j++] = '0';
		}else{
			res[j++] = origin[i];
		}
	}
	return res.join("");;
};
