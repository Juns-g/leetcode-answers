// https://leetcode.cn/problems/binary-tree-preorder-traversal/description/
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
// 递归
function preorderTraversal(root: TreeNode | null): number[] {
	const res: number[] = [];
	const preorder = (root: TreeNode | null) => {
		if (!root) return;
		res.push(root.val);
		root.left && preorder(root.left);
		root.right && preorder(root.right);
	};
	preorder(root);
	return res;
}
// 迭代
function preorderTraversal2(root: TreeNode | null): number[] {
	if (!root) return [];
	const res: number[] = [];
	const stack: TreeNode[] = [root];
	while (stack.length) {
		const node = stack.pop() as TreeNode;
		res.push(node.val);
		node.right && stack.push(node.right);
		node.left && stack.push(node.left);
	}
	return res;
}
// #endregion

export default {};
