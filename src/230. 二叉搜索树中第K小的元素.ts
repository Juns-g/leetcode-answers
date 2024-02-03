// https://leetcode.cn/problems/kth-smallest-element-in-a-bst/description/?envType=study-plan-v2&envId=top-interview-150
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
function kthSmallest(root: TreeNode | null, k: number): number {
	let res = 0;
	let count = 0;
	const inorder = (root: TreeNode | null) => {
		if (!root) return;
		inorder(root.left);
		count++;
		if (count === k) {
			res = root.val;
			return;
		}
		inorder(root.right);
	};
	inorder(root);
	return res;
}
// #endregion

export default {};
