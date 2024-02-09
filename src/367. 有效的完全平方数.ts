// https://leetcode.cn/problems/valid-perfect-square/description/

// #region
function isPerfectSquare(num: number): boolean {
	if (num === 0) return true;
	let left = 0;
	let right = 2 * num - 1;
	while (left <= right) {
		let mid = Math.floor(left / 2 + right / 2);
		if (mid * mid === num) return true;
		if (mid * mid > num) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return false;
}
// #endregion
export default {};
