// https://leetcode.cn/problems/search-a-2d-matrix/description/?envType=study-plan-v2&envId=top-100-liked

// #region
function searchMatrix(matrix: number[][], target: number): boolean {
	let m = matrix.length,
		n = matrix[0].length;
	let top = 0,
		bottom = m - 1;

	while (top < bottom) {
		let rowMid = Math.floor(top + (bottom - top) / 2);
		let rowMin = matrix[rowMid][0],
			rowMax = matrix[rowMid][n - 1];
		if (rowMin > target) {
			bottom = rowMid - 1;
		} else if (rowMax < target) {
			top = rowMid + 1;
		} else {
			top = rowMid;
			bottom = rowMid;
			break;
		}
	}

	let left = 0,
		right = n - 1;
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (matrix[top][mid] === target) return true;
		if (matrix[top][mid] > target) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return false;
}
// #endregion

export default {};

console.log(searchMatrix([[1]], 2));
// console.log(searchMatrix([[1, 3]], 1));
// console.log(searchMatrix([[1, 3]], 3));

// console.log(searchMatrix([[1]], 1));

/* console.log(
	searchMatrix(
		[
			[1, 3, 5, 7],
			[10, 11, 16, 20],
			[23, 30, 34, 60],
		],
		3
	)
); */
