// https://leetcode.cn/problems/spiral-matrix/description/

// #region
function spiralOrder(matrix: number[][]): number[] {
	const ans: number[] = [];
	const m = matrix.length;
	const n = matrix[0].length;
	let left = 0,
		right = n - 1,
		top = 0,
		bottom = m - 1;
	while (left <= right && top <= bottom) {
		let row = top;
		let col = left;
		// 左右都取到
		for (col = left; col <= right && top <= bottom; col++) {
			ans.push(matrix[top][col]);
		}
		top++;
		// 上没有，下有
		for (row = top; row <= bottom && left <= right; row++) {
			ans.push(matrix[row][right]);
		}
		right--;
		// 右没有，左有
		for (col = right; col >= left && top <= bottom; col--) {
			ans.push(matrix[bottom][col]);
		}
		bottom--;
		// 上下都没有
		for (row = bottom; row >= top && left <= right; row--) {
			ans.push(matrix[row][left]);
		}
		left++;
	}
	return ans;
}
// #endregion

export default {};

console.log(
	spiralOrder([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	])
);
console.log(
	spiralOrder([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
	])
);
