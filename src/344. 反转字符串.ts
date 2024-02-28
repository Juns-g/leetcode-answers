// https://leetcode.cn/problems/reverse-string/description/
// #region
function reverseString(s: string[]): void {
	let l = 0;
	let r = s.length - 1;
	while (l <= r) {
		[s[l], s[r]] = [s[r], s[l]];
		l++;
		r--;
	}
}
// #endregion

export {};

let s = ['a', 'b', 'c'];
reverseString(s);
console.log(s);
