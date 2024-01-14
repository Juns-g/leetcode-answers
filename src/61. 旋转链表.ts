// https://leetcode.cn/problems/rotate-list/description/?envType=study-plan-v2&envId=top-interview-150

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
function rotateRight(head: ListNode | null, k: number): ListNode | null {
	if (!head || !head.next) return head;
	// 先首尾相连，并且拿到len
	let len = 1;
	let last: ListNode | null = head;
	while (last && last.next) {
		last = last.next;
		len++;
	}
	last.next = head; // 首尾相连
	// k可能比len大
	let index = len - (k % len) - 1;
	last = head;
	while (index--) {
		last = last!.next;
	}
	const res = last!.next;
	last!.next = null;
	return res;
}
// #endregion

export default {};
