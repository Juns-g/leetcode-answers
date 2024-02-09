// https://leetcode.cn/problems/powx-n/description/

// #region
function myPow(x: number, n: number): number {
	function quickMul(x: number, N: number) {
		let ans = 1;
		let temp = x;
		while (N) {
			if (N % 2 === 1) {
				ans *= temp;
			}
			temp *= temp;
			N = Math.floor(N / 2);
		}
		return ans;
	}

	let N = n;
	return n > 0 ? quickMul(x, N) : 1.0 / quickMul(x, -N);
}
// 超时了
function myPow_timeout(x: number, n: number): number {
	if (x === 0) return 0;
	let ans = 1;
	let temp = n < 0 ? 1 / x : x;
	for (let i = 1; i <= Math.abs(n); i++) {
		ans *= temp;
	}
	return ans;
}
// #endregion
export default {};

console.log(myPow(2.0, 10));
console.log(myPow(2.1, 3));
console.log(myPow(2.0, -2));
