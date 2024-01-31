// https://leetcode.cn/problems/evaluate-reverse-polish-notation/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function evalRPN(tokens: string[]): number {
	const stack: string[] = [];
	tokens.forEach((item) => {
		console.log('🚀 ~ item:', item);
		if (isNumber(item)) {
			stack.push(item);
		} else {
			const a = stack.pop() as string;
			const b = stack.pop() as string;
			stack.push(String(helper(a, b, item)));
		}
		console.log('🚀 ~ stack:', stack);
	});
	return Number(stack[0]);
}
const isNumber = (str: string) => {
	return /\d/.test(str);
};
const helper = (a: string, b: string, c: string) => {
	const n1 = Number(a);
	const n2 = Number(b);
	switch (c) {
		case '+':
			return n1 + n2;
		case '-':
			return n2 - n1;
		case '*':
			return n1 * n2;
		case '/':
			return n2 / n1 > 0 ? Math.floor(n2 / n1) : Math.ceil(n2 / n1);
	}
};
// #endregion
export default {};

// console.log(evalRPN(['4', '13', '5', '/', '+']));
// console.log(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']));
// console.log(evalRPN(['4', '3', '-']));
console.log(evalRPN(['4', '-2', '/', '2', '-3', '-', '-']));
