// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function removeDuplicates(nums: number[]): number {
	// 双指针，left, right
	// 如果 left === right, right++
	// 如果 left !== right, nums[left + 1] = nums[right], left++, right++
	let left = 0,
		right = 1;
	while (right < nums.length) {
		if (nums[left] === nums[right]) {
			right++;
			continue;
		} else {
			nums[left + 1] = nums[right];
			left++;
		}
	}
	return left + 1;
}
function removeDuplicates_2(nums: number[]): number {
	let slow = 1;
	let fast = 1;
	while (fast < nums.length) {
		if (nums[fast] !== nums[fast - 1]) {
			nums[slow] = nums[fast];
			slow++;
		}
		fast++;
	}
	return slow;
}
// #endregion

const nums = [1, 1, 2];
removeDuplicates(nums);

export {};
