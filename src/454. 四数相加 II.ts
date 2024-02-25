// https://leetcode.cn/problems/4sum-ii/description/
// #region
function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
	let map = new Map();
	let res = 0;
	for (let i of nums1) {
		for (let j of nums2) {
			let val = map.get(i + j);
			map.set(i + j, val ? val + 1 : 1);
		}
	}

	for (let i of nums3) {
		for (let j of nums4) {
			res += map.get(-(i + j)) ?? 0;
		}
	}

	return res;
}
// #endregion
export {};
