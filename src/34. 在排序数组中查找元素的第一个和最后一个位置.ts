// https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/description/
// #region
function searchRange(nums: number[], target: number): number[] {
	return [searchLeft(nums, target), searchRight(nums, target)];
}
function searchLeft(nums: number[], target: number) {
	let ans = -1;
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] >= target) {
			right = mid - 1;
			ans = mid;
		} else {
			left = mid + 1;
		}
	}
	return nums[ans] === target ? ans : -1;
}
function searchRight(nums: number[], target: number) {
	let ans = -1;
	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (nums[mid] <= target) {
			left = mid + 1;
			ans = mid;
		} else {
			right = mid - 1;
		}
	}
	return nums[ans] === target ? ans : -1;
}
// #endregion
export default {};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
