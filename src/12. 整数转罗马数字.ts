// https://leetcode.cn/problems/integer-to-roman/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function intToRoman(num: number): string {
	const charMap = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	const keys = Object.keys(charMap);
	const values = Object.values(charMap);
	let res = '';
	let copyNum = num;
	let i = 0;
	while (copyNum) {
		if (copyNum >= values[i]) {
			res += keys[i];
			copyNum -= values[i];
		} else {
			i++;
		}
	}
	return res;
}
// #endregion

console.log(intToRoman(3));
console.log(intToRoman(9));
console.log(intToRoman(58));
console.log(intToRoman(1994));
export default {};
