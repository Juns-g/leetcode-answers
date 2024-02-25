// https://leetcode.cn/problems/happy-number/description/?envType=study-plan-v2&envId=top-interview-150

// #region
function getSum(n: number) {
	let sum = 0;
	String(n)
		.split('')
		.forEach((item) => {
			sum += Number(item) * Number(item);
		});
	return sum;
}
function isHappy(n: number): boolean {
	let set = new Set();
	while (n !== 1 && !set.has(n)) {
		set.add(n);
		n = getSum(n);
	}
	return n === 1;
}
// #endregion

export {};

console.log(isHappy(19));
