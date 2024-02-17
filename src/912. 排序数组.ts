// https://leetcode.cn/problems/sort-an-array/description/
// #region
function swap(nums: number[], left: number, right: number) {
	[nums[left], nums[right]] = [nums[right], nums[left]];
}

function randomIndex(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function partition(nums: number[], left: number, right: number) {
	let i = left;
	let j = right;
	let baseIndex = randomIndex(left, right);
	swap(nums, baseIndex, left);
	let baseNum = nums[left];
	while (i < j) {
		while (i < j && nums[j] >= baseNum) j--;
		while (i < j && nums[i] <= baseNum) i++;
		swap(nums, i, j);
	}
	swap(nums, left, i);
	return i;
}

function quickSort(nums: number[], left: number, right: number) {
	if (left >= right) return nums;
	while (left < right) {
		let mid = partition(nums, left, right);
		if (mid - left < right - mid) {
			quickSort(nums, left, mid - 1);
			left = mid + 1;
		} else {
			quickSort(nums, mid + 1, right);
			right = mid - 1;
		}
	}
	return nums;
}

function sortArray(nums: number[]): number[] {
	const ans = [...nums];
	return quickSort(ans, 0, ans.length - 1);
}
// #endregion

export {};

console.log(sortArray([5, 1, 1, 2, 0, 0]));
