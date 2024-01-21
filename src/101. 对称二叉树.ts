// https://leetcode.cn/problems/symmetric-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
function isSymmetric(root: TreeNode | null): boolean {
	const isMirror = (tree1: TreeNode | null, tree2: TreeNode | null): boolean => {
		if (!tree1 && !tree2) return true;
		if (!tree1 || !tree2) return false;
		return tree1.val === tree2.val && isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
	};
	return isMirror(root, root);
}
// #endregion
export default {};
