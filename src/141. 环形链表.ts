// https://leetcode.cn/problems/linked-list-cycle/description/?envType=study-plan-v2&envId=top-interview-150

class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
function hasCycle(head: ListNode | null): boolean {
	// 快慢指针，如果俩指针相遇则代表有环
	if (!head || !head.next) return false;
	let slow = head,
		fast = slow.next;
	while (fast && fast.next) {
		if (slow === fast) return true;
		if (slow.next === null || fast === null) return false;
		slow = slow.next;
		fast = fast.next.next;
	}

	return false;
}
// #endregion

export default {};
