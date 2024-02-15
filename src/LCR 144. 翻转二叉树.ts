// https://leetcode.cn/problems/er-cha-shu-de-jing-xiang-lcof/description/
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
function mirrorTree(root: TreeNode | null): TreeNode | null {
	if (!root) return root;
	let left = root.left ?? null;
	root.left = root.right;
	root.right = left;
	mirrorTree(root.left);
	mirrorTree(root.right);
	return root;
}

// 迭代
function mirrorTree_2(root: TreeNode | null): TreeNode | null {
	if (!root) return root;
	let stack = [root];
	while (stack.length) {
		let node = stack.pop() as TreeNode;
		let temp = node.left;
		node.left = node.right;
		node.right = temp;

		node.left && stack.push(node.left);
		node.right && stack.push(node.right);
	}
	return root;
}
// #endregion
export default {};
