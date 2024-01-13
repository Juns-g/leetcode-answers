// https://leetcode.cn/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function majorityElement(nums: number[]): number {
	// 使用map来做
	const map = new Map();
	const len = nums.length;
	if (len === 1) return nums[0];
	for (const item of nums) {
		if (!map.has(item)) {
			map.set(item, 1);
			continue;
		}
		map.set(item, map.get(item) + 1);
		if (map.get(item) > len / 2) {
			return item;
		}
	}
	return -1;
}
// #endregion
const testNums = [3, 2, 3];
console.log(majorityElement(testNums));
