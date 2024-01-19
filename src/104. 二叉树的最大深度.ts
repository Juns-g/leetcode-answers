// https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150

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
// 递归 + dfs
function maxDepth(root: TreeNode | null): number {
	if (!root) return 0;
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
// 迭代 + bfs
function maxDepth2(root: TreeNode | null): number {
	if (!root) return 0;
	const queue: TreeNode[] = [root];
	let h = 0;
	while (queue.length) {
		let len = queue.length;
		while (len--) {
			const node = queue.shift() as TreeNode;
			node?.left && queue.push(node.left);
			node?.right && queue.push(node.right);
		}
		h++;
	}
	return h;
}
// #endregion

export default {};
