// https://leetcode.cn/problems/move-zeroes/description/?envType=study-plan-v2&envId=top-100-liked

// #region
function moveZeroes(nums: number[]): void {
	let slow = 0
	for (let fast = 0; fast < nums.length; fast++) {
		if (nums[fast] === 0) continue
		;[nums[slow], nums[fast]] = [nums[fast], nums[slow]]
		slow++
	}
}
// #endregion
export {}

// let nums = [0, 1, 0, 3, 12]
let nums = [1, 0]
moveZeroes(nums)
console.log('🚀 ~ nums:', nums)
