// https://leetcode.cn/problems/average-of-levels-in-binary-tree/description/?envType=study-plan-v2&envId=top-interview-150
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
function averageOfLevels(root: TreeNode | null): number[] {
	// 层序遍历然后取平均值
	const res: number[][] = [];
	if (!root) return [];
	const queue: TreeNode[] = [root];
	while (queue.length) {
		let len = queue.length;
		const tempArr: number[] = [];
		while (len--) {
			const node = queue.shift();
			tempArr.push(node!.val);
			node?.left && queue.push(node.left);
			node?.right && queue.push(node.right);
		}
		res.push(tempArr);
	}
	return res.map((item) => getArrayAverage(item));
}
function getArrayAverage(nums: number[]) {
	let sum = 0;
	nums.forEach((item) => {
		sum += item;
	});
	return sum / nums.length;
}
// #endregion

export default {};
