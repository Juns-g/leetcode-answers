// https://leetcode.cn/problems/valid-palindrome/description/?envType=study-plan-v2&envId=top-interview-150
// #region
const isLetterOrNumber = (char) => /^[a-zA-Z0-9]$/.test(char);
const isSame = (c1, c2) => c1.toLowerCase() === c2.toLowerCase();

function isPalindrome(s: string): boolean {
	let l = 0;
	let r = s.length - 1;
	while (l < r) {
		while (l < r && !isLetterOrNumber(s[l])) l++;
		while (l < r && !isLetterOrNumber(s[r])) r--;

		if (!isSame(s[l], s[r])) return false;
		l++, r--;
	}
	return true;
}
// #endregion
export {};

console.log(isPalindrome('.,'));
// console.log(isPalindrome('A man, a plan, a canal: Panama'));
