// https://leetcode.cn/problems/squares-of-a-sorted-array/description/

// #region
function sortedSquares(nums: number[]): number[] {
	// 双指针
	let len = nums.length;
	let left = 0;
	let right = len - 1;
	const ans: number[] = Array(len);
	let n = len - 1;
	while (left !== right) {
		const leftVal = nums[left] * nums[left];
		const rightVal = nums[right] * nums[right];
		if (leftVal > rightVal) {
			ans[n] = leftVal;
			n--;
			left++;
		} else {
			ans[n] = rightVal;
			n--;
			right--;
		}
	}
	ans[n] = nums[left] * nums[left];
	return ans;
}
// #endregion

export default {};
console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));
