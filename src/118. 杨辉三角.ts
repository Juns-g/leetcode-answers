// https://leetcode.cn/problems/pascals-triangle/description/?envType=study-plan-v2&envId=top-100-liked

// #region
function generate(numRows: number): number[][] {
	if (numRows === 1) return [[1]]
	const res: number[][] = [[1], [1, 1]]
	if (numRows === 2) return res
	for (let i = 2; i < numRows; i++) {
		const row = [1]
		for (let j = 0; j < i - 1; j++) {
			row.push(res[i - 1][j] + res[i - 1][j + 1])
		}
		row.push(1)
		res.push(row)
	}

	return res
}
// #endregion

export {}

// console.log(generate(3))
console.log(generate(5))

// 1
// 1, 1
// 1, 2, 1
// 1, 3, 3, 1
// 1, 4, 6, 4, 1
