// complete the given function

function palindrome(str){
	str = str.replaceAll(" ", "");
	str = str.toLowerString();

	let i = 0;
	let j = str.length - 1;

	while(i < j){
		if(str.charAt(i) != atr.charAt(j)) return false;
		i++;
		j--;
	}

	return true;
}
module.exports = palindrome