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
// 递归 + 前中后序遍历
function invertTree(root: TreeNode | null): TreeNode | null {
	if (!root) return null;
	const l = root.left;
	root.left = root.right;
	root.right = l;
	// 前序
	invertTree(root.left);
	// 中序
	invertTree(root.right);
	// 后序
	return root;
}

// 迭代 + 前序
function invertTree_2(root: TreeNode | null): TreeNode | null {
	if (!root) return root;
	const stack = [root];
	while (stack.length) {
		const node = stack.pop()!;
		node.left && stack.push(node.left);
		node.right && stack.push(node.right);
		const l = node.left;
		node.left = node.right;
		node.right = l;
	}
	return root;
}
// #endregion

export default {};
