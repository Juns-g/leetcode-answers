// https://leetcode.cn/problems/container-with-most-water/description/?envType=study-plan-v2&envId=top-interview-150
// #region
function maxArea(height: number[]): number {
	let l = 0;
	let r = height.length - 1;
	let max = 0;
	while (l < r) {
		let h = Math.min(height[l], height[r]);
		let w = r - l;
		max = Math.max(max, h * w);
		height[l] < height[r] ? l++ : r--;
	}
	return max;
}
// 时间 O(n), 空间 O(1)
// #endregion
export {};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
