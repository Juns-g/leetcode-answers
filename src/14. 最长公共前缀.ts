// https://leetcode.cn/problems/longest-common-prefix/description/

/** 时间复杂度 O(n + mn), 空间复杂度 O(1) */
function longestCommonPrefix(strs: string[]): string {
	let minStr = strs[0]
	strs.forEach((s) => {
		if (s.length < minStr.length) minStr = s
	})
	let ans = ''
	for (let c of minStr) {
		let temp = ans + c
		if (strs.every((s) => s.startsWith(temp))) {
			ans = temp
			continue
		} else {
			return ans
		}
	}
	return ans
}

/** mn */
function longestCommonPrefix_2(strs: string[]): string {
	let prefix = strs[0]
	for (let i = 1; i < strs.length; i++) {
		while (!strs[i].startsWith(prefix)) prefix = prefix.slice(0, prefix.length - 1)
		if (!prefix) return prefix
	}
	return prefix
}
