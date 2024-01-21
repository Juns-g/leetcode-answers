// https://leetcode.cn/problems/same-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
// 递归dfs
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
	if (!p && !q) return true;
	if (!p) return false;
	if (!q) return false;
	if (p.val !== q.val) return false;
	else return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
// 非递归前序遍历
function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
	if (!p && !q) return true;
	if (!p) return false;
	if (!q) return false;
	const pStack: (TreeNode | null)[] = [p];
	const qStack: (TreeNode | null)[] = [q];
	while (pStack.length || qStack.length) {
		const pNode = pStack.pop();
		const qNode = qStack.pop();
		if (!pNode && !qNode) continue;
		if (!pNode) return false;
		if (!qNode) return false;
		if (pNode.val !== qNode.val) return false;
		pStack.push(pNode.right);
		pStack.push(pNode.left);
		qStack.push(qNode.right);
		qStack.push(qNode.left);
	}
	return true;
}
// #endregion

export default {};
