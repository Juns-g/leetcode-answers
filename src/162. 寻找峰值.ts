// https://leetcode.cn/problems/find-peak-element/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function findPeakElement(nums: number[]): number {
	let l = 0;
	let r = nums.length - 1;
	while (l < r) {
		let m = Math.floor(l + (r - l) / 2);
		if (nums[m] > nums[m + 1]) {
			r = m;
		} else {
			l = m + 1;
		}
	}
	return r;
}
// #endregion

export {};
