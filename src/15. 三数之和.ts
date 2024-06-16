// https://leetcode.cn/problems/3sum/description/?envType=study-plan-v2&envId=top-100-liked

import { quickSort } from '../temp/utils/quickSort'

// #region
function threeSum(nums: number[]): number[][] {
	let ans = []
	quickSort(nums)
	console.log('🚀 ~ nums:', nums)
	for (let i = 0; i < nums.length - 2; i++) {
		if (nums[i] > 0 || (i > 0 && nums[i] === nums[i - 1])) continue
		let l = i + 1
		let r = nums.length - 1
		while (l < r) {
			if (nums[l] + nums[r] === -nums[i]) {
				ans.push([nums[i], nums[l], nums[r]])
				while (l < r && nums[r] === nums[r - 1]) r--
				while (l < r && nums[l] === nums[l + 1]) l++
				l++, r--
			} else {
				nums[l] + nums[r] + nums[i] > 0 ? r-- : l++
			}
		}
	}
	return ans
}
// #endregion

export {}
console.log(threeSum([-2, 0, 0, 2, 2]))
