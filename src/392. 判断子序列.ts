// https://leetcode.cn/problems/is-subsequence/description/?envType=study-plan-v2&envId=top-interview-150
// #region
function isSubsequence(s: string, t: string): boolean {
	let l = 0;
	let r = 0;
	while (l < s.length && r < t.length) {
		if (t[r] === s[l]) {
			l++, r++;
		} else {
			r++;
		}
	}
	return l === s.length;
}
// #endregion
export {};
console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
