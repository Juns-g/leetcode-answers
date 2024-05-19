// https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked

// #region
function groupAnagrams(strs: string[]): string[][] {
	const ans: string[][] = []
	const map = new Map()
	strs.forEach((str) => {
		// @ts-ignore
		const s = Array.from(str).toSorted().join('')
		const list = map.has(s) ? [...map.get(s), str] : [str]
		map.set(s, list)
		// console.log(map)
	})
	return [...map.values()]
}
// #endregion
let strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
console.log(groupAnagrams(strs))
export {}
