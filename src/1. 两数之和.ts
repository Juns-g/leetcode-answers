// https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-interview-150
// #region
function twoSum(nums: number[], target: number): number[] {
	let map = new Map();
	for (let i = 0; i < nums.length; i++) {
		let n = nums[i];
		if (!map.has(n)) map.set(n, i);
		if (map.has(target - n) && map.get(target - n) !== i) return [i, map.get(target - n)];
	}
	return [];
}
// #endregion
export {};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
