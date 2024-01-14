// https://leetcode.cn/problems/partition-list/description/?envType=study-plan-v2&envId=top-interview-150
class ListNode {
	val: number;
	next: ListNode | null;
	constructor(val?: number, next?: ListNode | null) {
		this.val = val === undefined ? 0 : val;
		this.next = next === undefined ? null : next;
	}
}

// #region
function partition(head: ListNode | null, x: number): ListNode | null {
	// 直接模拟得了
	const smallList = new ListNode(0);
	const bigList = new ListNode(0);
	let cur = head;
	let small = smallList,
		big = bigList;
	while (cur) {
		if (cur.val < x) {
			small.next = cur;
			small = small.next;
		} else {
			big.next = cur;
			big = big.next;
		}
		cur = cur.next;
	}
	big.next = null;
	small.next = bigList.next;
	return smallList.next;
}
// #endregion

export default {};
