// https://leetcode.cn/problems/merge-intervals/description/?envType=study-plan-v2&envId=top-100-liked

// #region
function merge(intervals: number[][]): number[][] {
	if (intervals.length === 1) return intervals
	const ans: number[][] = []
	intervals = intervals.sort((a, b) => a[0] - b[0])
	for (let i = 1; i < intervals.length; i++) {
		const [preStart, preEnd] = intervals[i - 1]
		const [start, end] = intervals[i]
		if (start <= preEnd) {
			intervals[i] = [preStart, Math.max(preEnd, end)]
		} else {
			ans.push(intervals[i - 1])
		}
	}
	ans.push(intervals.at(-1))
	return ans
}
// #endregion

export {}
console.log(
	merge([
		[1, 3],
		[2, 6],
		[8, 10],
		[15, 18],
	])
)
console.log(
	merge([
		[1, 4],
		[5, 6],
	])
)
