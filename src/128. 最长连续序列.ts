// https://leetcode.cn/problems/longest-consecutive-sequence/?envType=study-plan-v2&envId=top-100-liked
// #region
function longestConsecutive(nums: number[]): number {
	let ans = 0
	let set = new Set(nums)
	for (let n of set) {
		if (set.has(n - 1)) continue
		let len = 1
		let cur = n + 1
		while (set.has(cur++)) {
			len++
		}
		ans = Math.max(ans, len)
	}
	return ans
}
// #endregion

export {}
