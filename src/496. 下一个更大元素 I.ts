// https://leetcode.cn/problems/next-greater-element-i/description/
// 单调栈
// #region
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
	let stack: number[] = [];
	let map = new Map<number, number>();
	for (let i = 0; i < nums2.length; i++) {
		while (stack.length && nums2[i] > nums2[stack.at(-1)]) {
			let j = stack.pop();
			map.set(nums2[j], nums2[i]);
		}
		stack.push(i);
	}
	return new Array(nums1.length).fill(-1).map((_, index) => map?.get(nums1[index]) ?? -1);
}
// #endregion

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
export {};
