// https://leetcode.cn/problems/reverse-linked-list-ii/description/?envType=study-plan-v2&envId=top-interview-150

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
	const dummy = new ListNode(0, head);
	let pre = dummy;
	for (let i = 0; i < left - 1; i++) pre = pre.next as ListNode;

	let l = left;
	let cur = pre.next as ListNode;
	while (l < right) {
		let curNext = cur.next;
		cur.next = cur.next!.next;
		curNext!.next = pre.next;
		pre.next = curNext;
		l++;
	}

	return dummy.next;
}
// #endregion

export default {};
