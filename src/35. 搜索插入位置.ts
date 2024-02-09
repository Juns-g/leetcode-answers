// https://leetcode.cn/problems/search-insert-position/description/
// #region
function searchInsert(nums: number[], target: number): number {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor(left / 2 + right / 2);
		if (target === nums[mid]) return mid;
		if (target > nums[mid]) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return left;
}
// #endregion

export default {};
