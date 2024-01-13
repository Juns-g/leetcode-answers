// https://leetcode.cn/problems/reverse-linked-list/description/

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}
// #region
function reverseList(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;
	let pre: ListNode | null = null,
		cur: ListNode | null = head,
		temp: ListNode | null = null;
	while (cur) {
		temp = cur.next;
		cur.next = pre;
		pre = cur;
		cur = temp;
	}
	return pre;
}
// #endregion

export default {};
