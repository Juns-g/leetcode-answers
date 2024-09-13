// https://leetcode.cn/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=top-100-liked

function lengthOfLIS(nums: number[]): number {
	let dp: number[] = [Infinity]

	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < dp.length; j++) {
			if (dp[j] >= nums[i]) {
				dp[j] = nums[i]
				break
			}
			dp[j + 1] = Math.min(nums[i], dp[j + 1] ?? Infinity)
		}
	}

	return dp.length
}

// f(n) = nums[n] > num[n-1] ? f(n-1)+1 :
