// https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/description/?envType=study-plan-v2&envId=top-100-liked

// #region
function findMin(nums: number[]): number {
	let left = 0;
	let right = nums.length - 1;
	let ans = 5001;
	while (left < right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (nums[mid] < nums[right]) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
	return nums[left];
}
// #endregion

export {};
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([11, 13, 15, 17]));
