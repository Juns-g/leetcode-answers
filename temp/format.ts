// 二叉树节点
class Node {
	val: number;
	left: Node | null;
	right: Node | null;
	constructor(val: number) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

// 二叉树
class Tree {
	root: Node | null;
	constructor() {
		this.root = null;
	}
}

export default {};
