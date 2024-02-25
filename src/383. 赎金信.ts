// https://leetcode.cn/problems/ransom-note/description/?envType=study-plan-v2&envId=top-interview-150
// #region
function canConstruct(ransomNote: string, magazine: string): boolean {
	let map = new Map();
	for (let char of magazine) {
		let val = map.get(char);
		map.set(char, val ? val + 1 : 1);
	}
	for (let char of ransomNote) {
		let val = map.get(char);
		if (!val) return false;
		map.set(char, val - 1);
	}
	return true;
}
// #endregion
export {};

console.log(canConstruct('aa', 'aab'));
