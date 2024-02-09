// https://leetcode.cn/problems/remove-element/description/

// #region
// 原地移除，因为数组是一个连续的内存空间，所以需要把要返回的数据移动到前面
function removeElement(nums: number[], val: number): number {
	let left = 0,
		right = 0;
	while (right < nums.length) {
		if (val !== nums[right]) {
			nums[left++] = nums[right];
		}
		right++;
	}
	return left;
}
// #endregion
export default {};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
