// https://leetcode.cn/problems/next-greater-element-ii/description/

// #region
function nextGreaterElements(nums: number[]): number[] {
	let n = nums.length;
	let ans = new Array(n).fill(-1);
	let stack: number[] = [];
	for (let i = 0; i < 2 * n - 1; i++) {
		let x = i % n;
		while (stack.length && nums[x] > nums[stack.at(-1)]) {
			let j = stack.pop();
			ans[j] = nums[x];
		}
		stack.push(x);
	}
	return ans;
}

// 这个不行，会超时
function nextGreaterElements_err(nums: number[]): number[] {
	const ans: number[] = [];
	function getFirstBigNum(n: number, arr: number[]) {
		for (let item of arr) {
			if (item > n) {
				return item;
			}
		}
		return -1;
	}
	nums.forEach((item, index) => {
		let arr: number[] = [];
		if (index === nums.length - 1) {
			arr = nums;
		} else {
			arr = [...nums.slice(index + 1, nums.length), ...nums.slice(0, index)];
		}
		ans.push(getFirstBigNum(item, arr));
	});

	return ans;
}
// #endregion
export default {};

// console.log(nextGreaterElements([1, 2, 1]));
// console.log(nextGreaterElements([1, 2, 3, 4, 3]));
console.log(nextGreaterElements([1, 2, 3, 4, 5]));
