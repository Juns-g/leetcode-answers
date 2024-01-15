// https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii/description/?envType=study-plan-v2&envId=top-interview-150
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
function deleteDuplicates(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;
	const dummy = new ListNode(0, head);
	let fast = dummy.next;
	let slow = dummy;

	while (fast) {
		while (fast.next && fast.val === fast.next.val) {
			fast = fast.next;
		}
		if (slow.next !== fast) {
			slow.next = fast.next;
		} else {
			slow = fast;
		}
		fast = fast.next;
	}

	return dummy.next;
}
// #endregion

export default {};
