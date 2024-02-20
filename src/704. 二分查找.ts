// https://leetcode.cn/problems/binary-search/description/

// #region
function search(nums: number[], target: number): number {
	// 二分查找
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (target === nums[mid]) return mid;
		if (target < nums[mid]) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return -1;
}
// #endregion

export default {};
console.log(search([1, 3], 3));
