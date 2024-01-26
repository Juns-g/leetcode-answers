// https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	// 从左右子树里面分别找一个
	if (root === q || root === p || root === null) return root;

	const left = lowestCommonAncestor(root.left, p, q);
	const right = lowestCommonAncestor(root.right, p, q);

	if (left && right) return root;

	return left ?? right;
}
// #endregion
export default {};
