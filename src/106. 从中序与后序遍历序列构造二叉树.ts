// https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/?envType=study-plan-v2&envId=top-interview-150
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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	if (!inorder.length) return null;
	const rootVal = postorder.pop();
	const rootIndex = inorder.findIndex((item) => item === rootVal);
	const root = new TreeNode(rootVal);
	root.left = buildTree(inorder.slice(0, rootIndex), postorder.slice(0, rootIndex));
	root.right = buildTree(inorder.slice(rootIndex + 1), postorder.slice(rootIndex));
	return root;
}
// #endregion

export default {};
