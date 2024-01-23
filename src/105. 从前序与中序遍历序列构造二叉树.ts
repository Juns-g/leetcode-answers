// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150
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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (!preorder.length) return null;
	const rootVal = preorder.shift();
	const rootIndex = inorder.findIndex((val) => val === rootVal);
	const root = new TreeNode(rootVal);
	root.left = buildTree(preorder.slice(0, rootIndex), inorder.slice(0, rootIndex));
	root.right = buildTree(preorder.slice(rootIndex), inorder.slice(rootIndex + 1));
	return root;
}
// #endregion

export default {};
