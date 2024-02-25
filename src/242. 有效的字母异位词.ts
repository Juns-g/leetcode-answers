// https://leetcode.cn/problems/valid-anagram/description/

// #region
// 哈希表
function isAnagram(s: string, t: string): boolean {
	let map = new Map();
	for (let char of s) {
		if (map.has(char)) {
			map.set(char, map.get(char) + 1);
		} else {
			map.set(char, 1);
		}
	}
	for (let char of t) {
		if (!map.has(char)) return false;
		map.set(char, map.get(char) - 1);
	}
	return Array.from(map.values()).every((item) => item === 0);
}

// 分析：时间复杂度 O(n)，空间复杂度 O(1)
// #endregion
export {};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
