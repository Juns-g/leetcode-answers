// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked

function reverse(nums: number[], l: number, r: number) {
	while (l < r) {
		;[nums[l], nums[r]] = [nums[r], nums[l]]
		l++
		r--
	}
}

function rotate(nums: number[], k: number): void {
	const realK = k % nums.length
	reverse(nums, 0, nums.length - 1)
	reverse(nums, 0, realK - 1)
	reverse(nums, realK, nums.length - 1)
}

export {}

const arr = [1, 2, 3, 4, 5, 6, 7]
rotate(arr, 3)
console.log('🚀 ~ arr:', arr)
