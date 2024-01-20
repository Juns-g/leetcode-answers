// https://leetcode.cn/problems/binary-tree-postorder-traversal/description/
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
function postorderTraversal(root: TreeNode | null): number[] {
	const res: number[] = [];
	const postorder = (root: TreeNode | null) => {
		if (!root) return;
		root.left && postorder(root.left);
		root.right && postorder(root.right);
		res.push(root.val);
	};
	postorder(root);
	return res;
}
// 迭代
// 后序直接反转前序遍历就可以，不用想其他办法
function postorderTraversal2(root: TreeNode | null): number[] {
	if (!root) return [];
	const res: number[] = [];
	const stack: TreeNode[] = [root];
	while (stack.length) {
		const node = stack.pop() as TreeNode;
		res.push(node.val);
		node.right && stack.push(node.right);
		node.left && stack.push(node.left);
	}
	return res.reverse();
	// 前序遍历的翻转就是后续遍历
}

function postorderTraversal3(root: TreeNode | null): number[] {
	if (!root) return [];
	const res: number[] = [];
	const stack: TreeNode[] = [root];
	while (stack.length) {
		const node = stack.pop() as TreeNode;
		res.unshift(node.val); // 从头部插入
		node.left && stack.push(node.left);
		node.right && stack.push(node.right);
	}
	return res;
}
// #endregion

export default {};
