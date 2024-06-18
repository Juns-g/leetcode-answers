// https://leetcode.cn/problems/house-robber/description/?envType=study-plan-v2&envId=top-interview-150
// 动态规划
// #region
function rob(nums: number[]): number {
	let n = nums.length
	if (n === 1) return nums[0]
	if (n === 2) return Math.max(nums[0], nums[1])

	let ans: number[] = []
	ans[0] = nums[0]
	ans[1] = nums[1]
	ans[2] = nums[2] + ans[0]
	let m = Math.max(ans[0], ans[1], ans[2])
	for (let i = 3; i < n; i++) {
		ans[i] = nums[i] + Math.max(ans[i - 2], ans[i - 3])
		m = Math.max(m, ans[i])
	}
	return m
}

// 滚动数组优化空间
function rob_2(nums: number[]): number {
	const n = nums.length
	if (n === 1) return nums[0]

	let prev2 = 0
	let prev1 = nums[0]
	let maxAmount = prev1

	for (let i = 1; i < n; i++) {
		const curr = Math.max(prev2 + nums[i], prev1)
		maxAmount = Math.max(maxAmount, curr)
		prev2 = prev1
		prev1 = curr
	}

	return maxAmount
}

// 2024.6.17 的优化方法
function rob_3(nums: number[]): number {
	if (nums.length === 1) return nums[0]
	if (nums.length === 2) return Math.max(nums[0], nums[1])
	let ans = 0
	let a = nums[0]
	let b = Math.max(nums[0], nums[1])
	for (let i = 2; i < nums.length; i++) {
		ans = Math.max(nums[i] + a, b)
		a = b
		b = ans
	}

	return ans
}
// #endregion

export {}
console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
