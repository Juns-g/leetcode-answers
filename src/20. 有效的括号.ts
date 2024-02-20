// https://leetcode.cn/problems/valid-parentheses/description/?envType=study-plan-v2&envId=top-100-liked
// #region
function isValid(s: string): boolean {
	const map = {
		'(': ')',
		'{': '}',
		'[': ']',
	};
	let stack = [];
	for (let char of s) {
		if (Object.values(map).includes(char)) {
			if (map[stack.at(-1)] === char) {
				stack.pop();
			} else {
				return false;
			}
		} else {
			stack.push(char);
		}
	}
	return stack.length === 0;
}
// #endregion
export {};
console.log(isValid('()'));
console.log(isValid('()[]{}'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
