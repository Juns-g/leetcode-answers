// https://leetcode.cn/problems/roman-to-integer/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function romanToInt(s: string): number {
	const charMap = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000],
	]);
	// 双指针
	let left = 0,
		right = 1;
	let res = 0;
	while (right < s.length + 1) {
		const leftVal = charMap.get(s[left]) as number;
		const rightVal = charMap?.get(s[right]) ?? 0;
		if (leftVal >= rightVal) {
			res += leftVal;
		} else {
			res -= leftVal;
		}
		left++;
		right++;
	}
	return res;
}
// #endregion

console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));

export default {};
