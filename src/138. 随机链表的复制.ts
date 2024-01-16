// https://leetcode.cn/problems/copy-list-with-random-pointer/description/?envType=study-plan-v2&envId=top-interview-150

class Node {
	val: number;
	next: Node | null;
	random: Node | null;
	constructor(val?: number, next?: Node, random?: Node) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
		this.random = random === undefined ? null : random;
	}
}

// #region
function copyRandomList(head: Node | null): Node | null {
	if (!head) return null;
	let old: Node | null = head;
	const newHead = new Node(0);
	let newCur: Node | null = newHead;
	const map = new Map<Node, Node>();

	while (old) {
		newCur!.val = old.val;
		newCur!.next = old.next ? new Node() : null;
		map.set(old, newCur as Node);
		old = old.next;
		newCur = newCur!.next;
	}
	newCur = newHead;
	old = head;
	while (old) {
		newCur!.random = old.random ? (map.get(old.random) as Node) : null;
		old = old.next;
		newCur = newCur!.next;
	}

	return newHead;
}
// #endregion

export default {};
