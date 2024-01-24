// https://leetcode.cn/problems/populating-next-right-pointers-in-each-node-ii/description/?envType=study-plan-v2&envId=top-interview-150
class Node {
	val: number;
	left: Node | null;
	right: Node | null;
	next: Node | null;
	constructor(val?: number, left?: Node, right?: Node, next?: Node) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
		this.next = next === undefined ? null : next;
	}
}
// #region

function connect(root: Node | null): Node | null {
	if (!root) return null;
	// 层序遍历然后遍历数组里面的
	function levelOrder(root: Node): Node[][] {
		const res: Node[][] = [];
		const queue = [root];
		while (queue.length) {
			const tempArr: Node[] = [];
			let len = queue.length;
			while (len--) {
				const cur = queue.shift() as Node;
				tempArr.push(cur);
				cur?.left && queue.push(cur.left);
				cur?.right && queue.push(cur.right);
			}
			res.push(tempArr);
		}
		return res;
	}
	const nodeArr = levelOrder(root);
	nodeArr.forEach((nodes) => {
		for (let i = 0; i < nodes.length; i++) {
			nodes[i].next = nodes[i + 1] ?? null;
		}
	});
	return root;
}
// #endregion
export default {};
