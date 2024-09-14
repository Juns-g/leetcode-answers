// https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function lengthOfLongestSubstring(s: string): number {
	const set = new Set<string>()
	let ans = 0
	let left = 0,
		right = 0
	while (right < s.length) {
		if (set.has(s[right])) {œ
			set.delete(s[left])
			left++
		} else {
			set.add(s[right])
			ans = Math.max(ans, set.size)
			// 或者比较ans和set.size
			right++
		}
	}
	return ans
}
// #endregion

export default {}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
