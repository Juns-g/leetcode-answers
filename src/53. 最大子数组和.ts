// https://leetcode.cn/problems/maximum-subarray/?envType=study-plan-v2&envId=top-100-liked
// #region
function maxSubArray(nums: number[]): number {
	if (nums.length === 1) return nums[0]
	const ans = new Array(nums.length + 1)
	ans[0] = 0
	ans[1] = nums[0]

	for (let i = 1; i < ans.length; i++) {
		if (ans[i - 1] < 0) ans[i] = nums[i - 1]
		else ans[i] = ans[i - 1] + nums[i - 1]
	}
	ans.shift()
	console.log('🚀 ~ ans:', ans)
	return Math.max(...ans)
}
// #endregion
// sum[n] = sum[n-1] + (sum[n] > 0 ? sum[n] : 0)
// maxSubArray([5, 4, -1, 7, 8])
// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSubArray([-2, -1])
// maxSubArray([5, 4, -1, 7, 8])
export {}
