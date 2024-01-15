// https://leetcode.cn/problems/add-two-numbers/description/?envType=study-plan-v2&envId=top-interview-150
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	if (!l1) return l2;
	if (!l2) return l1;
	const dummy = new ListNode(0);
	let cur = dummy;
	let left: ListNode | null = l1,
		right: ListNode | null = l2,
		carry = 0;

	while (left || right || carry) {
		if (left) carry += left.val;
		if (right) carry += right.val;
		cur.next = new ListNode(carry % 10);
		cur = cur.next;
		carry = Math.floor(carry / 10);
		if (left) left = left.next;
		if (right) right = right.next;
	}

	return dummy.next;
}
// #endregion

export default {};
