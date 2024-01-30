// https://leetcode.cn/problems/minimum-absolute-difference-in-bst/description/?envType=study-plan-v2&envId=top-interview-150
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
function getMinimumDifference(root: TreeNode | null): number {
	if (!root) return 0;
	let ans = Infinity;
	let preNode: TreeNode | null = null;
	function dfs(node: TreeNode | null) {
		if (!node) return;
		dfs(node.left);
		if (preNode) {
			ans = Math.min(ans, node.val - preNode.val);
		}
		preNode = node;
		dfs(node.right);
	}
	dfs(root);
	return ans;
}
// #endregion

export default {};
