// https://leetcode.cn/problems/search-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-100-liked

// #region
function search(nums: number[], target: number): number {
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (nums[mid] === target) return mid;
		if (nums[0] <= nums[mid]) {
			if (nums[0] <= target && target <= nums[mid]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		} else {
			if (nums[mid] <= target && target <= nums[nums.length - 1]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
	}
	return -1;
}
// #endregion

export {};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
