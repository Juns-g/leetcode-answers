// https://leetcode.cn/problems/validate-binary-search-tree/description/?envType=study-plan-v2&envId=top-interview-150
class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
// #region
function isValidBST(root: TreeNode | null): boolean {
	if (!root) return false;
	let maxVal = -Infinity;
	const dfs = (root: TreeNode | null) => {
		if (!root) return true;
		let leftValid = dfs(root.left);
		if (!leftValid) return false;
		if (maxVal < root.val) {
			maxVal = root.val;
		} else {
			return false;
		}
		let rightValid = dfs(root.right);
		return leftValid && rightValid;
	};
	return dfs(root);
}
// #endregion

export default {};
