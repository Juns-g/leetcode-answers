// https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
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
function inorderTraversal(root: TreeNode | null): number[] {
	const ans: number[] = [];
	// 左根右
	const inorder = (root: TreeNode | null) => {
		if (!root) return;
		root.left && inorder(root.left);
		ans.push(root.val);
		root.right && inorder(root.right);
	};
	inorder(root);
	return ans;
}
// 迭代
function inorderTraversal2(root: TreeNode | null): number[] {
	const ans: number[] = [];
	const stack: TreeNode[] = [];
	let cur: TreeNode | null = root;

	while (stack.length || cur) {
		while (cur) {
			stack.push(cur);
			cur = cur.left;
		}
		cur = stack.pop() as TreeNode;
		ans.push(cur.val);
		cur = cur.right;
	}
	return ans;
}
// #endregion

export default {};
