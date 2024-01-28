// https://leetcode.cn/problems/binary-search-tree-iterator/description/?envType=study-plan-v2&envId=top-interview-150
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
class BSTIterator {
	index: number;
	queue: number[];
	constructor(root: TreeNode | null) {
		this.index = 0;
		this.queue = [];
		this.dfs(root);
	}
	dfs(root: TreeNode | null) {
		if (!root) return;
		root.left && this.dfs(root.left);
		this.queue.push(root.val);
		root.right && this.dfs(root.right);
	}
	next(): number {
		return this.queue[this.index++];
	}
	hasNext(): boolean {
		return this.index < this.queue.length;
	}
}
// #endregion

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
