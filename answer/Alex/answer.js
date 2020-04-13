const answer = input => {
	let s = input.split(" ");
	let result = [];
	for(let i = s.length - 1; i > -1; i --){
		if(s[i].trim()){
			result.push(s[i]);
		}
	}
	return result.join(" ");
}
