// https://leetcode.cn/problems/basic-calculator/description/
// #region
// TODO
function calculate(s: string): number {
	let str = s.replaceAll('(', '').replaceAll(')', '');
	console.log('🚀 ~ str:', str);
	const stack: number[] = [];
	let temp = '';
	for (let char of str) {
		if (char === '+' || char === '-') {
			const val1 = Number(temp);
			console.log('🚀 ~ val1:', val1);
			let n = char === '+' ? val1 + Number(char) : val1 - Number(char);
			console.log('🚀 ~ n:', n);
			stack.push(n);
			temp = '';
		} else {
			temp = `${temp}${char}`;
		}
	}
	console.log(stack);

	return 1;
}

// #endregion
export default {};

console.log(calculate('(1+(4+5+2)-3)+(6+8)'));
