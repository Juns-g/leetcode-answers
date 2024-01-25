// https://leetcode.cn/problems/count-complete-tree-nodes/description/?envType=study-plan-v2&envId=top-interview-150
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
function countNodes(root: TreeNode | null): number {
	if (!root) return 0;
	// 层序遍历取最后面的值
	let res = 0;
	const queue = [root];
	while (queue.length) {
		let len = queue.length;
		while (len--) {
			const node = queue.shift();
			res++;
			node?.left && queue.push(node.left);
			node?.right && queue.push(node.right);
		}
	}
	return res;
}
// #endregion
export default {};
