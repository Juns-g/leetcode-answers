// https://leetcode.cn/problems/reverse-string-ii/description/
// #region
function reverse(s: string[], left: number, right: number): void {
	let l = left,
		r = right;
	while (l <= r) {
		[s[l], s[r]] = [s[r], s[l]];
		l++;
		r--;
	}
}
function reverseStr(s: string, k: number): string {
	let res = s.split(''); // 不影响入参
	for (let i = 0; i < s.length; i += 2 * k) {
		if (i + k <= s.length) {
			reverse(res, i, i + k - 1);
		} else {
			reverse(res, i, s.length - 1);
		}
	}
	return res.join('');
}
// #endregion
export {};
console.log(reverseStr('abcdefg', 2));
