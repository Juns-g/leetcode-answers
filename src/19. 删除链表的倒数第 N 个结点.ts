// https://leetcode.cn/problems/remove-nth-node-from-end-of-list/description/?envType=study-plan-v2&envId=top-interview-150
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	const dummy = new ListNode(0, head);
	let slow: ListNode | null = dummy,
		fast: ListNode | null = dummy;
	let copyN = n;
	while (copyN--) fast = fast!.next;
	while (fast && fast.next) {
		slow = slow!.next;
		fast = fast.next;
	}
    slow!.next=slow!.next!.next
	return dummy.next;
}
// #endregion

export default {};
