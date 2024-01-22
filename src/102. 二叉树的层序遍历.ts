// https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
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
function levelOrder(root: TreeNode | null): number[][] {
	const res: number[][] = [];
	if (!root) return res;
	const queue = [root];
	while (queue.length) {
		const tempArr: number[] = [];
		let len = queue.length;
		while (len--) {
			const node = queue.shift();
			tempArr.push(node!.val);
			node?.left && queue.push(node.left);
			node?.right && queue.push(node.right);
		}
		res.push(tempArr);
	}
	return res;
}
// #endregion

export default {};

// 有一个[107. 二叉树的层序遍历 II](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/description/)很简单
// 直接把这一题的最后reverse一下就可以