// https://leetcode.cn/problems/invert-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
function invertTree(root: TreeNode | null): TreeNode | null {
	if (!root) return null;
	const r = root?.right ?? null;
	const l = root?.left ?? null;
	root.left = r;
	root.right = l;
	invertTree(root.left);
	invertTree(root.right);
	return root;
}
// #endregion

export default {};
