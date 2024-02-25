// https://leetcode.cn/problems/isomorphic-strings/description/?envType=study-plan-v2&envId=top-interview-150

// #region
// TODO 没过
function isIsomorphic(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	let map = new Map();
	for (const char of s) {
		let val = map.get(char);
		map.set(char, val ? val + 1 : 1);
	}
	for (const char of t) {
		let val = map.get(char);
		if (!val) return false;
		map.set(char, val - 1);
	}
	return [...map.values()].some((item) => item === 0);
}
// #endregion

export {};
