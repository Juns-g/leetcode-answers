function rob(nums: number[]): number {
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

// f(n) = Math.max(nums[n]+f(n-2), f(n-1))
export {}
console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))
