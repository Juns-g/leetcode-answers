// https://leetcode.cn/problems/intersection-of-two-arrays/description/

// #region
// 哈希表
function intersection(nums1: number[], nums2: number[]): number[] {
	let set1 = new Set(nums1);
	let ans = new Set<number>();
	for (let n of nums2) {
		set1.has(n) && ans.add(n);
	}
	return [...ans];
}
// #endregion

export {};
