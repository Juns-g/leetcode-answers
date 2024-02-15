// https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/
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
function minDepth(root: TreeNode | null): number {
	if (!root) return 0;
	const leftDepth = minDepth(root.left);
	const rightDepth = minDepth(root.right);
	if (!root.left && root.right) {
		return 1 + rightDepth;
	}
	if (!root.right && root.left) {
		return 1 + leftDepth;
	}
	return 1 + Math.min(leftDepth, rightDepth);
}
// 层序遍历
function minDepth_2(root: TreeNode | null): number {
	if (!root) return 0;
	let depth = 0;
	const stack = [root];
	while (stack.length) {
		let len = stack.length;
		depth++;
		while (len--) {
			const node = stack.shift() as TreeNode;
			node.left && stack.push(node.left);
			node.right && stack.push(node.right);
			if (!node.left && !node.right) {
				return depth;
			}
		}
	}
	return depth;
}
// #endregion
export default {};
