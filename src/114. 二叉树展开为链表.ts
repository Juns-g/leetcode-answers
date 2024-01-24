// https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/description/?envType=study-plan-v2&envId=top-interview-150
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
function flatten(root: TreeNode | null): void {
	const helper = (node: TreeNode | null): TreeNode | null => {
		if (!node || (!node.left && !node.right)) return node;
		const leftLast = helper(node.left);
		const rightLast = helper(node.right);
		if (leftLast) {
			leftLast.right = node.right;
			node.right = node.left;
			node.left = null;
		}
		return rightLast ?? leftLast;
	};
	helper(root);
}
// #endregion
export default {};
