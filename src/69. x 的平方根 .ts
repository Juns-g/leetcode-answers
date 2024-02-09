// https://leetcode.cn/problems/sqrtx/description/
// #region
function mySqrt(x: number): number {
	if (x === 0) return 0;
	let left = 0;
	let right = 2 * x - 1;
	let ans = 0;
	while (left <= right) {
		let mid = Math.floor(left / 2 + right / 2);
		if (mid * mid === x) return mid;
		if (mid * mid < x) {
			ans = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return ans;
}
// #endregion
export default {};
console.log(mySqrt(4));
console.log(mySqrt(8));
console.log(mySqrt(9));
