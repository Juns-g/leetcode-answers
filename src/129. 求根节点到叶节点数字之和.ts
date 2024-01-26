// https://leetcode.cn/problems/sum-root-to-leaf-numbers/description/?envType=study-plan-v2&envId=top-interview-150
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
function sumNumbers(root: TreeNode | null): number {
	if (!root) return 0;
	let ans = 0;
	function dfs(root: TreeNode, sum = 0) {
		sum = sum * 10 + root.val;
		if (!root.left && !root.right) {
			ans += sum;
		}
		root?.left && dfs(root.left, sum);
		root?.right && dfs(root.right, sum);
		return sum;
	}
	dfs(root);
	return ans;
}
// #endregion
export default {};
